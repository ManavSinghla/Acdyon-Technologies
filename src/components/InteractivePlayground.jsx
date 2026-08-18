import React, { useState, useEffect } from 'react'
import {
  Play, RotateCcw, Download, Copy, Check, ShieldCheck,
  Globe, Cpu, Layers, Sliders, Activity, Terminal,
  CheckCircle2, ExternalLink, ChevronRight, Eye,
  Shield, Code2, Database
} from 'lucide-react'
import { TARGET_PLATFORMS } from '../data/mockScraperData'
import TiltCard from './TiltCard'

function PipelineStep({ num, label, done, active }) {
  return (
    <div className={`flex items-center gap-2 text-[11px] font-mono transition-all duration-300 ${
      done ? 'text-emerald-500 dark:text-emerald-400' : 
      active ? 'text-brand-500 dark:text-cyan-400' : 
      'text-gray-400 dark:text-gray-600'
    }`}>
      <div className={`relative w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${
        done ? 'bg-emerald-500 border-emerald-500 text-white' :
        active ? 'border-brand-500 dark:border-cyan-400 bg-brand-500/10' :
        'border-gray-300 dark:border-gray-700 bg-transparent'
      }`}>
        {done ? (
          <Check className="w-2.5 h-2.5" />
        ) : active ? (
          <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
        ) : (
          <span className="text-[8px]">{num}</span>
        )}
        {active && (
          <div className="absolute inset-0 rounded-full border border-current animate-ping opacity-60" />
        )}
      </div>
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">{num}</span>
    </div>
  )
}

