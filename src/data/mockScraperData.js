export const TARGET_PLATFORMS = [
  {
    id: 'linkedin',
    name: 'LinkedIn Jobs',
    badge: 'High Anti-Bot',
    badgeColor: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
    description: 'Enterprise WAF, Akamai Bot Manager, JA3/JA4 TLS fingerprinting, dynamic session tracking.',
    defaultQuery: 'Senior Frontend Engineer',
    detectionVectors: ['Akamai Sensor Data (bmak)', 'HTTP/2 header ordering', 'Automated canvas noise check'],
    sampleData: [
      {
        id: 'li-01',
        title: 'Senior Frontend Architect',
        company: 'Stripe',
        location: 'San Francisco, CA (Remote)',
        salary: '$185,000 - $240,000',
        posted: '2 hours ago',
        tags: ['React', 'TypeScript', 'Wasm', 'Performance'],
        resilienceScore: '99.4%',
        sourceUrl: 'https://linkedin.com/jobs/view/3948201',
        extractedVia: 'Dynamic Chromium Context + JA4 Spoof'
      },
      {
        id: 'li-02',
        title: 'Staff UI Systems Engineer',
        company: 'Linear',
        location: 'Remote (Global)',
        salary: '$190,000 - $230,000',
        posted: '4 hours ago',
        tags: ['WebGL', 'React', 'Desktop Sync', 'Design Systems'],
        resilienceScore: '98.9%',
        sourceUrl: 'https://linkedin.com/jobs/view/3948202',
        extractedVia: 'Residential Proxy Mesh (US-West)'
      },
      {
        id: 'li-03',
        title: 'Lead Frontend Infrastructure Engineer',
        company: 'Vercel',
        location: 'Remote',
        salary: '$200,000 - $260,000',
        posted: '6 hours ago',
        tags: ['Next.js', 'Turbopack', 'Edge Compute', 'V8'],
        resilienceScore: '99.1%',
        sourceUrl: 'https://linkedin.com/jobs/view/3948203',
        extractedVia: 'Smart Session Rotator'
      }
    ],
    telemetry: {
      latencyMs: 124,
      tlsVersion: 'TLS 1.3 / ChaCha20-Poly1305',
      ja4Fingerprint: 't13d1516h2_8daaf6152771_b92644265e3e',
      proxyHops: 3,
      exitNode: 'US-Virginia (Residential)',
      statusCode: 200,
      bandwidthUsed: '42.8 KB',
      domMutationDetected: false
    }
  },
  {
    id: 'indeed',
    name: 'Indeed Feed',
    badge: 'Cloudflare Turnstile',
    badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    description: 'Cloudflare challenge pages, TLS client hello anomalies, IP reputation scoring.',
    defaultQuery: 'Full Stack Developer',
    detectionVectors: ['Cloudflare CF-RAY token', 'Browser headless WebGL context', 'Mouse trajectory jitter'],
    sampleData: [
      {
        id: 'ind-01',
        title: 'Principal Full Stack Engineer',
        company: 'Figma',
        location: 'New York, NY (Hybrid)',
        salary: '$195,000 - $250,000',
        posted: '1 hour ago',
        tags: ['TypeScript', 'C++', 'Wasm', 'React'],
        resilienceScore: '99.8%',
        sourceUrl: 'https://indeed.com/viewjob?jk=78a9c8e1',
        extractedVia: 'Turnstile Challenge Solver'
      },
      {
        id: 'ind-02',
        title: 'Senior Software Engineer - Core Platform',
        company: 'Datadog',
        location: 'Boston, MA (Remote)',
        salary: '$175,000 - $225,000',
        posted: '3 hours ago',
        tags: ['Go', 'React', 'Distributed Systems'],
        resilienceScore: '99.2%',
        sourceUrl: 'https://indeed.com/viewjob?jk=78a9c8e2',
        extractedVia: 'Adaptive Pacing Engine'
      }
    ],
    telemetry: {
      latencyMs: 98,
      tlsVersion: 'TLS 1.3 / AES-256-GCM',
      ja4Fingerprint: 't13d1908h2_002f0035009c_cb8827eb0c7b',
      proxyHops: 2,
      exitNode: 'DE-Frankfurt (ISP Dedicated)',
      statusCode: 200,
      bandwidthUsed: '28.4 KB',
      domMutationDetected: true
    }
  },
  {
    id: 'naukri',
    name: 'Naukri Recruiter Index',
    badge: 'Rate Limiting',
    badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    description: 'Rapid IP blacklisting, token expiration, aggressive pagination throttling.',
    defaultQuery: 'Lead React Developer Bangalore',
    detectionVectors: ['Rapid sequential requests', 'AppID token invalidation', 'Device fingerprint delta'],
    sampleData: [
      {
        id: 'nk-01',
        title: 'Lead Frontend Developer (React/Next)',
        company: 'Razorpay',
        location: 'Bengaluru, India',
        salary: '₹35,00,000 - ₹50,00,000',
        posted: '30 mins ago',
        tags: ['React', 'Micro-frontends', 'Redux', 'Web Vitals'],
        resilienceScore: '99.9%',
        sourceUrl: 'https://naukri.com/job-listings-0192',
        extractedVia: 'Token Auto-Refresher + Proxy Pool'
      },
      {
        id: 'nk-02',
        title: 'Senior Staff UI Engineer',
        company: 'Swiggy',
        location: 'Bengaluru / Hyderabad',
        salary: '₹40,00,000 - ₹60,00,000',
        posted: '2 hours ago',
        tags: ['React Native', 'React', 'Performance', 'Node.js'],
        resilienceScore: '99.5%',
        sourceUrl: 'https://naukri.com/job-listings-0193',
        extractedVia: 'Gaussian Jitter Queue'
      }
    ],
    telemetry: {
      latencyMs: 142,
      tlsVersion: 'TLS 1.3 / AES-128-GCM',
      ja4Fingerprint: 't13d1516h2_8daaf6152771_02194b5952e4',
      proxyHops: 2,
      exitNode: 'IN-Mumbai (Residential)',
      statusCode: 200,
      bandwidthUsed: '34.1 KB',
      domMutationDetected: false
    }
  },
  {
    id: 'wellfound',
    name: 'Wellfound (AngelList)',
    badge: 'GraphQL Guard',
    badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    description: 'Schema query hashes, Apollo client bot heuristics, CORS origin integrity.',
    defaultQuery: 'Founding Engineer Frontend',
    detectionVectors: ['GraphQL depth & complexity limits', 'Session cookie validation', 'User-Agent entropy'],
    sampleData: [
      {
        id: 'wf-01',
        title: 'Founding Frontend Engineer (#1)',
        company: 'Supastack AI (YC W25)',
        location: 'San Francisco, CA / Remote',
        salary: '$150,000 - $210,000 + 1.5% Equity',
        posted: '1 hour ago',
        tags: ['React', 'TypeScript', 'Tailwind', 'AI UI'],
        resilienceScore: '99.7%',
        sourceUrl: 'https://wellfound.com/jobs/928371',
        extractedVia: 'GraphQL Query Interceptor'
      },
      {
        id: 'wf-02',
        title: 'Senior Product Engineer',
        company: 'Cursor AI Team',
        location: 'Remote',
        salary: '$180,000 - $230,000 + 0.8% Equity',
        posted: '5 hours ago',
        tags: ['React', 'Monaco', 'Electron', 'Rust Core'],
        resilienceScore: '99.3%',
        sourceUrl: 'https://wellfound.com/jobs/928372',
        extractedVia: 'Stealth Browser Context'
      }
    ],
    telemetry: {
      latencyMs: 110,
      tlsVersion: 'TLS 1.3 / ChaCha20-Poly1305',
      ja4Fingerprint: 't13d1708h2_672e3914a849_432b85121b6d',
      proxyHops: 2,
      exitNode: 'US-Oregon (Residential)',
      statusCode: 200,
      bandwidthUsed: '22.9 KB',
      domMutationDetected: false
    }
  }
]

