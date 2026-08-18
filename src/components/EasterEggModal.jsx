import React, { useEffect, useState } from 'react'
import { X, Sparkles, Terminal, Shield, Zap, Flame, Award, Heart } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function EasterEggModal({ isOpen, onClose }) {
  const [matrixLines, setMatrixLines] = useState([])

  useEffect(() => {
    if (isOpen) {
      // Trigger festive confetti burst
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        })
      } catch (e) {
        // fallback if canvas not available
      }

      const sampleLines = [
        'INITIALIZING PULSE_KERNEL // REVISION 2.4.99',
        'SPOOFING TLS_CIPHER_SUITE: TLS_AES_128_GCM_SHA256',
        'INJECTING RANDOMIZED WEBGL VENDOR: Apple M3 Max (Metal)',
        'BYPASSING AKAMAI SENSOR MATRIX: STATUS 200 OK',
        'ACDYON ENGINEERING BONUS UNLOCKED: LEVEL MAX 🚀',
        'Zero fake stats. 100% genuine code & craft.'
      ]
      setMatrixLines(sampleLines)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="easter-egg-title"
        className="relative w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-surface-900 border border-cyan-500/40 shadow-2xl shadow-cyan-500/20 text-white overflow-hidden"
      >
        
        {/* Glow ambient */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Easter Egg Dialog"
          className="absolute top-5 right-5 p-2 rounded-xl bg-surface-800 text-gray-400 hover:text-white hover:bg-surface-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Award className="w-6 h-6 animate-bounce" />
          </div>
          <div>
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
              Bonus Round Unlocked
            </span>
            <h3 id="easter-egg-title" className="text-xl sm:text-2xl font-bold text-white">
              You Found The Easter Egg! 🎉
            </h3>
          </div>
        </div>

        {/* Message */}
        <p className="mt-4 text-sm text-gray-300 leading-relaxed font-sans">
          Welcome, Acdyon Engineering team! You unlocked the secret developer console. 
          Triggered via Konami Code (<code className="text-cyan-400 font-mono">↑ ↑ ↓ ↓ ← → ← → B A</code>) or the status radar.
        </p>

        {/* Matrix Simulated Terminal */}
        <div className="mt-5 p-4 rounded-xl bg-black/90 border border-cyan-500/30 font-mono text-xs text-cyan-300 space-y-1.5 shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-gray-500 text-[10px]">
            <span>DEV_CONSOLE // ROOT_ACCESS</span>
            <span className="text-emerald-400">● MESH SECURE</span>
          </div>
          {matrixLines.map((line, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-cyan-500">&gt;</span>
              <span className={idx === 4 ? 'text-amber-300 font-bold' : ''}>{line}</span>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Note */}
        <div className="mt-5 p-3.5 rounded-xl bg-surface-800/80 border border-white/10 flex items-center gap-3 text-xs text-gray-300 font-mono">
          <Heart className="w-4 h-4 text-rose-400 flex-shrink-0" />
          <span>Built with relentless attention to detail, taste, and restraint.</span>
        </div>

        {/* CTA Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all"
          >
            Back to Application
          </button>
        </div>

      </div>
    </div>
  )
}
