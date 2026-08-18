# PulseOps — Next-Gen Distributed Ingestion Engine
> **Acdyon Technologies Frontend Challenge Submission (Track 2: The Premium Home Page)**  
> Built with pure React (JS), Tailwind CSS, Framer Motion, and Lucide Icons.

---

## ⚡ Overview
**PulseOps** is a developer-centric, high-performance landing page and interactive telemetry workbench for an edge-native data ingestion engine designed to withstand enterprise anti-bot defenses (Cloudflare Turnstile, Akamai Bot Manager, DataDome) without burning IPs or accounts.

---

## 🎯 Challenge Requirements & Fulfillment

| Requirement | Implementation & Proof |
| :--- | :--- |
| **First-Impression Wow Factor (3s)** | High-impact typography (Plus Jakarta Sans + JetBrains Mono), glassmorphic layout, ambient lighting glows, and dynamic radar status indicator. |
| **Hero with Strong CTA** | Clear value prop (*"Ingest Web Data at Scale Without Getting Burned"*), quick-copy install command, and one-click demo launcher. |
| **Interactive Product Showcase** | Live **Interactive Ingestion Workbench** (`#playground`): lets visitors execute live simulated scraping pipelines against LinkedIn, Indeed, Naukri, and Wellfound with real telemetry metrics, latency graphs, anti-detection checklist, and JSON exports. |
| **Motion & Micro-interactions** | Purposeful micro-interactions: live pipeline stepper progress, interactive region latency pinger, tab switches, and hover states with zero visual clutter. |
| **Strict Responsiveness (390px - 1440px)** | Tested across 390px mobile, tablets, and 1440px+ ultra-wide screens with zero horizontal scrolling. |
| **Real Dark / Light Mode** | Flawless theme system with CSS variable tokens, smooth transitions, and persistent storage. |
| **Honesty Constraint** | **Zero fake testimonials, zero fake user counters, zero fake corporate logos.** Pure technical truth and architectural guarantees. |
| **Bonus Round: Easter Egg** | Triggered via **Konami Code** (`↑ ↑ ↓ ↓ ← → ← → B A`) or the secret developer radar in the header/footer, launching the Dev Console matrix modal with confetti. |
| **Written Explanation** | Complete 1-page [`DECISIONS.md`](./DECISIONS.md) covering architecture trade-offs, roadmap, and AI transparency. |

---

## 🚀 Quickstart & Local Development

### 1. Clone & Install Dependencies
```bash
git clone <your-repo-url>
cd "Acdyon Technologies"
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates production-ready, minified assets into `dist/`.

---

## 📂 Project Architecture

```text
├── DECISIONS.md              # 1-page written defense for Acdyon review
├── index.html                # Semantic HTML5 entry with Google Fonts
├── package.json              # Pure React (JS) + Vite + Tailwind + Framer Motion
├── tailwind.config.js        # Design tokens, color scales, animations
├── src/
│   ├── main.jsx              # Application entry
│   ├── App.jsx               # Root layout & Konami Code event listener
│   ├── index.css             # Tailwind base & CSS theme variables
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark/Light mode state & persistence
│   ├── data/
│   │   └── mockScraperData.js# Multi-platform telemetry, JA4 hashes & benchmarks
│   └── components/
│       ├── Navbar.jsx        # Glassmorphic header, theme toggle, mobile menu
│       ├── Hero.jsx          # Hero section, value prop & copy command box
│       ├── InteractivePlayground.jsx # Core live ingestion workbench demo
│       ├── ArchitectureSection.jsx   # 4-stage pipeline visualizer & code tabs
│       ├── BentoFeatures.jsx # Bento grid with interactive latency pinger
│       ├── BenchmarkComparison.jsx  # Honest architectural benchmark matrix
│       ├── DecisionsSection.jsx     # On-page mirror of DECISIONS.md
│       ├── EasterEggModal.jsx       # Konami code bonus matrix console
│       └── Footer.jsx        # Semantic footer with easter egg trigger
```

---

## 📝 Submission Details
- **Candidate Name:** Manav Singhla
- **Company Track:** Acdyon Technologies Frontend Challenge (Track 2: The Premium Home Page)
- **Live Deployment:** Deployable via Vercel / Netlify / GitHub Pages