export const ARCHITECTURE_PIPELINE_STEPS = [
  {
    step: '01',
    title: 'JA4 & TLS Fingerprint Emulation',
    tag: 'Anti-Detection Layer',
    summary: 'Directly crafts raw TLS Client Hellos, cipher suites, elliptic curves, and HTTP/2 SETTINGS frames to match authentic macOS/Windows browser signatures byte-for-byte.',
    details: [
      'Eliminates the #1 automated giveaway on Cloudflare, Akamai, and DataDome.',
      'Spoofs WebGL renderer hashes, Canvas noise, and AudioContext oscillators.',
      'Overrides navigator.webdriver and Chrome runtime prototypes with zero leak traces.'
    ],
    codeSnippet: `import { PulseClient } from '@pulseops/engine';

const client = new PulseClient({
  profile: 'chrome_128_macos_arm64',
  tls: {
    ja4: 't13d1516h2_8daaf6152771_b92644265e3e',
    http2Settings: { HEADER_TABLE_SIZE: 65536, INITIAL_WINDOW_SIZE: 6291456 }
  }
});`
  },
  {
    step: '02',
    title: 'Adaptive Proxy Mesh & Session Pacing',
    tag: 'Network Resilience',
    summary: 'Distributes traffic across 40,000+ vetted residential and ISP nodes. Implements dynamic Gaussian delay curves that mimic human browsing velocity.',
    details: [
      'Automatic health probe isolates burned IPs in under 12 milliseconds.',
      'Maintains sticky sessions when multi-page pagination or authentication cookies require continuity.',
      'Self-throttling backoff algorithm detects early HTTP 429 warnings before hard bans trigger.'
    ],
    codeSnippet: `const session = client.createSession({
  pool: 'residential_ultra_fast',
  geo: 'US-West',
  pacing: {
    minDelayMs: 420,
    maxDelayMs: 1150,
    jitter: 'gaussian'
  }
});`
  },
  {
    step: '03',
    title: 'Self-Healing DOM & Semantic Parser',
    tag: 'Data Extraction',
    summary: 'When target websites change CSS classes or obfuscate class names overnight, PulseOps switches to structural NLP and semantic anchor heuristics to prevent pipeline failure.',
    details: [
      'Zero downtime when platforms deploy scrambled webpack hashed classes.',
      'Strict schema validation ensures clean, typed JSON output with fallback defaults.',
      'Emits alerts with automated diff graphs when schema drift exceeds 15%.'
    ],
    codeSnippet: `const { data, driftConfidence } = await session.extract({
  url: 'https://linkedin.com/jobs/search?keywords=frontend',
  schema: JobPostingSchema,
  healingStrategy: 'semantic_anchor_graph'
});`
  },
  {
    step: '04',
    title: 'Dead-Letter Queue & Incident Replay',
    tag: 'Pipeline Reliability',
    summary: 'Failed requests are quarantined into an isolated snapshot queue with request headers, DOM snapshots, and TLS handshakes for one-click debug replay.',
    details: [
      'Prevents silent data loss when a third-party site undergoes maintenance.',
      'Auto-resumes ingestion once alternative proxy routes are negotiated.',
      'Native webhook integrations for Discord, Slack, and PagerDuty.'
    ],
    codeSnippet: `session.on('circuit_break', async (incident) => {
  await incident.quarantine({
    retryBudget: 3,
    fallbackRoute: 'isp_dedicated_europe'
  });
});`
  }
]

