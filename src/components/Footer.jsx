import React from 'react'
import { Terminal, Github, Heart, Radio, Shield, Code } from 'lucide-react'

export default function Footer({ onTriggerEasterEgg }) {
  return (
    <footer className="border-t border-surface-border bg-white dark:bg-surface-900 text-gray-600 dark:text-gray-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Description */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-cyan-400 text-white font-mono font-bold text-xs">
              PO
            </div>
            <div>
              <span className="text-sm font-bold text-foreground font-sans">
                PulseOps Engine
              </span>
              <p className="text-xs text-gray-500 font-mono">
                Built for Acdyon Technologies Frontend Assessment
              </p>
            </div>
          </div>

          {/* Quick links & Easter Egg Trigger */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
            <a href="#playground" className="hover:text-foreground transition-colors">Playground</a>
            <a href="#architecture" className="hover:text-foreground transition-colors">Architecture</a>
            <a href="#features" className="hover:text-foreground transition-colors">Capabilities</a>
            <a href="#benchmarks" className="hover:text-foreground transition-colors">Benchmarks</a>
            <a href="#decisions" className="hover:text-foreground transition-colors">DECISIONS.md</a>
            <button
              onClick={onTriggerEasterEgg}
              className="text-cyan-500 hover:text-cyan-400 hover:underline flex items-center gap-1 focus:outline-none"
            >
              <Radio className="w-3 h-3 animate-pulse" />
              <span>Dev Terminal [Secret]</span>
            </button>
          </div>

          {/* Copyright & Honest note */}
          <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
            <span>MIT License</span>
            <span>•</span>
            <span>Zero Fake Logos</span>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5 text-center text-xs text-gray-400 font-mono">
          © {new Date().getFullYear()} PulseOps Engineering. Crafted with React, Tailwind CSS, & Taste.
        </div>

      </div>
    </footer>
  )
}
