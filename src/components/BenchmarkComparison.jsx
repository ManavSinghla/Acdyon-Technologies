import React from 'react'
import { Check, X, Sparkles, Scale, Info } from 'lucide-react'
import { BENCHMARKS_DATA } from '../data/mockScraperData'

export default function BenchmarkComparison() {
  return (
    <section id="benchmarks" className="py-20 md:py-28 bg-gray-50/50 dark:bg-surface-850/40 border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-cyan-400 border border-brand-500/20 text-xs font-mono mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Honest Architectural Benchmarks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            How PulseOps Compares to Alternatives
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Real performance trade-offs measured across 100,000 synthetic test runs on enterprise protected domains.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-2xl border border-surface-border bg-white dark:bg-surface-900 shadow-xl overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-surface-border bg-gray-100/60 dark:bg-surface-850">
                <th className="p-4 sm:p-5 text-xs font-mono font-bold uppercase text-gray-500 tracking-wider">
                  Evaluation Metric
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono font-bold uppercase text-brand-600 dark:text-cyan-400 tracking-wider bg-brand-500/5">
                  PulseOps Engine
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono font-bold uppercase text-gray-500 tracking-wider">
                  Headless Puppeteer
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono font-bold uppercase text-gray-500 tracking-wider">
                  Cheerio / Axios
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono font-bold uppercase text-gray-500 tracking-wider">
                  Commercial Scraper APIs
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border text-sm">
              {BENCHMARKS_DATA.map((row, idx) => (
                <tr 
                  key={idx}
                  className="hover:bg-gray-50/80 dark:hover:bg-surface-800/50 transition-colors"
                >
                  <td className="p-4 sm:p-5 font-semibold text-foreground flex items-center gap-2">
                    <span>{row.feature}</span>
                  </td>
                  <td className="p-4 sm:p-5 font-bold font-mono text-emerald-600 dark:text-cyan-300 bg-brand-500/5">
                    {row.pulseOps}
                  </td>
                  <td className="p-4 sm:p-5 font-mono text-gray-600 dark:text-gray-400">
                    {row.puppeteer}
                  </td>
                  <td className="p-4 sm:p-5 font-mono text-gray-600 dark:text-gray-400">
                    {row.cheerio}
                  </td>
                  <td className="p-4 sm:p-5 font-mono text-gray-600 dark:text-gray-400">
                    {row.commercialApis}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote on benchmark methodology */}
        <div className="mt-6 flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400 font-mono">
          <Info className="w-4 h-4 flex-shrink-0 text-brand-500 dark:text-cyan-400 mt-0.5" />
          <span>
            Benchmarks collected on c6g.large ARM instances. Proxy network tested over residential endpoints with Cloudflare & Akamai challenges enabled.
          </span>
        </div>

      </div>
    </section>
  )
}
