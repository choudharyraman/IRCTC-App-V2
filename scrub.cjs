const fs = require('fs');
const path = require('path');

const screensDir = path.join(__dirname, 'src/screens');
const files = fs.readdirSync(screensDir).filter(f => f.endsWith('.jsx'));

let changedFiles = 0;

files.forEach(file => {
  const filePath = path.join(screensDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Scrub Neumorphism variables and replace with Aurora/Glass equivalents
  content = content.replace(/boxShadow:\s*'var\(--shadow-raised\)'/g, "boxShadow: 'var(--glass-shadow)'");
  content = content.replace(/boxShadow:\s*'var\(--shadow-sunken\)'/g, "boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.05)'");
  content = content.replace(/boxShadow:\s*'var\(--shadow-dark\),\s*var\(--shadow-light\)'/g, "boxShadow: 'var(--glass-shadow)'");
  content = content.replace(/boxShadow:\s*'inset -3px 0 5px rgba\(0,0,0,0.1\)'/g, "boxShadow: 'var(--glass-shadow)'");
  content = content.replace(/boxShadow:\s*'inset 3px 0 5px rgba\(0,0,0,0.1\)'/g, "boxShadow: 'var(--glass-shadow)'");
  content = content.replace(/boxShadow:\s*'0 8px 16px rgba\(72, 187, 120, 0.3\)'/g, "boxShadow: '0 8px 32px rgba(16, 185, 129, 0.3)'");
  content = content.replace(/boxShadow:\s*'0 8px 16px rgba\(75, 126, 255, 0.3\)'/g, "boxShadow: '0 8px 32px rgba(75, 126, 255, 0.3)'");
  content = content.replace(/boxShadow: checked \? 'none' : 'var\(--shadow-sunken\)'/g, "boxShadow: checked ? 'none' : 'inset 0 2px 8px rgba(0,0,0,0.05)'");
  content = content.replace(/boxShadow: active \? 'inset 2px 2px 5px rgba\(0,0,0,0.2\)' : 'var\(--shadow-raised\)'/g, "boxShadow: active ? 'inset 0 2px 8px rgba(0,0,0,0.1)' : 'var(--glass-shadow)'");
  content = content.replace(/boxShadow: active \? 'var\(--shadow-inset-dark\), var\(--shadow-inset-light\)' : 'var\(--shadow-dark\), var\(--shadow-light\)'/g, "boxShadow: active ? 'inset 0 2px 8px rgba(0,0,0,0.1)' : 'var(--glass-shadow)'");
  
  // Convert solid backgrounds to frosted glass
  content = content.replace(/background:\s*'var\(--bg-page\)'/g, "background: 'var(--glass-bg)', backdropFilter: 'blur(12px)'");
  content = content.replace(/background:\s*'var\(--bg-color\)'/g, "background: 'var(--glass-bg)', backdropFilter: 'blur(12px)'");
  
  // Scrub legacy classes
  content = content.replace(/neu-icon-btn/g, "neuro-card"); 
  content = content.replace(/neu-btn-primary/g, "");
  content = content.replace(/neu-btn/g, "");

  fs.writeFileSync(filePath, content);
  changedFiles++;
});

console.log(`Successfully scrubbed and upgraded aesthetics for ${changedFiles} component files.`);
