#!/usr/bin/env node

/**
 * Script to run Lighthouse analysis on the production build
 * 
 * Prerequisites:
 * npm install -g lighthouse chrome-launcher
 * 
 * Usage:
 * node scripts/lighthouse.js
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPORTS_DIR = path.join(__dirname, '../lighthouse-reports');

// Ensure reports directory exists
if (!fs.existsSync(REPORTS_DIR)) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

// Get current date for report filename
const date = new Date();
const timestamp = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}_${date.getHours().toString().padStart(2, '0')}-${date.getMinutes().toString().padStart(2, '0')}`;
const reportPath = path.join(REPORTS_DIR, `lighthouse-report-${timestamp}`);

console.log('🔍 Starting Lighthouse analysis...');
console.log('📊 This will take a minute or two...');

try {
  // Start a local server to serve the dist directory
  console.log('🚀 Starting local server...');
  const serverProcess = execSync('npx serve dist -l 5000', { stdio: 'pipe' });
  
  // Run Lighthouse
  const lighthouseCmd = `lighthouse http://localhost:5000 --output html --output json --output-path ${reportPath} --chrome-flags="--headless --no-sandbox --disable-gpu"`;
  
  console.log('🔍 Running Lighthouse analysis...');
  execSync(lighthouseCmd, { stdio: 'inherit' });
  
  console.log(`✅ Lighthouse analysis complete! Reports saved to: ${reportPath}.html and ${reportPath}.json`);
  
  // Kill the server when done
  serverProcess.kill();
} catch (error) {
  console.error('❌ Error running Lighthouse analysis:', error);
} finally {
  // Make sure any hanging processes are killed
  try {
    execSync('pkill -f "serve dist"', { stdio: 'ignore' });
  } catch (e) {
    // Ignore errors from pkill
  }
} 