export default function InteractivePlayground() {
  const [selectedId, setSelectedId] = useState('linkedin')
  const [activeTab, setActiveTab] = useState('data')
  const [isRunning, setIsRunning] = useState(false)
  const [step, setStep] = useState(0)
  const [logs, setLogs] = useState([])
  const [proxyPool, setProxyPool] = useState('residential')
  const [fingerprint, setFingerprint] = useState('chrome-mac')
  const [pacingMode, setPacingMode] = useState('gaussian')
  const [query, setQuery] = useState('')
  const [copiedRaw, setCopiedRaw] = useState(false)

  const platform = TARGET_PLATFORMS.find(p => p.id === selectedId) || TARGET_PLATFORMS[0]

  useEffect(() => {
    setQuery(platform.defaultQuery)
    setLogs([
      `[SYSTEM READY] Target initialized → ${platform.name}`,
      `[CONFIG] Profile: ${fingerprint} | Pool: ${proxyPool}`,
    ])
    setStep(0)
  }, [selectedId])

  const runSim = () => {
    if (isRunning) return
    setIsRunning(true)
    setStep(1)
    setLogs([`[00:00.012] Negotiating TLS 1.3 — JA4: ${platform.telemetry.ja4Fingerprint.slice(0, 24)}…`])
    setTimeout(() => {
      setStep(2)
      setLogs(l => [...l, `[00:00.048] Proxy bound → ${platform.telemetry.exitNode} (hop: 34ms)`])
    }, 450)
    setTimeout(() => {
      setStep(3)
      setLogs(l => [...l, `[00:00.089] Challenge bypass: ${platform.detectionVectors[0]} → HTTP 200`])
    }, 900)
    setTimeout(() => {
      setStep(4)
      setLogs(l => [...l,
        `[00:00.124] Semantic parser → ${platform.sampleData.length} records (${platform.telemetry.bandwidthUsed})`,
        `[00:00.138] ✓ Pipeline complete in ${platform.telemetry.latencyMs}ms — zero detection events`
      ])
      setIsRunning(false)
    }, 1400)
  }

  const download = () => {
    const payload = JSON.stringify({ target: platform.name, query, telemetry: platform.telemetry, records: platform.sampleData }, null, 2)
    const a = Object.assign(document.createElement('a'), {
      href: URL.createObjectURL(new Blob([payload], { type: 'application/json' })),
      download: `pulseops_${platform.id}_${Date.now()}.json`
    })
    a.click()
  }

  const copyRaw = () => {
    navigator.clipboard.writeText(JSON.stringify(platform.sampleData, null, 2))
    setCopiedRaw(true)
    setTimeout(() => setCopiedRaw(false), 2000)
  }

  const tabs = [
    { id: 'data', label: `Records (${platform.sampleData.length})`, icon: Database },
    { id: 'telemetry', label: 'Telemetry', icon: Activity },
    { id: 'detection', label: 'Anti-Bot Matrix', icon: Shield },
    { id: 'raw', label: 'Raw JSON', icon: Code2 },
  ]

  return (
    <section id="playground" className="py-20 md:py-28 relative">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-600/8 dark:bg-brand-600/12 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-5">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Live Ingestion Workbench</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-display">
            Test Against Real Protected Targets
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Select a hardened platform, configure your proxy strategy and fingerprint profile, then watch the pipeline execute in real time.
          </p>
        </div>

        {/* ── Workbench Shell ── */}
        <div className="rounded-3xl border border-brand-500/15 dark:border-white/8 bg-white/40 dark:bg-surface-950/80 backdrop-blur-2xl shadow-card-dark overflow-hidden">

          {/* Top Bar: Platform Selector */}
          <div className="p-3 sm:p-4 border-b border-white/8 dark:border-white/5 bg-gray-50/80 dark:bg-surface-900/60 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto flex-1 min-w-0">
              {TARGET_PLATFORMS.map((p) => {
                const active = p.id === selectedId
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedId(p.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 flex-shrink-0 ${
                      active
                        ? 'bg-white dark:bg-surface-800 text-brand-600 dark:text-cyan-300 shadow-md border border-brand-500/20 dark:border-white/10'
                        : 'text-gray-500 dark:text-gray-500 hover:text-foreground hover:bg-gray-100/80 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{p.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-md border ${p.badgeColor} font-mono hidden sm:inline`}>
                      {p.badge}
                    </span>
                  </button>
                )
              })}
            </div>

            <button
              onClick={runSim}
              disabled={isRunning}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                isRunning
                  ? 'bg-surface-800/60 text-gray-400 cursor-not-allowed border border-white/5'
                  : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-glow-emerald hover:-translate-y-0.5 active:translate-y-0'
              }`}
            >
              {isRunning ? (
                <><RotateCcw className="w-4 h-4 animate-spin" /><span>Executing ({step}/4)…</span></>
              ) : (
                <><Play className="w-4 h-4 fill-current" /><span>Run Pipeline</span></>
              )}
            </button>
          </div>

          {/* Config Parameters Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/5 bg-white/20 dark:bg-surface-900/30 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
            <div className="lg:col-span-4 p-4 flex flex-col justify-center">
              <label htmlFor="query-input" className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-1.5 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-brand-500 dark:text-cyan-400" />
                Search Query / Filter:
              </label>
              <input
                id="query-input"
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl bg-gray-50 dark:bg-surface-800/80 border border-gray-200/60 dark:border-white/8 text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder-gray-400 dark:placeholder-gray-600"
              />
            </div>
            <div className="lg:col-span-3 p-4 flex flex-col justify-center">
              <label htmlFor="proxy-select" className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-1.5 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-indigo-500" />
                Proxy Mesh:
              </label>
              <select id="proxy-select" value={proxyPool} onChange={e => setProxyPool(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl bg-gray-50 dark:bg-surface-800/80 border border-gray-200/60 dark:border-white/8 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500 font-sans">
                <option value="residential">Residential Pool (40K nodes)</option>
                <option value="isp">ISP Dedicated (Sub-50ms)</option>
                <option value="mobile">5G Mobile Carrier (Ultra-Stealth)</option>
              </select>
            </div>
            <div className="lg:col-span-3 p-4 flex flex-col justify-center">
              <label htmlFor="fp-select" className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-1.5 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-500" />
                TLS Profile:
              </label>
              <select id="fp-select" value={fingerprint} onChange={e => setFingerprint(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl bg-gray-50 dark:bg-surface-800/80 border border-gray-200/60 dark:border-white/8 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500 font-sans">
                <option value="chrome-mac">Chrome 128 / macOS ARM64</option>
                <option value="safari-ios">Safari 18 / iOS 18</option>
                <option value="firefox-linux">Firefox 130 / Ubuntu x86</option>
              </select>
            </div>
            <div className="lg:col-span-2 p-4 flex flex-col justify-center">
              <label htmlFor="pacing-select" className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-1.5 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-amber-500" />
                Pacing:
              </label>
              <select id="pacing-select" value={pacingMode} onChange={e => setPacingMode(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl bg-gray-50 dark:bg-surface-800/80 border border-gray-200/60 dark:border-white/8 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500 font-sans">
                <option value="gaussian">Gaussian (420ms–1.1s)</option>
                <option value="stealth">Stealth (2.5s–5s)</option>
                <option value="burst">Burst (120ms)</option>
              </select>
            </div>
          </div>

          {/* Pipeline Stepper Bar */}
          <div className="px-4 py-3 bg-gray-50/60 dark:bg-surface-900/40 border-b border-white/5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1 sm:gap-3">
              {[
                { num: 1, label: 'TLS JA4 Handshake' },
                { num: 2, label: 'Proxy Route' },
                { num: 3, label: 'Anti-Bot Bypass' },
                { num: 4, label: 'DOM Extract' },
              ].map(({ num, label }) => (
                <PipelineStep key={num} num={num} label={label} done={step >= num && !isRunning} active={step === num && isRunning} />
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-gray-400">Status:</span>
              <span className="px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                HTTP {platform.telemetry.statusCode} · {platform.telemetry.latencyMs}ms
              </span>
            </div>
          </div>

          {/* Tab Bar */}
          <div className="px-4 py-2.5 border-b border-white/5 bg-white/10 dark:bg-surface-900/20 flex items-center justify-between">
            <div className="flex items-center gap-1">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                    activeTab === id
                      ? 'bg-white dark:bg-surface-800 text-brand-600 dark:text-cyan-300 shadow-sm border border-gray-200/60 dark:border-white/10'
                      : 'text-gray-500 dark:text-gray-500 hover:text-foreground hover:bg-gray-100/60 dark:hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <button onClick={copyRaw} title="Copy JSON" className="p-2 rounded-lg text-gray-400 hover:text-foreground hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                {copiedRaw ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
              <button onClick={download} title="Download JSON" className="p-2 rounded-lg text-gray-400 hover:text-foreground hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-6 min-h-[400px] bg-background/30">

            {/* ── Data Records Tab ── */}
            {activeTab === 'data' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                  <span>Schema: <code className="text-brand-500 dark:text-cyan-400">JobPosting.v2.json</code></span>
                  <span>Via: <strong className="text-gray-700 dark:text-gray-300">{platform.sampleData[0]?.extractedVia}</strong></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {platform.sampleData.map((job) => (
                    <TiltCard
                      key={job.id}
                      intensity={8}
                      className="rounded-2xl"
                    >
                      <div className="p-5 rounded-2xl border border-surface-border bg-white dark:bg-surface-800/80 h-full flex flex-col justify-between glass">
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <span className="text-xs font-bold text-brand-600 dark:text-cyan-400 font-mono">{job.company}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono whitespace-nowrap">
                              {job.resilienceScore}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-foreground leading-snug mb-1">{job.title}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{job.location}</p>
                          <p className="text-xs font-semibold text-gray-800 dark:text-gray-100 mb-3">{job.salary}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {job.tags.map(tag => (
                              <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-surface-700/80 text-gray-600 dark:text-gray-300 font-mono border border-gray-200/60 dark:border-white/5">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs text-gray-400 font-mono">
                          <span>{job.posted}</span>
                          <a href={job.sourceUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-brand-500 dark:text-cyan-400 hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-500 rounded">
                            <span>Node</span><ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>
            )}

            {/* ── Telemetry Tab ── */}
            {activeTab === 'telemetry' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Round-Trip Latency', value: `${platform.telemetry.latencyMs}ms`, unit: '', color: 'emerald', note: 'Incl. proxy hop + TLS' },
                    { label: 'TLS Version', value: platform.telemetry.tlsVersion, unit: '', color: 'cyan', note: `JA4: ${platform.telemetry.ja4Fingerprint.slice(0,16)}…` },
                    { label: 'Exit Node', value: platform.telemetry.exitNode, unit: '', color: 'purple', note: `${platform.telemetry.proxyHops} hops` },
                    { label: 'DOM Shield', value: platform.telemetry.domMutationDetected ? 'Drift Fixed' : 'Zero Drift', unit: '', color: 'brand', note: `Bandwidth: ${platform.telemetry.bandwidthUsed}` },
                  ].map(({ label, value, color, note }) => {
                    const clrs = {
                      emerald: 'text-emerald-500 dark:text-emerald-400',
                      cyan: 'text-cyan-500 dark:text-cyan-400',
                      purple: 'text-purple-500 dark:text-purple-400',
                      brand: 'text-brand-500 dark:text-brand-400',
                    }
                    return (
                      <div key={label} className="p-4 sm:p-5 rounded-2xl glass border">
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-2">{label}</span>
                        <div className={`text-sm sm:text-base font-bold font-mono ${clrs[color]} truncate`}>{value}</div>
                        <p className="text-xs text-gray-400 mt-1 truncate">{note}</p>
                      </div>
                    )
                  })}
                </div>
                {/* Live console log */}
                <div className="terminal-window">
                  <div className="terminal-topbar">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-gray-400 text-xs font-mono ml-2">pulseops — event-bus stdout</span>
                  </div>
                  <div className="p-4 font-mono text-xs space-y-1.5">
                    {logs.map((log, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 flex-shrink-0">$</span>
                        <span className="text-gray-300">{log}</span>
                      </div>
                    ))}
                    {logs.length > 0 && <div className="text-gray-600">_<span className="animate-pulse">█</span></div>}
                  </div>
                </div>
              </div>
            )}

            {/* ── Anti-Detection Matrix Tab ── */}
            {activeTab === 'detection' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-brand-500/8 dark:bg-brand-500/10 border border-brand-500/20 text-sm text-brand-700 dark:text-brand-200">
                  <strong>Defense Coverage:</strong> PulseOps targets and neutralizes every primary fingerprint vector deployed by enterprise WAF systems.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'TLS JA3 / JA4 Signature', status: 'Protected', desc: 'Authentic cipher list, extensions, and elliptic curves — no Go/Node default artifacts.' },
                    { name: 'HTTP/2 Frame & Header Order', status: 'Protected', desc: 'Chrome 128 pseudo-header sequence with exact window sizes and SETTINGS frames.' },
                    { name: 'Canvas & WebGL Entropy', status: 'Protected', desc: 'Microscopic pixel noise injection passes bot challenges with unique GPU fingerprints.' },
                    { name: 'Navigator Prototype Leaks', status: 'Protected', desc: 'Custom Proxies over webdriver, chrome.runtime, and Permissions API with zero anomalies.' },
                  ].map((item) => (
                    <TiltCard key={item.name} intensity={6} className="rounded-2xl">
                      <div className="p-5 rounded-2xl border border-surface-border glass flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-emerald-500/10 flex-shrink-0">
                          <ShieldCheck className="w-5 h-5 text-emerald-500" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-sm font-bold text-foreground">{item.name}</h4>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono">
                              {item.status}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>
            )}

            {/* ── Raw JSON Tab ── */}
            {activeTab === 'raw' && (
              <div className="terminal-window">
                <div className="terminal-topbar justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-gray-400 text-xs font-mono ml-1">extracted_payload.json</span>
                  </div>
                  <button onClick={copyRaw} className="flex items-center gap-1 text-xs text-gray-400 hover:text-cyan-400 transition-colors font-mono">
                    {copiedRaw ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedRaw ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div className="p-4 overflow-x-auto max-h-96 overflow-y-auto">
                  <pre className="text-cyan-300 text-xs leading-relaxed">
                    {JSON.stringify(platform.sampleData, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
