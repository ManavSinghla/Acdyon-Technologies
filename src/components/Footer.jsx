import React from 'react'
import { Terminal, Github, Radio, ArrowUpRight } from 'lucide-react'

export default function Footer({ onTriggerEasterEgg }) {
  const footerLinks = [
    { name: 'Playground', href: '#playground' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Capabilities', href: '#features' },
    { name: 'Benchmarks', href: '#benchmarks' },
    { name: 'Decisions', href: '#decisions' },
  ]

  return (
    <footer className="relative border-t border-white/5 bg-white/30 dark:bg-surface-950/80 backdrop-blur-xl">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 shadow-glow-sm flex items-center justify-center">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-extrabold text-base font-display">
                <span className="text-foreground">Pulse</span>
                <span className="text-gradient-cyan">Ops</span>
              </div>
              <p className="text-[11px] text-gray-500 font-mono">Acdyon Technologies Assessment</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-1" aria-label="Footer navigation">
            {footerLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-500 hover:text-foreground hover:bg-gray-100 dark:hover:bg-white/[0.04] rounded-lg transition-colors font-mono"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onTriggerEasterEgg}
              className="px-3 py-1.5 text-xs font-medium text-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-lg transition-colors font-mono flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <Radio className="w-3 h-3 animate-pulse" />
              <span>Dev Console</span>
            </button>
          </nav>

          {/* Right meta */}
          <div className="flex items-center gap-3 text-xs font-mono text-gray-500">
            <span>Zero Fake Metrics</span>
            <span className="text-gray-300 dark:text-gray-700">·</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-6 border-t border-gray-100/60 dark:border-white/[0.04] text-center text-xs text-gray-400 font-mono">
          © {new Date().getFullYear()} PulseOps Engine · React + Tailwind CSS · Built with care, not shortcuts.
        </div>
      </div>
    </footer>
  )
}
