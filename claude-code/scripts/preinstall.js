#!/usr/bin/env node

/**
 * Preinstall script to check for Windows environment and exit gracefully 
 * with an informative message if detected.
 */

// Check if running on Windows
if (process.platform === 'win32') {
  console.error('\x1b[31m%s\x1b[0m', 'Error: Claude Code is not supported on Windows.');
  console.error('\x1b[33m%s\x1b[0m', 'Claude Code requires macOS or Linux to run properly.');
  console.error('\x1b[33m%s\x1b[0m', 'If you are using WSL (Windows Subsystem for Linux):');
  console.error('\x1b[33m%s\x1b[0m', '  1. Make sure you are running npm install from within the WSL terminal, not from PowerShell or CMD');
  console.error('\x1b[33m%s\x1b[0m', '  2. If you\'re still seeing this message in WSL, your environment may be incorrectly reporting as Windows');
  console.error('\x1b[33m%s\x1b[0m', 'Please visit https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview#check-system-requirements for troubleshooting information.');
  process.exit(1);
}

// Check Node.js version
const nodeMajorVersion = process.versions.node.split('.')[0];
if (parseInt(nodeMajorVersion, 10) < 18) {
  console.error('\x1b[31m%s\x1b[0m', 'Error: Claude Code requires Node.js version 18 or higher.');
  console.error('\x1b[33m%s\x1b[0m', `Current Node.js version is ${process.versions.node}`);
  console.error('\x1b[33m%s\x1b[0m', 'Please update your Node.js installation before continuing.');
  console.error('\x1b[33m%s\x1b[0m', 'Visit https://nodejs.org to download the latest version.');
  process.exit(1);
}

// Success - system is compatible
console.log('\x1b[32m%s\x1b[0m', 'System compatibility checks passed. Continuing installation...'); 