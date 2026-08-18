import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { Terminal, Sun, Moon, Github, Menu, X, Radio, Sparkles, Zap } from 'lucide-react'

export default function Navbar({ onOpenEasterEgg }) {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Playground', href: '#playground' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Capabilities', href: '#features' },
    { name: 'Benchmarks', href: '#benchmarks' },
    { name: 'Decisions', href: '#decisions' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'border-b border-white/5 dark:border-white/5'
        : 'border-b border-transparent'
    }`}>
      {/* Backdrop blur layer */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/70 backdrop-blur-2xl'
          : 'bg-transparent'
      }`} />

      {/* Subtle top border glow on scroll */}
      {isScrolled && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl p-1 -m-1">
            {/* 3D Logo Mark */}
            <div className="relative w-10 h-10 flex-shrink-0">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-brand-600 via-purple-500 to-cyan-400 animate-pulse-glow" style={{ filter: 'blur(8px)', opacity: 0.5 }} />
              {/* Main logo body */}
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 via-brand-500 to-purple-600 shadow-glow-sm flex items-center justify-center group-hover:shadow-glow-md transition-all duration-300">
                <Terminal className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              {/* Live status dot */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight font-display">
                  <span className="text-foreground">Pulse</span>
                  <span className="text-gradient-cyan">Ops</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded-md bg-brand-500/10 dark:bg-brand-400/10 text-brand-600 dark:text-brand-300 border border-brand-500/20 font-bold">
                  v2.4
                </span>
              </div>
              <span className="text-[11px] text-gray-500 dark:text-gray-500 font-mono hidden sm:block leading-none">
                distributed ingestion
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center" aria-label="Primary navigation">
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-gray-100/60 dark:bg-white/[0.04] border border-gray-200/60 dark:border-white/[0.06] backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-foreground hover:bg-white/80 dark:hover:bg-white/[0.06] rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5">

            {/* Live mesh status — easter egg trigger */}
            <button
              onClick={onOpenEasterEgg}
              title="Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A"
              className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/15 hover:border-emerald-500/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Open developer console"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Mesh: 99.9%</span>
            </button>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="View source on GitHub"
              className="hidden sm:flex p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:text-foreground hover:bg-gray-100 dark:hover:bg-white/[0.06] border border-gray-200/60 dark:border-white/[0.06] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:text-foreground hover:bg-gray-100 dark:hover:bg-white/[0.06] border border-gray-200/60 dark:border-white/[0.06] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-brand-600" />
              )}
            </button>

            {/* CTA */}
            <a
              href="#playground"
              className="btn-primary px-4 sm:px-5 py-2 rounded-xl text-sm flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
            >
              <Zap className="w-4 h-4" />
              <span className="hidden sm:inline">Live Demo</span>
              <span className="sm:hidden">Demo</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.06] border border-gray-200/60 dark:border-white/[0.06] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 animate-slide-down">
          <div className="mx-4 mb-4 rounded-2xl bg-background/95 backdrop-blur-2xl border border-white/10 shadow-card-dark overflow-hidden">
            <nav className="p-3 space-y-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-foreground hover:bg-brand-500/5 dark:hover:bg-white/[0.05] rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="px-4 pb-4">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenEasterEgg() }}
                className="w-full text-center text-xs font-mono text-brand-500 dark:text-cyan-400 py-2 rounded-xl hover:bg-brand-500/5 transition-colors"
              >
                ↑ ↑ ↓ ↓ ← → ← → B A — Dev Console
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
