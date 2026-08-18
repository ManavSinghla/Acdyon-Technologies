import React, { useState } from 'react'
import { Globe, EyeOff, RefreshCw, Sliders, Lock, Cpu, ArrowUpRight } from 'lucide-react'
import TiltCard from './TiltCard'

const REGIONS = {
  'us-east':    { city: 'Ashburn, VA', ping: '18ms', nodes: '14,280', load: 38 },
  'eu-central': { city: 'Frankfurt, DE', ping: '32ms', nodes: '9,450', load: 51 },
  'ap-south':   { city: 'Mumbai, IN', ping: '41ms', nodes: '7,890', load: 44 },
  'ap-northeast': { city: 'Tokyo, JP', ping: '54ms', nodes: '6,120', load: 33 },
}

function MemoryBar({ label, value, max, color, barColor }) {
  const pct = Math.round((value / max) * 100)
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className={color}>{label}</span>
        <span className="font-bold text-foreground">{value} MB</span>
      </div>
      <div className="w-full h-2.5 rounded-full bg-gray-100 dark:bg-surface-700/80 overflow-hidden">
        <div
          className={`h-full rounded-full ${barColor} transition-all duration-700`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default function BentoFeatures() {
  const [region, setRegion] = useState('us-east')
  const info = REGIONS[region]

  const featureCards = [
    {
      icon: EyeOff,
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
      title: 'Zero-Footprint TLS Engine',
      desc: 'Native network stack with custom TCP window matching — no 400MB Chrome process. 30× cheaper infrastructure at identical bypass rates.',
      badge: '30× Less Memory',
      badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    },
    {
      icon: RefreshCw,
      iconBg: 'bg-amber-500/10',
      iconColor: 'text-amber-500',
      title: 'Self-Healing DOM Graphs',
      desc: 'Sites scramble CSS class names weekly. PulseOps uses structural NLP and semantic tree heuristics to locate target data regardless.',
      badge: 'Zero 3AM Alerts',
      badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    },
    {
      icon: Sliders,
      iconBg: 'bg-cyan-500/10',
      iconColor: 'text-cyan-500',
      title: 'Gaussian Pacing Engine',
      desc: 'Static delays get banned immediately. PulseOps calculates natural Poisson arrival intervals with micro-pauses and randomized mouse jitter.',
      badge: 'Auto Rate Adaptation',
      badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    },
    {
      icon: Lock,
      iconBg: 'bg-emerald-500/10',
      iconColor: 'text-emerald-500',
      title: 'Zero Account Contamination',
      desc: 'Ephemeral cookie stores and sandboxed browser contexts prevent cross-session contamination and corporate account burns.',
      badge: 'Credential Isolated',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    },
  ]

  return (
    <section id="features" className="py-20 md:py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[400px] bg-cyan-500/6 dark:bg-cyan-500/8 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-mono mb-5">
            <Cpu className="w-3.5 h-3.5" />
            <span>Production-Grade Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-display">
            Built for Real WAF Countermeasures
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Every feature solves an actual production failure mode — from fingerprint drift to aggressive IP bans.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5">

          {/* Big Card: Proxy Mesh Map — col-span-7 */}
          <TiltCard intensity={6} className="md:col-span-2 lg:col-span-7 rounded-4xl">
            <div className="p-6 sm:p-8 rounded-4xl glass border border-surface-border h-full flex flex-col justify-between gap-5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2.5 rounded-2xl bg-brand-500/10 border border-brand-500/20">
                      <Globe className="w-5 h-5 text-brand-600 dark:text-cyan-400" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase text-gray-400 tracking-wider">Proxy Mesh Topology</span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    38,740 Live Endpoints
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground font-display mb-2">
                  Latency-Aware Intelligent IP Routing
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
                  Routes through residential subnets with the lowest RTT and highest historical bypass score for the target domain.
                </p>

                {/* Region Selector */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {Object.keys(REGIONS).map((key) => (
                    <button
                      key={key}
                      onClick={() => setRegion(key)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                        region === key
                          ? 'bg-brand-600 text-white shadow-glow-sm'
                          : 'bg-gray-100 dark:bg-surface-800/80 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-surface-700'
                      }`}
                    >
                      {key.toUpperCase()}
                    </button>
                  ))}
                </div>

                {/* Region Data */}
                <div className="terminal-window">
                  <div className="terminal-topbar">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-gray-500 text-xs font-mono ml-2">region_probe.sh</span>
                  </div>
                  <div className="p-4 grid grid-cols-3 gap-4 text-center font-mono">
                    <div>
                      <span className="text-[10px] text-gray-500 block uppercase mb-1">Node Location</span>
                      <span className="text-sm font-bold text-white truncate block">{info.city}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 block uppercase mb-1">Median RTT</span>
                      <span className="text-sm font-bold text-emerald-400">{info.ping}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 block uppercase mb-1">Active Nodes</span>
                      <span className="text-sm font-bold text-cyan-400">{info.nodes}</span>
                    </div>
                  </div>
                  {/* Load indicator */}
                  <div className="px-4 pb-4">
                    <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 mb-1.5">
                      <span>Pool Load</span>
                      <span className="text-emerald-400">{info.load}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-700"
                        style={{ width: `${info.load}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-gray-400 pt-2">
                <span>Automatic failover in &lt;10ms</span>
                <span className="text-brand-500 dark:text-cyan-400 font-bold">Dynamic ASN Rotation</span>
              </div>
            </div>
          </TiltCard>

          {/* Memory Comparison Card — col-span-5 */}
          <TiltCard intensity={8} className="md:col-span-1 lg:col-span-5 rounded-4xl">
            <div className="p-6 sm:p-8 rounded-4xl glass border border-surface-border h-full flex flex-col gap-5">
              <div>
                <div className="p-2.5 w-fit rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-4">
                  <EyeOff className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground font-display mb-2">Zero-Footprint Engine</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  Spoof TLS at the network layer — no heavy browser process needed.
                </p>
              </div>

              <div className="space-y-4">
                <MemoryBar label="PulseOps RSS" value={14} max={500} color="text-emerald-500" barColor="bg-gradient-to-r from-emerald-500 to-teal-400" />
                <MemoryBar label="Puppeteer (Chrome)" value={450} max={500} color="text-rose-400" barColor="bg-gradient-to-r from-rose-500 to-red-400" />
                <MemoryBar label="Playwright (Headless)" value={380} max={500} color="text-orange-400" barColor="bg-gradient-to-r from-orange-500 to-amber-400" />
              </div>

              <div className="mt-auto p-4 rounded-2xl bg-emerald-500/8 dark:bg-emerald-500/10 border border-emerald-500/20">
                <div className="text-2xl font-extrabold text-emerald-500 dark:text-emerald-400 font-mono">30×</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Lower infrastructure cost vs headless browser clusters</div>
              </div>
            </div>
          </TiltCard>

          {/* 4 small feature cards */}
          {featureCards.map((f) => {
            const Icon = f.icon
            return (
              <TiltCard key={f.title} intensity={10} className="md:col-span-1 lg:col-span-3 rounded-3xl">
                <div className="p-5 sm:p-6 rounded-3xl glass border border-surface-border h-full flex flex-col gap-4">
                  <div>
                    <div className={`p-2.5 w-fit rounded-xl ${f.iconBg} border border-current/20 mb-4`} style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                      <Icon className={`w-5 h-5 ${f.iconColor}`} />
                    </div>
                    <h3 className="text-base font-bold text-foreground font-display mb-2">{f.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{f.desc}</p>
                  </div>
                  <div className="mt-auto">
                    <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg border ${f.badgeColor}`}>
                      ✓ {f.badge}
                    </span>
                  </div>
                </div>
              </TiltCard>
            )
          })}

        </div>
      </div>
    </section>
  )
}
