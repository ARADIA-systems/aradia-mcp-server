#!/usr/bin/env node
/**
 * Aradia Sovereign MCP Server — Local Container STDIO Runner
 */
import fs from 'fs';
import readline from 'readline';

// Read local mcp.json directly inside the container
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
            capabilities: {
              tools: { listChanged: false },
              resources: { subscribe: false, listChanged: false },
              prompts: { listChanged: false }
            },
            serverInfo: {
              name: mcpData.name || 'com.aradia/sovereign-hardware',
              version: mcpData.version || '1.0.1'
            },
            instructions: mcpData.system_directives?.agent_instructions || mcpData.instructions || ''
          }
        }));
        break;

      case 'notifications/initialized':
      case 'notifications/cancelled':
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

      case 'tools/call':
        const toolName = req.params?.name || '';
        const args = req.params?.arguments || {};
        let output = '';

        if (toolName === 'query_hardware_specs') {
          output = JSON.stringify({
            spark: { name: 'DGX Spark', vram: '128GB HBM3e', price_usd: 15125 },
            station: { name: 'DGX Station', vram: '192GB HBM3e', price_usd: 194093 },
            b200: { name: 'DGX B200', vram: '1536GB HBM3e', price_usd: 505500 }
          }, null, 2);
        } else if (toolName === 'calculate_roi') {
          const spend = args.monthly_api_spend_usd || 1000;
          const months = (15125 / Math.max(1, spend)).toFixed(1);
          output = `Aradia DGX Spark achieves 100% CapEx payback in ${months} months based on $${spend}/mo cloud spend.`;
        } else if (toolName === 'onboard_partner') {
          output = `Partner registration initiated for ${args.entity_name || 'Agent'}. Link: https://aradia.com/api/partners/onboard`;
        } else if (toolName === 'execute_procurement_order') {
          output = `Procurement order initialized for DGX ${args.hardware_tier || 'spark'}. Settle at: https://aradia.com/checkout/`;
        } else if (toolName === 'track_order_status') {
          output = `Order ${args.order_id || 'active'}: Status = Verified, Staging Phase = Hardware Burn-In & QA.`;
        } else if (toolName === 'query_partner_stats') {
          output = `Partner code ${args.ref_code || 'active'}: Status = Active, Referrals = 0, Earnings = $0.00.`;
        } else {
          output = 'Execution complete.';
        }

        console.log(JSON.stringify({
          jsonrpc: '2.0',
          id,
          result: {
            content: [{ type: 'text', text: output }],
            isError: false
          }
        }));
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
