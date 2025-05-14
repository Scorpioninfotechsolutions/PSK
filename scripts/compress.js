import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';
import { promisify } from 'util';
import { pipeline } from 'stream';

const pipelineAsync = promisify(pipeline);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '../dist');

// Extensions to compress
const compressibleExtensions = [
  '.js', '.css', '.html', '.json', '.svg', 
  '.txt', '.ttf', '.woff', '.woff2', '.eot', '.xml'
];

/**
 * Check if a file should be compressed based on its extension
 */
function shouldCompress(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return compressibleExtensions.includes(ext) && !filePath.endsWith('.gz') && !filePath.endsWith('.br');
}

/**
 * Create Brotli version of a file
 */
async function createBrotliFile(filePath) {
  const source = fs.createReadStream(filePath);
  const destination = fs.createWriteStream(`${filePath}.br`);
  const brotli = zlib.createBrotliCompress({ 
    params: {
      [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
    }
  });
  
  try {
    await pipelineAsync(source, brotli, destination);
    console.log(`✅ Created ${filePath}.br`);
  } catch (err) {
    console.error(`❌ Error compressing ${filePath} with Brotli:`, err);
  }
}

/**
 * Create Gzip version of a file
 */
async function createGzipFile(filePath) {
  const source = fs.createReadStream(filePath);
  const destination = fs.createWriteStream(`${filePath}.gz`);
  const gzip = zlib.createGzip({ level: 9 }); // Maximum compression
  
  try {
    await pipelineAsync(source, gzip, destination);
    console.log(`✅ Created ${filePath}.gz`);
  } catch (err) {
    console.error(`❌ Error compressing ${filePath} with Gzip:`, err);
  }
}

/**
 * Process a directory recursively
 */
async function processDirectory(directoryPath) {
  const entries = fs.readdirSync(directoryPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const entryPath = path.join(directoryPath, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(entryPath);
    } else if (shouldCompress(entryPath)) {
      await createGzipFile(entryPath);
      await createBrotliFile(entryPath);
    }
  }
}

/**
 * Main function
 */
async function main() {
  console.log('📦 Post-build compression started...');
  
  try {
    await processDirectory(distPath);
    console.log('✅ Post-build compression completed successfully!');
  } catch (err) {
    console.error('❌ Error during post-build compression:', err);
    process.exit(1);
  }
}

main(); 