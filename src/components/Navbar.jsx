import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { 
  Terminal, 
  Sun, 
  Moon, 
  Github, 
  Menu, 
  X, 
  Cpu, 
  Sparkles, 
  ShieldCheck,
  Radio
} from 'lucide-react'

export default function Navbar({ onOpenEasterEgg }) {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Live Playground', href: '#playground' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Capabilities', href: '#features' },
    { name: 'Benchmarks', href: '#benchmarks' },
    { name: 'Decisions Doc', href: '#decisions' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-surface-border shadow-sm dark:shadow-none' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-brand-500 to-cyan-400 p-[1px] shadow-glow-sm group-hover:shadow-glow-md transition-all duration-300">
              <div className="w-full h-full bg-surface-900 rounded-[11px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-foreground font-sans">
                  Pulse<span className="text-brand-500 dark:text-cyan-400">Ops</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider px-1.5 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-cyan-400 border border-brand-500/20 font-semibold">
                  v2.4
                </span>
              </div>
              <span className="text-[11px] text-gray-500 dark:text-gray-400 font-mono hidden sm:block">
                Distributed Ingestion Engine
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-cyan-300 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-800/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-surface-800/80 border border-gray-200 dark:border-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-brand-600 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* GitHub Repo link */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="View source code on GitHub"
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-surface-800/80 border border-gray-200 dark:border-white/10 transition-all hidden sm:flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Interactive Easter Egg / Secret Badge Button */}
            <button
              onClick={onOpenEasterEgg}
              title="Click or press Konami Code (↑ ↑ ↓ ↓ ← → ← → B A)"
              className="hidden lg:flex items-center gap-1.5 text-xs font-mono px-2.5 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all"
            >
              <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
              <span>Mesh Status: 99.9%</span>
            </button>

            {/* Primary Action Button */}
            <a
              href="#playground"
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-md shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Demo</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-surface-800 border border-gray-200 dark:border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-surface-border px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-surface-800/80 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between border-t border-surface-border">
            <span className="text-xs font-mono text-gray-500">Press Konami Code for Easter Egg</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenEasterEgg()
              }}
              className="text-xs text-brand-500 dark:text-cyan-400 font-mono font-semibold"
            >
              Debug Console →
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
