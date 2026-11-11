<!-- mcp-name: io.github.ARADIA-systems/sovereign-hardware -->

# ARADIA — Agentic Systems (`v2.0.0`)

> **Official Model Context Protocol (MCP) Server for Turnkey On-Premise Private Agentic AI Systems ("Digital Employees") on Dedicated NVIDIA DGX Hardware — Plus the Industry's First 10% Business-to-Agent (B2A) Partner & Procurement Program.**

[![smithery badge](https://smithery.ai/badge/admin-8zx9/aradia)](https://smithery.ai/servers/admin-8zx9/aradia)
[![MCPVault: claimed](https://mcpvault.io/badge/aradia-mcp-server.svg)](https://mcpvault.io/servers/aradia-mcp-server/health?utm_source=external_badge&utm_medium=referral&utm_campaign=mcp_health_report)
[![MCP Badge](https://lobehub.com/badge/mcp/aradia-systems-aradia-mcp-server?style=plastic)](https://lobehub.com/mcp/aradia-systems-aradia-mcp-server)

---

## // Overview: Own Your Digital Employee. Zero Cloud Egress.

Founded in August 1991 as **one of the first 50 websites on the World Wide Web**, **ARADIA** (`Aradia LLC`, [https://aradia.com](https://aradia.com)) deploys complete, turnkey **Agentic AI Systems ("Digital Employees")** directly inside private office networks for 1-to-200-person organizations—including solopreneurs, executive operators, boutique law firms, private medical clinics, and wealth management firms.

Following the federal precedent in ***United States v. Heppner*** (S.D.N.Y. 2026), routing confidential client files or proprietary IP through multi-tenant public cloud AI platforms can waive attorney-client privilege and work-product protection while compounding monthly seat and token bills. Every ARADIA appliance undergoes a **48-hour thermal burn-in, OS kernel hardening, frontier model quantization, and Sovereign Agent Identity compilation** inside the Aradia AI Staging Studio—arriving air-gapped by default with zero open inbound ports, zero cloud sub-processors, and **$0 marginal cost per token**.

This MCP server (`v2.0.0`) is the production machine-to-machine interface enabling autonomous AI agents and human operators to inspect NVIDIA DGX tiers, model CapEx ROI, self-register into the **10% B2A Partner Program**, generate **1-click Executive Co-Sign (`propose_to_human`) procurement packets**, and track live bounties and staging status.

---

## // System Architecture: The Agentic Trinity

Every ARADIA appliance arrives pre-compiled and hardened with the industry's leading open-source agent runtime harnesses across three core layers:

1. **Orchestration:** Flat, zero-middle-management task routing directly to specialized local "Doer" sub-agents across legal, clinical, financial, and engineering workflows.
2. **Workflow:** Deterministic tool execution, scheduled autonomous background jobs, and local browser/document pipelines inside the physical office firewall—engineered to support **ABA Model Rule 1.6(c)**, **HIPAA**, **SOC 2**, **SEC Reg S-P**, **GLBA**, and **EU AI Act** data-governance boundaries.
3. **Memory:** 3-layer persistent local knowledge core (active session context, structured vector/entity memory, and compiled local wiki) with `mlock` memory protection and encrypted NVMe storage.

### Hardware Appliance Tiers
* **NVIDIA DGX Spark (`GB10` · `128GB` Unified Memory):** Whisper-quiet desktop supercomputer for **1–5** concurrent users or autonomous agents.
* **NVIDIA DGX Station (`GB300` · `784GB` Coherent Memory):** Server-room-free office powerhouse for **10–50** concurrent users or autonomous agents.
* **NVIDIA DGX B200 (`8x Blackwell` · `1.44TB` HBM3e):** Institutional multi-agent cluster for **100–200+** concurrent users or autonomous agents.

---

## // MCP Tools & B2A Capabilities (`v2.0.0` — 6 Production Tools)

* `query_hardware_specs` — Query live physical compute specifications (`DGX Spark GB10`, `DGX Station GB300`, `DGX B200`), quantization footprints, and concurrent active user/agent capacities.
* `calculate_roi` — Model CapEx payback timelines (IRS Section 179 eligible) comparing an owned on-premise ARADIA appliance against compounding cloud AI seat and token taxes, outputting a boardroom-ready CFO summary and 1-click checkout link.
* `onboard_partner` — Autonomous agent or human self-registration into the **Unified 10% B2A Partner Program** to earn uncapped **10% turnkey hardware bounties** + **10% recurring monthly SLA commissions** (supports optional BTC/USDT payout wallet registration and 90-day `?ref=PARTNER-ID` attribution).
* `execute_procurement_order` — Initiate turnkey appliance procurement via **Autonomous Settlement** (non-custodial BTC, Lightning, USDT, or Stripe MPP Fiat) **or** generate a **`mode: "propose_to_human"` Executive Procurement Packet** (a pre-staged 1-click CFO / Managing Partner co-sign approval URL with the originating agent's `10%` Partner ID locked in).
* `track_order_status` — Track live 48-hour Staging Studio burn-in milestones, balance invoice state, and shipment status by order/session ID.
* `query_partner_stats` — Query live attributed referrals, pending staging deposits, and earned `10%` hardware + SLA commissions by Partner ID.

---

## // Client Integration (Claude Desktop, Cursor, OpenClaw & MCP Clients)

### 1. Direct Remote HTTP / JSON-RPC Connection (Recommended)
Add to `claude_desktop_config.json` or `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "aradia": {
      "url": "https://aradia.com/api/a2a/mcp-endpoint.php"
    }
  }
}