export const BENCHMARKS_DATA = [
  {
    feature: 'Cloudflare / Akamai Bypass Rate',
    pulseOps: '99.4% (Native TLS spoof)',
    puppeteer: '38.2% (Headless fingerprint leaked)',
    cheerio: '12.0% (Instantly blocked by WAF)',
    commercialApis: '94.0% (Expensive per-call fee)'
  },
  {
    feature: 'Memory Footprint per Worker',
    pulseOps: '14 MB RSS (Zero browser bloat)',
    puppeteer: '280 MB - 600 MB (Heavy Chrome process)',
    cheerio: '8 MB (No JS execution capability)',
    commercialApis: 'Cloud-hosted (High network latency)'
  },
  {
    feature: 'Request Latency (Global avg)',
    pulseOps: '115ms',
    puppeteer: '2,400ms - 4,800ms',
    cheerio: '90ms (Fails on JS sites)',
    commercialApis: '850ms - 1,600ms'
  },
  {
    feature: 'Auto-Healing Broken Selectors',
    pulseOps: 'Yes (Semantic Tree Heuristic)',
    puppeteer: 'No (Script throws error)',
    cheerio: 'No (Returns empty array)',
    commercialApis: 'Partial'
  },
  {
    feature: 'Cost per 1,000,000 Requests',
    pulseOps: '~$4.20 (Self-hosted proxy mesh)',
    puppeteer: '~$48.00 (Heavy compute instances)',
    cheerio: '~$2.10 (High failure rate)',
    commercialApis: '$250.00 - $1,200.00'
  }
]
