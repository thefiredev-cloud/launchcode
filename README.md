<div align="center">

# LaunchCode

[![Build Status](https://img.shields.io/github/actions/workflow/status/thefiredev/launchcode/ci.yml?branch=main&style=flat-square&color=4f46e5)](https://github.com/thefiredev/launchcode/actions)
[![Coverage](https://img.shields.io/codecov/c/github/thefiredev/launchcode?style=flat-square&color=4f46e5)](https://codecov.io/gh/thefiredev/launchcode)
[![Version](https://img.shields.io/npm/v/@thefiredev/launchcode?style=flat-square&color=4f46e5)](https://www.npmjs.com/package/@thefiredev/launchcode)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Discord](https://img.shields.io/discord/1234567890?style=flat-square&logo=discord&color=5865F2)](https://discord.gg/thefiredev)
[![Coverage](https://img.shields.io/badge/jurisdictions-50_states_|_500+_cities-4f46e5?style=flat-square)](https://docs.thefiredev.com/launchcode/coverage)

**Launch in any market, legally, in minutes.**

*Enter your business type and jurisdiction. Get a complete compliance playbook with pre-filled forms, deadlines, and checklists — ready to file.*

[Landing Page](https://thefiredev.com/launchcode) · [Docs](https://docs.thefiredev.com/launchcode) · [Discord](https://discord.gg/thefiredev) · [Report Bug](https://github.com/thefiredev/launchcode/issues)

</div>

---

## What It Does

LaunchCode is a regulatory compliance engine that eliminates the months and thousands of dollars typically spent figuring out how to legally open a business in a new market. Input your business type and target location. Get the complete, jurisdiction-specific compliance playbook with pre-filled forms and a sequenced calendar.

**Used by:** Entrepreneurs, franchise operators, attorneys, accountants, PE portfolio companies expanding into new markets.

---

## Key Value Props

| | |
|---|---|
| 🗺️ **50 States + 500+ Cities** | Federal, state, county, and municipal requirements — all covered |
| 📋 **Pre-Filled Forms** | Applications auto-populated with your business data, ready to submit |
| 📅 **Compliance Calendar** | Every deadline, renewal, and filing date in one sequenced timeline |
| ✅ **Living Checklists** | Track completion status, assign tasks, get reminders |
| 🔄 **Auto-Updates** | Regulatory changes pushed to your playbook automatically |

---

## Features

### Compliance Engine

- ⚖️ **Business Entity Formation** — LLC, Corp, Partnership filing requirements by state
- 🏛️ **Federal Requirements** — EIN, federal licenses, industry-specific federal compliance
- 🏢 **State Requirements** — Secretary of State filings, state licenses, tax registrations
- 🏙️ **Local Requirements** — City business licenses, zoning permits, local health/fire inspections
- 🏭 **Industry-Specific** — Food service, healthcare, childcare, construction, financial services, and 40+ more verticals

### Form Automation

- 📝 **Smart Pre-Fill** — Business info entered once, propagated across all forms
- 🔍 **Form Validation** — Catch errors before submission
- 💾 **PDF Generation** — Print-ready or e-signature-ready output
- 🔗 **Direct Submit** — Where APIs exist, submit directly from LaunchCode

### Calendar & Tracking

- 📅 **Sequenced Timeline** — Forms in the right order (entity before licenses, etc.)
- ⏰ **Deadline Alerts** — Email/SMS reminders for upcoming filings
- 🔄 **Renewal Tracking** — Annual reports, license renewals, tax deadlines
- 👥 **Team Assignment** — Delegate tasks to attorneys, accountants, or team members

---

## Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                       LaunchCode Platform                        │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Input: Business Type + Jurisdiction(s)                        │
│                          │                                       │
│              ┌───────────▼───────────┐                          │
│              │   Classification AI   │                          │
│              │  (NAICS + SIC codes)  │                          │
│              └───────────┬───────────┘                          │
│                          │                                       │
│              ┌───────────▼───────────┐                          │
│              │  Jurisdiction Resolver │                          │
│              │ (Federal/State/Local)  │                          │
│              └───────────┬───────────┘                          │
│                          │                                       │
│    ┌─────────────────────┼─────────────────────┐                │
│    │         │           │          │           │                │
│    ▼         ▼           ▼          ▼           ▼                │
│ Federal   State       County      City      Industry            │
│  Layer    Layer        Layer      Layer      Layer              │
│    │         │           │          │           │                │
│    └────┬────┘    ┌──────┘    ┌─────┘    ┌─────┘                │
│         │         │           │           │                     │
│    ┌────▼─────────▼───────────▼───────────▼────┐                │
│    │        Requirement Aggregator              │                │
│    │     (Dedup + Sequence + Priority)          │                │
│    └─────────────────────┬──────────────────────┘                │
│                          │                                       │
│         ┌────────────────┼────────────────┐                     │
│         │                │                │                     │
│         ▼                ▼                ▼                     │
│   Form Populator    Calendar          Checklist                 │
│   (PDF + e-file)   Generator         Generator                  │
│                                                                  │
│              ┌───────────────────────┐                          │
│              │    Regulatory Monitor  │                          │
│              │  (Change detection +  │                          │
│              │   playbook updates)   │                          │
│              └───────────────────────┘                          │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=flat-square&logo=postgresql)](https://postgresql.org/)
[![Elasticsearch](https://img.shields.io/badge/Elasticsearch-8-005571?style=flat-square&logo=elasticsearch)](https://elastic.co/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?style=flat-square&logo=openai)](https://openai.com/)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![AWS](https://img.shields.io/badge/AWS-Cloud-FF9900?style=flat-square&logo=amazon-aws)](https://aws.amazon.com/)

---

## Quick Start

### Prerequisites

- Node.js 20+
- PostgreSQL 15+
- OpenAI API key

### Installation

```bash
git clone https://github.com/thefiredev/launchcode.git
cd launchcode
npm install
cp .env.example .env
# Add OPENAI_API_KEY and DATABASE_URL to .env
npm run db:migrate
npm run db:seed  # Load regulatory database
npm run dev
```

### Generate Your First Playbook

```bash
# Via CLI
npx launchcode generate \
  --business-type "restaurant" \
  --jurisdiction "Los Angeles, CA" \
  --entity-type "LLC" \
  --output ./my-playbook

# Via API
curl -X POST https://api.thefiredev.com/launchcode/v1/playbooks \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "business_type": "restaurant",
    "jurisdictions": ["CA", "Los Angeles"],
    "entity_type": "LLC",
    "business_info": { "name": "My Restaurant LLC", "owner": "Jane Smith" }
  }'
```

---

## API Reference

### `POST /v1/playbooks`

Generate a compliance playbook.

**Request**
```json
{
  "business_type": "string",         // "restaurant" | "daycare" | "contractor" | ...
  "jurisdictions": ["string"],       // ["CA"] or ["CA", "Los Angeles"] for city-level
  "entity_type": "string",           // "LLC" | "Corp" | "Sole Proprietor" | "Partnership"
  "business_info": {
    "name": "string",
    "owner_name": "string",
    "address": "string",
    "ein": "string"                  // Optional: pre-fill federal forms
  },
  "options": {
    "include_forms": true,
    "include_calendar": true,
    "include_costs": true
  }
}
```

**Response**
```json
{
  "playbook_id": "pb_abc123",
  "jurisdiction_count": 4,
  "requirement_count": 23,
  "total_estimated_cost": 1850,
  "timeline_days": 47,
  "playbook_url": "https://app.thefiredev.com/launchcode/playbooks/pb_abc123",
  "download_url": "https://api.thefiredev.com/launchcode/v1/playbooks/pb_abc123/download"
}
```

**Full API docs:** [docs.thefiredev.com/launchcode/api](https://docs.thefiredev.com/launchcode/api)

---

## Pricing

| Plan | Price | Playbooks/mo | Features |
|------|-------|--------------|----------|
| Starter | $199/mo | 5 | All 50 states, federal, PDF forms |
| Growth | $799/mo | 25 | + City-level, API access, team collaboration |
| Enterprise | $2,499/mo | Unlimited | + Custom verticals, auto-filing, dedicated support |

[Start free trial →](https://thefiredev.com/launchcode#pricing)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup, code style, and PR guidelines.

## Security

Found a vulnerability? See [SECURITY.md](SECURITY.md) for responsible disclosure.

## License

MIT — see [LICENSE](LICENSE)

---

<div align="center">

**Built by [The Fire Dev LLC](https://thefiredev.com)**

*The operating system for ambitious businesses.*

</div>
