import React, { useState } from 'react'
import { 
  ArrowRight, 
  Terminal, 
  Copy, 
  Check, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Flame,
  Activity,
  CheckCircle2
} from 'lucide-react'

export default function Hero({ onExploreDemo }) {
  const [copied, setCopied] = useState(false)
  const installCmd = 'npm install @pulseops/engine'

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const badges = [
    { icon: Zap, label: '<140ms Latency Hop' },
    { icon: ShieldCheck, label: 'Zero Headless Leakage' },
    { icon: Layers, label: 'Self-Healing DOM Graphs' },
    { icon: Activity, label: 'Adaptive Pacing Jitter' }
  ]

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-gradient-to-tr from-brand-600/20 via-purple-600/15 to-cyan-400/20 blur-[130px] -z-10 pointer-events-none rounded-full" />
      
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top announcement pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-surface-800/80 border border-brand-500/20 dark:border-white/10 backdrop-blur-md mb-8 hover:border-brand-500/40 transition-all duration-300 group cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
            Engine v2.4 Released with JA4 TLS Spoofing
          </span>
          <span className="text-xs text-brand-600 dark:text-cyan-400 font-mono flex items-center group-hover:translate-x-0.5 transition-transform">
            Changelog →
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground font-sans max-w-5xl mx-auto leading-[1.12]">
          Ingest Web Data at Scale <br className="hidden sm:block" />
          <span className="text-gradient">Without Getting Burned.</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans font-normal">
          The distributed scraping engine built for resilient data extraction. 
          Spoof authentic browser TLS fingerprints, route through adaptive residential mesh pools, 
          and recover automatically from overnight DOM mutations.
        </p>

        {/* Primary Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto">
          
          {/* Main CTA */}
          <a
            href="#playground"
            onClick={onExploreDemo}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Launch Live Ingestion Sandbox</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Quick Copy Command Box */}
          <div className="w-full sm:w-auto flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-gray-100 dark:bg-surface-850 border border-gray-200 dark:border-white/10 font-mono text-sm shadow-inner group hover:border-brand-500/40 transition-colors">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Terminal className="w-4 h-4 text-cyan-500" />
              <span>{installCmd}</span>
            </div>
            <button
              onClick={handleCopy}
              aria-label="Copy install command"
              className="p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-surface-700 text-gray-500 dark:text-gray-400 hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Live Copied Toast Alert */}
        {copied && (
          <p className="mt-2 text-xs font-mono text-emerald-500 dark:text-emerald-400 animate-in fade-in slide-in-from-top-1">
            Copied command to clipboard!
          </p>
        )}

        {/* Honest Value Badges Grid */}
        <div className="mt-14 pt-8 border-t border-gray-200/60 dark:border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {badges.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 px-3 py-2 rounded-lg bg-gray-50/50 dark:bg-surface-800/30 border border-gray-200/40 dark:border-white/5">
                <Icon className="w-4 h-4 text-brand-500 dark:text-cyan-400 flex-shrink-0" />
                <span>{item.label}</span>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
