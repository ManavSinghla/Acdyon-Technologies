import React, { useState, useEffect } from 'react'
import { 
  Play, 
  RotateCcw, 
  Download, 
  Copy, 
  Check, 
  ShieldAlert, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  Layers, 
  Sliders, 
  Activity, 
  Terminal, 
  CheckCircle2, 
  AlertTriangle,
  Code2,
  Share2,
  ExternalLink,
  ChevronRight
} from 'lucide-react'
import { TARGET_PLATFORMS } from '../data/mockScraperData'

export default function InteractivePlayground() {
  const [selectedPlatformId, setSelectedPlatformId] = useState('linkedin')
  const [activeTab, setActiveTab] = useState('data') // 'data' | 'telemetry' | 'detection' | 'raw'
  const [isRunning, setIsRunning] = useState(false)
  const [executionStep, setExecutionStep] = useState(0)
  const [logs, setLogs] = useState([])
  const [proxyPool, setProxyPool] = useState('residential')
  const [fingerprint, setFingerprint] = useState('chrome-mac')
  const [pacingMode, setPacingMode] = useState('gaussian')
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedRaw, setCopiedRaw] = useState(false)

  const currentPlatform = TARGET_PLATFORMS.find(p => p.id === selectedPlatformId) || TARGET_PLATFORMS[0]

  useEffect(() => {
    setSearchQuery(currentPlatform.defaultQuery)
    setLogs([
      `[SYSTEM READY] Initialized target: ${currentPlatform.name}`,
      `[CONFIG] Selected Proxy Pool: ${proxyPool.toUpperCase()} | Profile: ${fingerprint}`
    ])
    setExecutionStep(0)
  }, [selectedPlatformId])

  const runSimulation = () => {
    if (isRunning) return
    setIsRunning(true)
    setExecutionStep(1)
    setLogs([
      `[00:00.012] Negotiating TLS 1.3 Client Hello with JA4 profile: ${currentPlatform.telemetry.ja4Fingerprint}`,
    ])

    setTimeout(() => {
      setExecutionStep(2)
      setLogs(prev => [
        ...prev,
        `[00:00.048] Bound session to Proxy Node: ${currentPlatform.telemetry.exitNode} (Hop latency: 34ms)`
      ])
    }, 450)

    setTimeout(() => {
      setExecutionStep(3)
      setLogs(prev => [
        ...prev,
        `[00:00.089] Bypassing challenge layer (${currentPlatform.detectionVectors[0]}) -> Status 200 OK`
      ])
    }, 900)

    setTimeout(() => {
      setExecutionStep(4)
      setLogs(prev => [
        ...prev,
        `[00:00.124] Applying semantic tree parser -> ${currentPlatform.sampleData.length} records extracted (${currentPlatform.telemetry.bandwidthUsed})`,
        `[00:00.138] Pipeline completed in ${currentPlatform.telemetry.latencyMs}ms with zero detection triggers.`
      ])
      setIsRunning(false)
    }, 1400)
  }

  const handleDownloadJSON = () => {
    const payload = JSON.stringify({
      target: currentPlatform.name,
      query: searchQuery,
      timestamp: new Date().toISOString(),
      telemetry: currentPlatform.telemetry,
      extracted_records: currentPlatform.sampleData
    }, null, 2)
    const blob = new Blob([payload], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `pulseops_${currentPlatform.id}_extracted.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleCopyRaw = () => {
    const payload = JSON.stringify(currentPlatform.sampleData, null, 2)
    navigator.clipboard.writeText(payload)
    setCopiedRaw(true)
    setTimeout(() => setCopiedRaw(false), 2000)
  }

  return (
    <section id="playground" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Live Ingestion Workbench</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Test Ingestion Against Protected Targets
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Select a hardened platform below. Adjust proxy strategies and fingerprint profiles to inspect real extraction telemetry in real time.
          </p>
        </div>

        {/* Workbench Wrapper Container */}
        <div className="rounded-2xl border border-surface-border bg-surface-50/50 dark:bg-surface-900/80 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300">
          
          {/* Top Bar: Target Platform Selector */}
          <div className="p-3 sm:p-4 bg-gray-100/80 dark:bg-surface-850 border-b border-surface-border flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider pl-2 pr-1 hidden sm:inline">
                Target:
              </span>
              {TARGET_PLATFORMS.map((platform) => {
                const isActive = platform.id === selectedPlatformId
                return (
                  <button
                    key={platform.id}
                    onClick={() => setSelectedPlatformId(platform.id)}
                    className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                      isActive 
                        ? 'bg-white dark:bg-surface-700 text-brand-600 dark:text-cyan-300 shadow-sm border border-gray-200 dark:border-white/15' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-gray-200/60 dark:hover:bg-surface-800'
                    }`}
                  >
                    <span>{platform.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full border ${platform.badgeColor}`}>
                      {platform.badge}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Run Button */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={runSimulation}
                disabled={isRunning}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md shadow-emerald-500/20 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isRunning ? (
                  <>
                    <RotateCcw className="w-4 h-4 animate-spin text-white" />
                    <span>Executing Pipeline ({executionStep}/4)...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Run Ingestion Pipeline</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Workbench Controls & Parameters Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-surface-border divide-y lg:divide-y-0 lg:divide-x divide-surface-border bg-white/40 dark:bg-surface-900/40">
            
            {/* Search Parameter */}
            <div className="lg:col-span-4 p-4 flex flex-col justify-center">
              <label htmlFor="search-input" className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-brand-500 dark:text-cyan-400" />
                Query Filter / Keywords:
              </label>
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. Frontend Architect"
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 dark:bg-surface-800 border border-gray-200 dark:border-white/10 text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
              />
            </div>

            {/* Proxy Pool Config */}
            <div className="lg:col-span-3 p-4 flex flex-col justify-center">
              <label htmlFor="proxy-select" className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                Proxy Mesh Strategy:
              </label>
              <select
                id="proxy-select"
                value={proxyPool}
                onChange={(e) => setProxyPool(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 dark:bg-surface-800 border border-gray-200 dark:border-white/10 text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="residential">Smart Residential Pool (40k nodes)</option>
                <option value="isp">Dedicated ISP Mesh (Sub-50ms)</option>
                <option value="mobile">5G Mobile Proxy Carrier (Ultra Stealth)</option>
              </select>
            </div>

            {/* Fingerprint Profile */}
            <div className="lg:col-span-3 p-4 flex flex-col justify-center">
              <label htmlFor="fp-select" className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                TLS & Client Profile:
              </label>
              <select
                id="fp-select"
                value={fingerprint}
                onChange={(e) => setFingerprint(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 dark:bg-surface-800 border border-gray-200 dark:border-white/10 text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="chrome-mac">Chrome 128 / macOS ARM64</option>
                <option value="safari-ios">Safari 18 / iOS 18 Mobile</option>
                <option value="firefox-linux">Firefox 130 / Ubuntu x86_64</option>
              </select>
            </div>

            {/* Pacing Jitter */}
            <div className="lg:col-span-2 p-4 flex flex-col justify-center">
              <label htmlFor="pacing-select" className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-amber-500" />
                Pacing Jitter:
              </label>
              <select
                id="pacing-select"
                value={pacingMode}
                onChange={(e) => setPacingMode(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 dark:bg-surface-800 border border-gray-200 dark:border-white/10 text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="gaussian">Gaussian (420ms - 1.1s)</option>
                <option value="stealth">Stealth Queue (2.5s - 5s)</option>
                <option value="burst">High Burst (120ms)</option>
              </select>
            </div>

          </div>

          {/* Real-Time Pipeline Stage Stepper */}
          <div className="px-4 py-3 bg-gray-50/80 dark:bg-surface-850/60 border-b border-surface-border">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Pipeline Stages:</span>
                <div className="flex items-center gap-1 sm:gap-2">
                  {[
                    '1. TLS JA4 Handshake',
                    '2. Proxy Route',
                    '3. Anti-Bot Bypass',
                    '4. DOM Parse'
                  ].map((st, i) => {
                    const stepNum = i + 1
                    const isDone = executionStep >= stepNum
                    const isCurrent = executionStep === stepNum && isRunning
                    return (
                      <div
                        key={st}
                        className={`px-2 py-1 rounded flex items-center gap-1 transition-all ${
                          isDone 
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' 
                            : isCurrent
                            ? 'bg-brand-500/20 text-brand-600 dark:text-cyan-400 border border-brand-500 animate-pulse'
                            : 'bg-gray-100 dark:bg-surface-800 text-gray-400 border border-transparent'
                        }`}
                      >
                        {isDone ? <CheckCircle2 className="w-3 h-3 text-emerald-500" /> : <div className="w-2 h-2 rounded-full bg-gray-400" />}
                        <span className="hidden sm:inline">{st}</span>
                        <span className="sm:hidden">{stepNum}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Status pill */}
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Response:</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                  HTTP {currentPlatform.telemetry.statusCode} OK
                </span>
                <span className="text-gray-500">({currentPlatform.telemetry.latencyMs}ms)</span>
              </div>
            </div>
          </div>

          {/* Workbench Output Tabs Header */}
          <div className="px-4 py-2 bg-gray-100/60 dark:bg-surface-850 border-b border-surface-border flex items-center justify-between">
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setActiveTab('data')}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'data'
                    ? 'bg-white dark:bg-surface-700 text-brand-600 dark:text-cyan-300 shadow-sm border border-gray-200 dark:border-white/10'
                    : 'text-gray-600 dark:text-gray-400 hover:text-foreground'
                }`}
              >
                Extracted Data ({currentPlatform.sampleData.length})
              </button>
              
              <button
                onClick={() => setActiveTab('telemetry')}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'telemetry'
                    ? 'bg-white dark:bg-surface-700 text-brand-600 dark:text-cyan-300 shadow-sm border border-gray-200 dark:border-white/10'
                    : 'text-gray-600 dark:text-gray-400 hover:text-foreground'
                }`}
              >
                Network Telemetry
              </button>

              <button
                onClick={() => setActiveTab('detection')}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'detection'
                    ? 'bg-white dark:bg-surface-700 text-brand-600 dark:text-cyan-300 shadow-sm border border-gray-200 dark:border-white/10'
                    : 'text-gray-600 dark:text-gray-400 hover:text-foreground'
                }`}
              >
                Anti-Detection Matrix
              </button>

              <button
                onClick={() => setActiveTab('raw')}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all hidden sm:block ${
                  activeTab === 'raw'
                    ? 'bg-white dark:bg-surface-700 text-brand-600 dark:text-cyan-300 shadow-sm border border-gray-200 dark:border-white/10'
                    : 'text-gray-600 dark:text-gray-400 hover:text-foreground'
                }`}
              >
                Raw JSON Schema
              </button>
            </div>

            {/* Export buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleCopyRaw}
                title="Copy JSON to clipboard"
                className="p-1.5 rounded-lg text-gray-500 hover:text-foreground hover:bg-gray-200 dark:hover:bg-surface-700 transition-colors"
              >
                {copiedRaw ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
              <button
                onClick={handleDownloadJSON}
                title="Download JSON file"
                className="p-1.5 rounded-lg text-gray-500 hover:text-foreground hover:bg-gray-200 dark:hover:bg-surface-700 transition-colors"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Workbench Body Output Display */}
          <div className="p-4 sm:p-6 min-h-[380px] bg-background/50">
            
            {/* Tab 1: Extracted Data Cards */}
            {activeTab === 'data' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 text-xs text-gray-500 font-mono">
                  <span>Structured Schema: <code className="text-brand-500 dark:text-cyan-400">JobPosting.v2.json</code></span>
                  <span>Extracted via: <span className="font-semibold text-gray-700 dark:text-gray-300">{currentPlatform.sampleData[0].extractedVia}</span></span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentPlatform.sampleData.map((job) => (
                    <div 
                      key={job.id} 
                      className="p-4 rounded-xl border border-surface-border bg-white dark:bg-surface-800/80 hover:border-brand-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-xs font-semibold text-brand-600 dark:text-cyan-400 font-mono">
                            {job.company}
                          </span>
                          <span className="text-[11px] px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-medium border border-emerald-500/20">
                            {job.resilienceScore} Conf.
                          </span>
                        </div>
                        <h4 className="mt-2 text-base font-bold text-foreground group-hover:text-brand-600 dark:group-hover:text-cyan-300 transition-colors">
                          {job.title}
                        </h4>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                          {job.location}
                        </p>
                        <p className="mt-2 text-xs font-medium text-gray-700 dark:text-gray-200">
                          {job.salary}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {job.tags.map((tag) => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-gray-100 dark:bg-surface-700 text-gray-600 dark:text-gray-300 font-mono">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-surface-border flex items-center justify-between text-xs text-gray-400 font-mono">
                        <span>{job.posted}</span>
                        <a 
                          href={job.sourceUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center gap-1 text-brand-500 dark:text-cyan-400 hover:underline"
                        >
                          <span>Inspect Node</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Network Telemetry & Proxies */}
            {activeTab === 'telemetry' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl border border-surface-border bg-white dark:bg-surface-800">
                  <span className="text-xs font-mono text-gray-500 uppercase">Total Round-Trip Latency</span>
                  <div className="mt-2 text-3xl font-extrabold text-foreground font-mono">
                    {currentPlatform.telemetry.latencyMs} <span className="text-sm font-normal text-emerald-500">ms</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Includes proxy hop & TLS negotiation</p>
                </div>

                <div className="p-4 rounded-xl border border-surface-border bg-white dark:bg-surface-800">
                  <span className="text-xs font-mono text-gray-500 uppercase">TLS Protocol & Cipher</span>
                  <div className="mt-2 text-base font-bold text-foreground font-mono truncate">
                    {currentPlatform.telemetry.tlsVersion}
                  </div>
                  <p className="mt-2 text-xs text-gray-500">JA4: <code className="text-[10px] text-cyan-400">{currentPlatform.telemetry.ja4Fingerprint.slice(0, 18)}...</code></p>
                </div>

                <div className="p-4 rounded-xl border border-surface-border bg-white dark:bg-surface-800">
                  <span className="text-xs font-mono text-gray-500 uppercase">Exit Node Location</span>
                  <div className="mt-2 text-base font-bold text-brand-600 dark:text-cyan-400 font-mono">
                    {currentPlatform.telemetry.exitNode}
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Proxy Hops: {currentPlatform.telemetry.proxyHops} (Zero Leaks)</p>
                </div>

                <div className="p-4 rounded-xl border border-surface-border bg-white dark:bg-surface-800">
                  <span className="text-xs font-mono text-gray-500 uppercase">DOM Mutation Shield</span>
                  <div className="mt-2 text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1.5">
                    <ShieldCheck className="w-5 h-5" />
                    <span>{currentPlatform.telemetry.domMutationDetected ? 'Drift Resolved' : 'Zero Drift'}</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Bandwidth: {currentPlatform.telemetry.bandwidthUsed}</p>
                </div>

                {/* Console Execution Log output */}
                <div className="md:col-span-2 lg:col-span-4 mt-2 p-4 rounded-xl bg-surface-900 border border-surface-700 font-mono text-xs text-gray-300">
                  <div className="flex items-center justify-between pb-2 border-b border-surface-700 mb-2">
                    <span className="text-gray-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      Live Stream Event Bus (STDOUT)
                    </span>
                    <span className="text-[10px] text-gray-500">Buffer: 4 events</span>
                  </div>
                  <div className="space-y-1">
                    {logs.map((log, index) => (
                      <div key={index} className="leading-relaxed">
                        <span className="text-cyan-400">➜</span> {log}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Detection Surface Matrix */}
            {activeTab === 'detection' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 text-xs sm:text-sm text-brand-700 dark:text-brand-200">
                  <strong>Anti-Detection Surface Defense:</strong> PulseOps explicitly targets and spoof-corrects every fingerprint vector used by enterprise bot defenders (Akamai, Cloudflare, DataDome, Imperva).
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: 'TLS JA3 / JA4 Signature Matching',
                      status: 'Protected',
                      desc: 'Synthesizes exact browser cipher list, extensions, and elliptic curves. Zero Go/Node default signatures.'
                    },
                    {
                      name: 'HTTP/2 Frame & Header Order',
                      status: 'Protected',
                      desc: 'Emulates Chrome 128 pseudo-header sequences (:method, :authority, :scheme, :path) with matching window sizes.'
                    },
                    {
                      name: 'Canvas & WebGL Entropy Injection',
                      status: 'Protected',
                      desc: 'Injects microscopic, deterministic pixel noise to pass bot challenges while generating unique GPU fingerprints.'
                    },
                    {
                      name: 'Navigator & Runtime Prototype Leaks',
                      status: 'Protected',
                      desc: 'Pushes custom Proxies over navigator.webdriver, chrome.runtime, and Permissions API without prototype anomalies.'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-surface-border bg-white dark:bg-surface-800 flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-foreground">{item.name}</h4>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono">
                            {item.status}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 4: Raw JSON Schema View */}
            {activeTab === 'raw' && (
              <div className="rounded-xl bg-surface-900 border border-surface-700 p-4 font-mono text-xs text-cyan-300 overflow-x-auto max-h-96">
                <pre>{JSON.stringify(currentPlatform.sampleData, null, 2)}</pre>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}
