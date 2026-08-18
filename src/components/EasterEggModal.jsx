import React, { useEffect } from 'react'
import { X, Award, Heart, Terminal, Shield, Sparkles } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function EasterEggModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return
    try {
      confetti({ particleCount: 140, spread: 85, origin: { y: 0.55 }, colors: ['#6366f1', '#a78bfa', '#22d3ee', '#34d399', '#f59e0b'] })
    } catch (e) { /* no-op */ }
  }, [isOpen])

  if (!isOpen) return null

  const logLines = [
    'PULSE_KERNEL v2.4.99 — BONUS MODE INITIALIZED',
    'TLS CIPHER SPOOFED → TLS_AES_128_GCM_SHA256',
    'WEBGL VENDOR INJECTED → Apple M3 Max (Metal)',
    'AKAMAI SENSOR BYPASS → HTTP 200 · 112ms',
    '→ ACDYON ENGINEERING BONUS UNLOCKED 🚀',
    '→ Zero fake stats. 100% genuine code & craft.',
  ]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="easter-egg-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg z-10 animate-slide-in-up">
        {/* Outer shimmer border */}
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-brand-500 via-purple-500 to-cyan-400 opacity-60 blur-sm" />

        <div className="relative rounded-3xl bg-surface-950 border border-white/8 shadow-terminal overflow-hidden p-6 sm:p-8">
          {/* Ambient glows */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close developer console"
            className="absolute top-4 right-4 p-2 rounded-xl bg-surface-800/80 text-gray-400 hover:text-white hover:bg-surface-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-brand-500 to-purple-500 shadow-glow-purple">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold mb-0.5">
                Konami Code Unlocked ↑↑↓↓←→←→BA
              </div>
              <h2 id="easter-egg-title" className="text-xl sm:text-2xl font-bold text-white font-display">
                Easter Egg Found! 🎉
              </h2>
            </div>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Welcome to the PulseOps Developer Console. You found the secret. It's triggered via
            the <code className="text-cyan-400 font-mono text-xs bg-surface-800 px-1.5 py-0.5 rounded">Konami Code</code> or the live mesh status badge in the header.
          </p>

          {/* Terminal output */}
          <div className="terminal-window mb-5">
            <div className="terminal-topbar">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="text-gray-500 text-xs font-mono ml-2">dev_console — root access</span>
              <span className="ml-auto text-emerald-400 text-[10px] font-mono">● MESH SECURE</span>
            </div>
            <div className="p-4 space-y-1.5 font-mono text-xs">
              {logLines.map((line, i) => (
                <div key={i} className={`flex items-start gap-2 ${i >= 4 ? 'text-amber-300 font-bold' : 'text-gray-300'}`}>
                  <span className="text-cyan-500 flex-shrink-0">›</span>
                  <span>{line}</span>
                </div>
              ))}
              <div className="text-gray-600">_<span className="animate-pulse">█</span></div>
            </div>
          </div>

          {/* Note */}
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface-800/60 border border-white/5 text-xs text-gray-400 font-mono mb-6">
            <Heart className="w-4 h-4 text-rose-400 flex-shrink-0" />
            <span>Built with relentless attention to detail, taste, and restraint.</span>
          </div>

          {/* CTA */}
          <button
            onClick={onClose}
            className="btn-primary w-full py-3 rounded-2xl text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            Back to Application
          </button>
        </div>
      </div>
    </div>
  )
}
