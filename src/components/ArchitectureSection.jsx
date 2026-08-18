import React, { useState } from 'react'
import { 
  Network, 
  ShieldCheck, 
  Cpu, 
  Workflow, 
  Check, 
  Copy, 
  ArrowRight,
  Database,
  RefreshCw,
  Zap,
  Layers
} from 'lucide-react'
import { ARCHITECTURE_PIPELINE_STEPS } from '../data/mockScraperData'

export default function ArchitectureSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [copiedCode, setCopiedCode] = useState(false)

  const activeStep = ARCHITECTURE_PIPELINE_STEPS[activeStepIndex]

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  return (
    <section id="architecture" className="py-20 md:py-28 bg-gray-50/50 dark:bg-surface-850/40 relative border-t border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-cyan-400 border border-brand-500/20 text-xs font-mono mb-4">
            <Workflow className="w-3.5 h-3.5" />
            <span>Systems Design & Pipeline Topology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            How PulseOps Survives Anti-Bot Countermeasures
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            A 4-tier pipeline designed so that if any layer encounters an edge case, downstream modules self-heal before an IP or account burns.
          </p>
        </div>

        {/* 4 Step Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {ARCHITECTURE_PIPELINE_STEPS.map((step, idx) => {
            const isSelected = idx === activeStepIndex
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                  isSelected
                    ? 'bg-white dark:bg-surface-800 border-brand-500/50 shadow-lg shadow-brand-500/10 -translate-y-1'
                    : 'bg-white/40 dark:bg-surface-900/40 border-surface-border hover:border-gray-300 dark:hover:border-white/10 hover:bg-white/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-brand-500 dark:text-cyan-400">
                      PHASE {step.step}
                    </span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-gray-100 dark:bg-surface-700 text-gray-600 dark:text-gray-300">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-bold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-cyan-400">
                  <span>Inspect Pipeline</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                </div>
              </button>
            )
          })}
        </div>

        {/* Detailed Breakdown Card */}
        <div className="rounded-2xl border border-surface-border bg-white dark:bg-surface-900 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Description Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-cyan-400 font-bold border border-brand-500/20">
                  STEP {activeStep.step} OF 04
                </span>
                <span className="text-xs font-mono text-gray-400">{activeStep.tag}</span>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-foreground">
                {activeStep.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {activeStep.summary}
              </p>

              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  Key Technical Guarantees:
                </h4>
                {activeStep.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-surface-border flex items-center justify-between text-xs font-mono text-gray-500">
              <span>Failover Strategy: Auto-circuit break in 10ms</span>
              <span className="text-brand-500 dark:text-cyan-400 font-bold">100% TypeScript / Node / Go SDKs</span>
            </div>
          </div>

          {/* Right Code Column */}
          <div className="lg:col-span-6 bg-surface-900 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-surface-border flex flex-col justify-between font-mono text-xs">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-surface-700 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-gray-400 pl-2">pipeline_execution.js</span>
                </div>

                <button
                  onClick={() => handleCopy(activeStep.codeSnippet)}
                  className="flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <pre className="text-cyan-300 overflow-x-auto leading-relaxed py-2">
                <code>{activeStep.codeSnippet}</code>
              </pre>
            </div>

            <div className="mt-6 p-3 rounded-lg bg-surface-850 border border-surface-700 flex items-center justify-between text-[11px] text-gray-400">
              <span>Node.js / V8 Engine Compatible</span>
              <span className="text-emerald-400">● 0 Native Dependencies</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
