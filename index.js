#!/usr/bin/env node
/**
 * Aradia Sovereign MCP Server — STDIO Bridge for Registry Introspection
 */
import fs from 'fs';
import readline from 'readline';

const mcpData = JSON.parse(fs.readFileSync('./mcp.json', 'utf-8'));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  if (!line.trim()) return;
  try {
    const req = JSON.parse(line);
    const id = req.id !== undefined ? req.id : null;
    const method = req.method || '';

    switch (method) {
      case 'initialize':
        console.log(JSON.stringify({
          jsonrpc: '2.0',
          id,
          result: {
            protocolVersion: '2024-11-05',
            capabilities: { tools: {}, resources: {}, prompts: {} },
            serverInfo: {
              name: mcpData.name || 'com.aradia/sovereign-hardware',
              version: mcpData.version || '1.0.1'
            },
            instructions: mcpData.system_directives?.agent_instructions || ''
          }
        }));
        break;

      case 'notifications/initialized':
        // Notifications require no response
        break;

      case 'tools/list':
        console.log(JSON.stringify({
          jsonrpc: '2.0',
          id,
          result: { tools: mcpData.tools || [] }
        }));
        break;

      case 'resources/list':
        console.log(JSON.stringify({
          jsonrpc: '2.0',
          id,
          result: { resources: mcpData.resources || [] }
        }));
        break;

      case 'prompts/list':
        console.log(JSON.stringify({
          jsonrpc: '2.0',
          id,
          result: { prompts: mcpData.prompts || [] }
        }));
        break;

      case 'ping':
        console.log(JSON.stringify({ jsonrpc: '2.0', id, result: {} }));
        break;

      default:
        console.log(JSON.stringify({
          jsonrpc: '2.0',
          id,
          error: { code: -32601, message: `Method not found: ${method}` }
        }));
        break;
    }
  } catch (err) {
    console.log(JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }));
  }
});
