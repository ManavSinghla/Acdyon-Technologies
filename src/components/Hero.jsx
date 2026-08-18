import React, { useState, useEffect, useRef } from 'react'
import {
  ArrowRight, Terminal, Copy, Check, ShieldCheck,
  Zap, Layers, Activity, Network, Globe2
} from 'lucide-react'
import TiltCard from './TiltCard'

// Animated rotating 3D orbit system
function OrbitSystem() {
  return (
    <div className="relative w-[480px] h-[480px] hidden xl:flex items-center justify-center flex-shrink-0">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-600/20 via-purple-500/15 to-cyan-400/15 blur-5xl animate-pulse-glow" />

      {/* Core node */}
      <div className="relative z-20 w-28 h-28 rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-purple-600 shadow-glow-purple flex items-center justify-center animate-float-slow"
        style={{ transform: 'perspective(600px) rotateX(15deg) rotateY(-15deg)' }}
      >
        <Terminal className="w-12 h-12 text-white" />
        {/* Core glow ring */}
        <div className="absolute -inset-2 rounded-3xl border border-brand-400/30 animate-ping-large" style={{ animationDuration: '3s' }} />
      </div>

      {/* Orbit ring 1 */}
      <div className="absolute w-72 h-72 rounded-full border border-brand-500/20 dark:border-brand-400/15">
        {/* Orbiting node A */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-glow-cyan flex items-center justify-center animate-orbit"
          style={{ transformOrigin: '0 144px' }}>
          <Globe2 className="w-4 h-4 text-white" />
        </div>
        {/* Orbiting node B */}
        <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 shadow-glow-emerald flex items-center justify-center"
          style={{ animation: 'orbit 12s linear infinite', animationDelay: '-4s', transformOrigin: '-144px 0' }}>
          <ShieldCheck className="w-3.5 h-3.5 text-white" />
        </div>
      </div>

      {/* Orbit ring 2 — counter-rotate */}
      <div className="absolute w-52 h-52 rounded-full border border-purple-500/15 dark:border-purple-400/12"
        style={{ transform: 'rotate(-30deg)' }}>
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 shadow-glow-purple flex items-center justify-center animate-orbit-reverse"
          style={{ transformOrigin: '0 104px' }}>
          <Zap className="w-3 h-3 text-white" />
        </div>
      </div>

      {/* Orbit ring 3 — big outer dashed */}
      <div className="absolute w-96 h-96 rounded-full border-dashed border border-gray-300/40 dark:border-white/[0.06]" />

      {/* Data stream lines emanating from center */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <div
          key={i}
          className="absolute w-0.5 bg-gradient-to-b from-brand-500/40 to-transparent"
          style={{
            height: '90px',
            top: '50%',
            left: '50%',
            transformOrigin: 'top center',
            transform: `rotate(${angle}deg) translateY(-50%)`,
            opacity: 0.5,
          }}
        />
      ))}

      {/* Floating stat badges */}
      <div className="absolute top-8 right-4 glass px-3 py-2 rounded-xl animate-float-fast text-xs font-mono text-brand-600 dark:text-cyan-300 shadow-card-dark whitespace-nowrap">
        <span className="text-emerald-500 font-bold">●</span> 99.4% Bypass Rate
      </div>
      <div className="absolute bottom-12 left-0 glass px-3 py-2 rounded-xl animate-float-slow text-xs font-mono text-brand-600 dark:text-cyan-300 shadow-card-dark whitespace-nowrap"
        style={{ animationDelay: '-3s' }}>
        <span className="text-cyan-400 font-bold">⚡</span> 115ms Avg Latency
      </div>
      <div className="absolute bottom-4 right-8 glass px-3 py-2 rounded-xl animate-float-fast text-xs font-mono text-brand-600 dark:text-purple-300 shadow-card-dark whitespace-nowrap"
        style={{ animationDelay: '-1.5s' }}>
        <span className="text-purple-400 font-bold">◈</span> JA4 Spoof Active
      </div>
    </div>
  )
}

