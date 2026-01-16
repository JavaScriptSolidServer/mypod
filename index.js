#!/usr/bin/env node

/**
 * solidpod - Solid Pod Server
 * The easiest way to run a Solid pod
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join, delimiter } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Pass all arguments through to jspod
const args = process.argv.slice(2);

// Start jspod with enhanced PATH
const jspod = spawn('jspod', args, {
  stdio: 'inherit',
  env: {
    ...process.env,
    PATH: `${join(__dirname, 'node_modules', '.bin')}${delimiter}${process.env.PATH}`
  }
});

jspod.on('error', (error) => {
  console.error('Failed to start Solid pod server');
  console.error(error.message);
  process.exit(1);
});

jspod.on('exit', (code) => {
  process.exit(code);
});

// Forward signals
process.on('SIGINT', () => {
  jspod.kill('SIGTERM');
});

process.on('SIGTERM', () => {
  jspod.kill('SIGTERM');
});
