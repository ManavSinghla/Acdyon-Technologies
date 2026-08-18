import React, { useState } from 'react'
import { 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Globe, 
  RefreshCw, 
  Lock, 
  Layers, 
  Sliders, 
  EyeOff,
  Database,
  ArrowUpRight
} from 'lucide-react'

export default function BentoFeatures() {
  const [activeRegion, setActiveRegion] = useState('us-east')

  const regionPings = {
    'us-east': { city: 'Ashburn, VA', ping: '18ms', activeNodes: '14,280', status: 'Optimal' },
    'eu-central': { city: 'Frankfurt, DE', ping: '32ms', activeNodes: '9,450', status: 'Optimal' },
    'ap-south': { city: 'Mumbai, IN', ping: '41ms', activeNodes: '7,890', status: 'Optimal' },
    'ap-northeast': { city: 'Tokyo, JP', ping: '54ms', activeNodes: '6,120', status: 'Optimal' }
  }

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>High-Yield Ingestion Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Engineered For The Reality of Modern WAFs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Every feature in PulseOps solves an actual production failure mode — from fingerprint drift to aggressive IP bans.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Real-Time Proxy Mesh Map (Large - col 8) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl border border-surface-border bg-white/70 dark:bg-surface-850/80 backdrop-blur-xl flex flex-col justify-between shadow-lg relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-brand-500/10 text-brand-600 dark:text-cyan-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase text-gray-400">
                    Mesh Topology
                  </span>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  38,740 Active Residential Endpoints
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-foreground">
                Intelligent Latency-Aware IP Mesh
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 max-w-xl">
                Automatically routes queries through residential subnets with the lowest current RTT and highest historical bypass score against the target domain.
              </p>

              {/* Interactive Region Selector */}
              <div className="mt-6 flex flex-wrap gap-2">
                {Object.keys(regionPings).map((rKey) => (
                  <button
                    key={rKey}
                    onClick={() => setActiveRegion(rKey)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                      activeRegion === rKey
                        ? 'bg-brand-600 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-surface-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    {rKey.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Interactive Region Stats */}
              <div className="mt-4 p-4 rounded-xl bg-surface-900 border border-surface-700 grid grid-cols-3 gap-4 text-center font-mono">
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Datacenter / Node</span>
                  <span className="text-xs font-bold text-white mt-1 block truncate">
                    {regionPings[activeRegion].city}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Median RTT</span>
                  <span className="text-xs font-bold text-emerald-400 mt-1 block">
                    {regionPings[activeRegion].ping}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Live Capacity</span>
                  <span className="text-xs font-bold text-cyan-400 mt-1 block">
                    {regionPings[activeRegion].activeNodes}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between text-xs font-mono text-gray-500">
              <span>Automatic Failover in &lt;10ms</span>
              <span className="text-brand-500 dark:text-cyan-400 font-bold">Dynamic ASN Rotation</span>
            </div>
          </div>

          {/* Bento Item 2: Zero Headless Footprint (col 4) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl border border-surface-border bg-white/70 dark:bg-surface-850/80 backdrop-blur-xl flex flex-col justify-between shadow-lg">
            <div>
              <div className="p-2 w-fit rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <EyeOff className="w-5 h-5" />
              </div>

              <h3 className="mt-4 text-xl font-bold text-foreground">
                Zero-Footprint TLS Engine
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Instead of running heavy 400MB Chrome instances, PulseOps uses a lightweight native network stack with custom TCP window matching.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-gray-50 dark:bg-surface-800/90 border border-surface-border space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-500">PulseOps RSS</span>
                  <span className="font-bold text-emerald-500">14 MB</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-surface-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[8%]" />
                </div>

                <div className="flex items-center justify-between text-xs font-mono pt-2">
                  <span className="text-gray-500">Standard Puppeteer</span>
                  <span className="font-bold text-rose-500">450 MB</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-surface-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full w-[85%]" />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
              30x Lower Infrastructure Cost
            </div>
          </div>

          {/* Bento Item 3: Self Healing Selectors (col 4) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl border border-surface-border bg-white/70 dark:bg-surface-850/80 backdrop-blur-xl flex flex-col justify-between shadow-lg">
            <div>
              <div className="p-2 w-fit rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <RefreshCw className="w-5 h-5" />
              </div>

              <h3 className="mt-4 text-xl font-bold text-foreground">
                Self-Healing DOM Graphs
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Target sites deploy scrambled class names weekly. PulseOps identifies target data nodes via relational tree topology and text heuristics.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-700 dark:text-amber-300">
              ✓ Prevents 3 AM broken pipeline alerts
            </div>
          </div>

          {/* Bento Item 4: Gaussian Delay Curves (col 4) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl border border-surface-border bg-white/70 dark:bg-surface-850/80 backdrop-blur-xl flex flex-col justify-between shadow-lg">
            <div>
              <div className="p-2 w-fit rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <Sliders className="w-5 h-5" />
              </div>

              <h3 className="mt-4 text-xl font-bold text-foreground">
                Human-Mimicking Pacing
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Static delays get banned instantly. PulseOps calculates natural Poisson arrival intervals with micro-pauses and variable mouse cursor jitter.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-700 dark:text-cyan-300">
              ✓ Continuous rate-limit auto-adjustment
            </div>
          </div>

          {/* Bento Item 5: Developer API (col 4) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl border border-surface-border bg-white/70 dark:bg-surface-850/80 backdrop-blur-xl flex flex-col justify-between shadow-lg">
            <div>
              <div className="p-2 w-fit rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Lock className="w-5 h-5" />
              </div>

              <h3 className="mt-4 text-xl font-bold text-foreground">
                Zero Account Contamination
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Never burn personal corporate accounts. Ingestion pipelines execute in sandbox contexts with ephemeral cookie stores.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-300">
              ✓ Automated credential isolation
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
