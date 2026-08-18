import React, { useState } from 'react'
import { Workflow, Check, Copy, ArrowRight, ChevronRight } from 'lucide-react'
import { ARCHITECTURE_PIPELINE_STEPS } from '../data/mockScraperData'
import TiltCard from './TiltCard'

export default function ArchitectureSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [copiedCode, setCopiedCode] = useState(false)
  const active = ARCHITECTURE_PIPELINE_STEPS[activeIdx]

  const copyCode = () => {
    navigator.clipboard.writeText(active.codeSnippet)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  const stepColors = [
    { bg: 'bg-brand-500/10', text: 'text-brand-600 dark:text-brand-400', border: 'border-brand-500/30', activeBg: 'bg-brand-500', activeText: 'text-white' },
    { bg: 'bg-purple-500/10', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-500/30', activeBg: 'bg-purple-500', activeText: 'text-white' },
    { bg: 'bg-cyan-500/10', text: 'text-cyan-600 dark:text-cyan-400', border: 'border-cyan-500/30', activeBg: 'bg-cyan-500', activeText: 'text-white' },
    { bg: 'bg-amber-500/10', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-500/30', activeBg: 'bg-amber-500', activeText: 'text-white' },
  ]

  return (
    <section id="architecture" className="py-20 md:py-28 relative border-y border-white/5 dark:border-white/[0.04]">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gray-50/50 dark:bg-surface-950/60" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-purple-500/8 dark:bg-purple-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 text-xs font-mono mb-5">
            <Workflow className="w-3.5 h-3.5" />
            <span>4-Tier Anti-Detection Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-display">
            How PulseOps Survives Enterprise WAFs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Each tier auto-heals before a downstream failure can cascade into an IP ban or account burn.
          </p>
        </div>

        {/* Step selector cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {ARCHITECTURE_PIPELINE_STEPS.map((step, idx) => {
            const isActive = idx === activeIdx
            const c = stepColors[idx]
            return (
              <TiltCard key={step.step} intensity={isActive ? 0 : 10} className="rounded-3xl">
                <button
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-5 sm:p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between gap-4 min-h-[160px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                    isActive
                      ? `glass shadow-glow-md border-brand-500/30 dark:border-brand-400/20 -translate-y-1`
                      : 'bg-white/40 dark:bg-surface-900/40 border-gray-200/60 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/8 hover:-translate-y-0.5'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border ${
                        isActive ? `${c.activeBg} ${c.activeText} border-transparent shadow-sm` : `${c.bg} ${c.text} ${c.border}`
                      }`}>
                        PHASE {step.step}
                      </span>
                      <span className="text-[10px] uppercase font-mono text-gray-400 dark:text-gray-500">
                        {step.tag}
                      </span>
                    </div>
                    <h3 className={`text-base font-bold leading-snug ${isActive ? 'text-foreground' : 'text-gray-700 dark:text-gray-300'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-semibold transition-all ${
                    isActive ? `${c.text}` : 'text-gray-400'
                  }`}>
                    <span>Inspect</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-1' : ''}`} />
                  </div>
                </button>
              </TiltCard>
            )
          })}
        </div>

        {/* Detail Card */}
        <div className="rounded-3xl border border-brand-500/15 dark:border-white/8 bg-white/60 dark:bg-surface-900/70 backdrop-blur-2xl shadow-card-dark overflow-hidden grid grid-cols-1 lg:grid-cols-2">

          {/* Left: Description */}
          <div className="p-6 sm:p-8 xl:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-brand-500/10 text-brand-600 dark:text-cyan-400 font-bold border border-brand-500/20">
                  STEP {active.step} / 04
                </span>
                <span className="text-xs font-mono text-gray-400">{active.tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-3">
                {active.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {active.summary}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400">
                  Technical Guarantees:
                </h4>
                {active.details.map((d, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-500" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
              <span>Auto-failover: &lt;10ms</span>
              <span className="text-brand-500 dark:text-cyan-400 font-bold">Node.js + Go SDKs</span>
            </div>
          </div>

          {/* Right: Code Window */}
          <div className="terminal-window border-t lg:border-t-0 lg:border-l border-white/5 rounded-none lg:rounded-r-3xl flex flex-col">
            <div className="terminal-topbar justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-gray-400 text-xs font-mono ml-1">pipeline_{active.step}_execution.js</span>
              </div>
              <button
                onClick={copyCode}
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-cyan-400 transition-colors font-mono focus:outline-none"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedCode ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="flex-1 p-6 overflow-x-auto">
              <pre className="text-cyan-300 text-xs leading-loose">
                <code>{active.codeSnippet}</code>
              </pre>
            </div>
            <div className="terminal-topbar justify-between mt-auto">
              <span className="text-gray-500 text-xs font-mono">● V8 Runtime · Zero native deps</span>
              <span className="text-emerald-400 text-xs font-mono">✓ 0 errors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
