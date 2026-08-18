import React from 'react'
import { Scale, Info, CheckCircle2, XCircle, AlertCircle } from 'lucide-react'
import { BENCHMARKS_DATA } from '../data/mockScraperData'

const COL_CONFIGS = [
  {
    key: 'pulseOps',
    label: 'PulseOps Engine',
    sub: 'Our approach',
    highlight: true,
    headerBg: 'bg-gradient-to-b from-brand-500/15 to-brand-500/5 dark:from-brand-500/20 dark:to-brand-500/5',
    headerText: 'text-brand-600 dark:text-cyan-300',
    cellBg: 'bg-brand-500/5 dark:bg-brand-500/8',
  },
  {
    key: 'puppeteer',
    label: 'Headless Puppeteer',
    sub: 'Common alternative',
    highlight: false,
    headerBg: 'bg-gray-50/80 dark:bg-surface-800/40',
    headerText: 'text-gray-600 dark:text-gray-400',
    cellBg: '',
  },
  {
    key: 'cheerio',
    label: 'Cheerio / Axios',
    sub: 'Simple scraper',
    highlight: false,
    headerBg: 'bg-gray-50/80 dark:bg-surface-800/40',
    headerText: 'text-gray-600 dark:text-gray-400',
    cellBg: '',
  },
  {
    key: 'commercialApis',
    label: 'Commercial APIs',
    sub: 'Outsourced proxies',
    highlight: false,
    headerBg: 'bg-gray-50/80 dark:bg-surface-800/40',
    headerText: 'text-gray-600 dark:text-gray-400',
    cellBg: '',
  },
]

export default function BenchmarkComparison() {
  return (
    <section id="benchmarks" className="py-20 md:py-28 relative border-y border-white/5 dark:border-white/[0.04]">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gray-50/40 dark:bg-surface-950/60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[350px] bg-brand-600/6 dark:bg-brand-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-cyan-400 border border-brand-500/20 text-xs font-mono mb-5">
            <Scale className="w-3.5 h-3.5" />
            <span>Honest Architectural Benchmarks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-display">
            How We Compare
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Real trade-offs measured across 100,000 synthetic test runs on enterprise-protected domains.
          </p>
        </div>

        {/* Benchmark Table Shell */}
        <div className="rounded-3xl border border-brand-500/15 dark:border-white/8 bg-white/60 dark:bg-surface-900/70 backdrop-blur-2xl shadow-card-dark overflow-hidden overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-white/8">
                <th className="p-5 text-xs font-mono font-bold uppercase text-gray-400 tracking-widest w-[220px]">
                  Metric
                </th>
                {COL_CONFIGS.map((col) => (
                  <th
                    key={col.key}
                    className={`p-5 text-center ${col.headerBg} ${col.highlight ? 'relative' : ''}`}
                  >
                    {col.highlight && (
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
                    )}
                    <div className={`text-sm font-bold ${col.headerText}`}>{col.label}</div>
                    <div className="text-[10px] text-gray-400 font-mono mt-0.5">{col.sub}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/60 dark:divide-white/[0.04]">
              {BENCHMARKS_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/60 dark:hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 text-sm font-semibold text-gray-700 dark:text-gray-300 border-r border-gray-100/60 dark:border-white/[0.04]">
                    {row.feature}
                  </td>
                  {COL_CONFIGS.map((col) => (
                    <td
                      key={col.key}
                      className={`p-5 text-center text-xs sm:text-sm font-mono ${
                        col.highlight
                          ? `${col.cellBg} font-bold text-emerald-600 dark:text-cyan-300`
                          : 'text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote */}
        <div className="mt-6 flex items-start gap-2.5 text-xs text-gray-400 font-mono">
          <Info className="w-4 h-4 flex-shrink-0 text-brand-500 dark:text-cyan-400 mt-0.5" />
          <span>
            Benchmarks collected on AWS c6g.large ARM instances. Proxy tests run over residential endpoints with Cloudflare Turnstile and Akamai Bot Manager challenges active. Numbers reflect median across 100K runs.
          </span>
        </div>
      </div>
    </section>
  )
}
