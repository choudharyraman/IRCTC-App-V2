/**
 * RailOne — Gemini AI Travel Agent Service
 * Uses fetch directly against the v1 stable endpoint
 * (avoids SDK endpoint issues with v1beta)
 */

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL   = 'gemini-1.5-flash';
const BASE    = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}`;

function checkKey() {
  if (!API_KEY || API_KEY === 'your_gemini_api_key_here') throw new Error('NO_API_KEY');
}

// ── PROMPT ────────────────────────────────────────────────────
function buildPrompt({ destination, days, budget, interests, origin }) {
  const interestStr = interests?.length ? interests.join(', ') : 'general sightseeing';
  const originStr   = origin ? `Starting from: ${origin}. Include a train recommendation.` : '';
  return `You are RailOne's expert AI travel planner for India.

Create a detailed ${days}-day itinerary for ${destination}.
${originStr}
Budget: ${budget} (Budget=₹1500-3000/day | Moderate=₹3000-7000/day | Luxury=₹7000+/day)
Interests: ${interestStr}

IMPORTANT: Respond ONLY with a valid JSON object. No markdown, no code fences, no explanation.

{
  "destination": "string",
  "totalDays": ${days},
  "budgetLevel": "${budget}",
  "estimatedCostPerDay": "₹X - ₹Y",
  "bestTimeToVisit": "Month range",
  "trainInfo": {
    "recommendedTrain": "Train name and number",
    "duration": "Journey time",
    "class": "Recommended class"
  },
  "days": [
    {
      "day": 1,
      "theme": "Theme for the day",
      "morning":   { "activity": "string", "description": "2-3 sentences", "duration": "X hours", "cost": "₹X" },
      "afternoon": { "activity": "string", "description": "2-3 sentences", "duration": "X hours", "cost": "₹X" },
      "evening":   { "activity": "string", "description": "2-3 sentences", "duration": "X hours", "cost": "₹X" },
      "stay": "Hotel or accommodation name and type",
      "localFood": "Must-try dish and where to get it",
      "tip": "One insider travel tip"
    }
  ],
  "packingEssentials": ["item1", "item2", "item3"]
}`;
}

// ── STREAMING GENERATION ──────────────────────────────────────
export async function generateItineraryStream(params, onChunk) {
  checkKey();
  const prompt = buildPrompt(params);

  const res = await fetch(`${BASE}:streamGenerateContent?alt=sse&key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 4096 },
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || `HTTP ${res.status}`);
  }

  const reader  = res.body.getReader();
  const decoder = new TextDecoder();
  let full = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    const raw = decoder.decode(value, { stream: true });
    // SSE: each line is "data: {...}"
    for (const line of raw.split('\n')) {
      if (!line.startsWith('data: ')) continue;
      const json = line.slice(6).trim();
      if (!json || json === '[DONE]') continue;
      try {
        const parsed = JSON.parse(json);
        const text   = parsed?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
        if (text) { full += text; onChunk(text, full); }
      } catch { /* skip malformed chunk */ }
    }
  }

  try {
    const clean = full.replace(/```json|```/g, '').trim();
    return JSON.parse(clean);
  } catch {
    throw new Error('PARSE_ERROR');
  }
}

// ── CONVERSATIONAL FOLLOW-UP ──────────────────────────────────
export async function chatWithAgent(messages) {
  checkKey();

  const contents = messages.map(m => ({
    role:  m.role === 'user' ? 'user' : 'model',
    parts: [{ text: m.content }],
  }));

  const res = await fetch(`${BASE}:generateContent?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents,
      systemInstruction: { parts: [{ text: "You are RailOne's AI travel expert for India. Give concise, practical travel advice in 2-3 sentences." }] },
      generationConfig: { temperature: 0.8, maxOutputTokens: 512 },
    }),
  });

  if (!res.ok) throw new Error(`Chat error: HTTP ${res.status}`);
  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? 'Sorry, I could not answer that.';
}