export default function Hero({ onExploreDemo }) {
  const [copied, setCopied] = useState(false)
  const installCmd = 'npm install @pulseops/engine'

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 min-h-screen flex items-center overflow-hidden">

      {/* ── Background Layers ── */}
      {/* Hero gradient orb */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-br from-brand-600/25 via-purple-600/15 to-transparent blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-gradient-to-tl from-cyan-500/10 to-transparent blur-[100px] rounded-full" />
        {/* Morphing blob background accent */}
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-purple-500/8 dark:bg-purple-500/10 blur-[80px] animate-morph-blob" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-16">

          {/* ── Left Column: Copy ── */}
          <div className="flex-1 text-center xl:text-left max-w-3xl mx-auto xl:mx-0">

            {/* Announcement pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full hero-badge text-sm mb-8 cursor-default group hover:border-brand-500/50 transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-gray-700 dark:text-gray-200 font-medium">
                Engine v2.4 — JA4 TLS Spoofing Shipped
              </span>
              <span className="text-brand-600 dark:text-brand-300 font-mono text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                Changelog <ArrowRight className="w-3 h-3" />
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display leading-[1.07]">
              <span className="text-foreground block">Ingest Web Data</span>
              <span className="text-foreground block">at Scale —</span>
              <span className="text-gradient block mt-1">Without Getting Burned.</span>
            </h1>

            {/* Sub */}
            <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl xl:max-w-none font-sans font-normal">
              The distributed scraping engine engineered to spoof <strong className="text-foreground font-semibold">authentic browser TLS fingerprints</strong>,
              route through adaptive residential proxy meshes, and
              self-heal when DOM schemas mutate overnight.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-col sm:flex-row items-center xl:justify-start justify-center gap-4">
              {/* Primary CTA */}
              <a
                href="#playground"
                onClick={onExploreDemo}
                className="group btn-primary w-full sm:w-auto px-7 py-3.5 rounded-2xl text-base flex items-center justify-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Zap className="w-5 h-5" />
                <span>Open Ingestion Sandbox</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Copy Command */}
              <div
                className="group w-full sm:w-auto flex items-center justify-between gap-3 px-4 py-3.5 rounded-2xl glass border transition-all duration-300 hover:border-brand-500/40 cursor-default"
                onClick={handleCopy}
              >
                <div className="flex items-center gap-2.5 text-sm font-mono text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
                  <span>{installCmd}</span>
                </div>
                <button
                  onClick={handleCopy}
                  aria-label="Copy install command"
                  className="p-1.5 rounded-lg text-gray-400 hover:text-foreground hover:bg-gray-200/60 dark:hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 flex-shrink-0"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {copied && (
              <p className="mt-2 text-xs text-center xl:text-left font-mono text-emerald-500 dark:text-emerald-400">
                ✓ Copied to clipboard
              </p>
            )}

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 xl:gap-4">
              {[
                { label: 'Bypass Rate', value: '99.4%', color: 'emerald' },
                { label: 'Memory (RSS)', value: '14 MB', color: 'cyan' },
                { label: 'Avg Latency', value: '115ms', color: 'purple' },
                { label: 'Proxy Nodes', value: '38K+', color: 'amber' },
              ].map(({ label, value, color }) => {
                const colors = {
                  emerald: 'text-emerald-500 dark:text-emerald-400',
                  cyan: 'text-cyan-500 dark:text-cyan-400',
                  purple: 'text-purple-500 dark:text-purple-400',
                  amber: 'text-amber-500 dark:text-amber-400',
                }
                return (
                  <div key={label} className="stat-card p-4 rounded-2xl text-center">
                    <div className={`text-2xl font-extrabold font-mono ${colors[color]}`}>
                      {value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-1 font-medium">
                      {label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── Right Column: 3D Orbit Visual ── */}
          <OrbitSystem />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none -z-0" />
    </section>
  )
}
