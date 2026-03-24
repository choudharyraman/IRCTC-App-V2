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
  
  // Convert solid backgrounds to frosted glass
  content = content.replace(/background:\s*'var\(--bg-page\)'/g, "background: 'var(--glass-bg)', backdropFilter: 'blur(12px)'");
  content = content.replace(/background:\s*'var\(--bg-color\)'/g, "background: 'var(--glass-bg)', backdropFilter: 'blur(12px)'");
  
  // Scrub legacy classes
  content = content.replace(/neu-icon-btn/g, "neuro-card"); // neuro-card contains the glass variables
  content = content.replace(/neu-btn/g, "");

  fs.writeFileSync(filePath, content);
  changedFiles++;
});

console.log(`Successfully scrubbed and upgraded aesthetics for ${changedFiles} component files.`);
