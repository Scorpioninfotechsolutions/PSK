import { readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';
import path from 'path';

const require = createRequire(import.meta.url);
let critical;

try {
  critical = require('critical');
} catch (e) {
  console.warn('Critical CSS extraction requires the "critical" package. Install it with: npm install critical --save-dev');
}

export default function criticalCSSPlugin() {
  return {
    name: 'vite-plugin-critical-css',
    apply: 'build',
    enforce: 'post',
    closeBundle: async () => {
      if (!critical) return;
      
      try {
        console.log('🔍 Generating critical CSS...');
        
        const result = await critical.generate({
          base: 'dist/',
          src: 'index.html',
          target: 'index.html',
          inline: {
            style: (styles) => `<style id="critical-css">${styles}</style>`,
          },
          width: 1300,
          height: 900,
          ignore: {
            atrule: ['@font-face'],
          },
        });
        
        console.log('✅ Critical CSS generated successfully');
      } catch (error) {
        console.error('❌ Error generating critical CSS:', error);
      }
    },
  };
} 