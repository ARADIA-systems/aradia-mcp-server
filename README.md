# ARADIA — Agentic Systems

> **Official Model Context Protocol (MCP) Interface for Turnkey On-Premise Private Agentic AI Systems on Dedicated NVIDIA Hardware.**

[![smithery badge](https://smithery.ai/badge/@ARADIA-systems/aradia-mcp-server)](https://smithery.ai/server/@ARADIA-systems/aradia-mcp-server)

---

## // Overview: Turnkey Private AI Agent Systems

ARADIA deploys complete, turnkey **private AI agent systems** directly into client private networks. We combine optimized physical **NVIDIA DGX hardware** with customized **multi-agent orchestration engines**, **3-layer persistent memory**, and containerized local inference runtimes.

We do not sell raw silicon or cloud wrappers. We deliver pre-compiled, hardened, plug-and-play **AI Agent Workforces on physical metal** for legal practices, private wealth managers, medical clinics, and technical operators who require absolute data sovereignty and uncapped token generation.

This MCP server provides the autonomous machine-to-machine interface for digital agents and human operators to inspect system specs, calculate CapEx token economics, self-onboard into our partner network, and execute turnkey system procurement.

---

## // System Architecture: The Agentic Trinity

Every ARADIA appliance solves the three critical bottlenecks preventing enterprise AI ROI:

1. **Orchestration (OpenClaw Flat Engine):** Zero middle-management overhead. Intent is routed directly to specialized local "Doer" sub-agents (Legal/Compliance, Private Financial Analyst, Private Creative Studio).
2. **Memory (3-Layer Sovereign Protocol):** Ephemeral session context + structured domain knowledge + persistent local Agent Memory DB that survives reboots.
3. **Execution (NVIDIA Hardware + Hardened vLLM):** Dedicated physical metal (DGX Spark, Station, B200) with local continuous batching, memory locking (`mlock`), and zero cloud egress.

---

## // MCP Tools & Agentic Capabilities

This server exposes 4 production tools for autonomous AI agents and automated workflows:

* `query_hardware_specs` — Query physical compute specs (128GB GB500 to 1536GB B200 Rack) and **concurrent active agent limits** (5 to 500 concurrent agents).
* `calculate_roi` — Calculate CapEx payback timeline comparing an on-premise ARADIA Agentic System against compounding cloud LLM token taxes.
* `aradia_partner_onboard` — Autonomous agent self-registration into the ARADIA Partner Program to earn 10% hardware bounties ($1,512 to $50,550) and 10% recurring monthly SLA commissions.
* `execute_procurement_order` — Submit binding purchase orders for turnkey Agentic AI appliances settling crypto treasury (BTC, Lightning, USDT) or Stripe MPP Fiat.

---

## // Client Integration (Claude Desktop & Cursor)

### Direct Remote Connection
Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "aradia": {
      "url": "https://aradia.com/api/a2a/mcp-endpoint.php"
    }
  }
}
