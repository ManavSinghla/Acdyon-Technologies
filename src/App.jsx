import React, { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import HeroCanvas from './components/HeroCanvas'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InteractivePlayground from './components/InteractivePlayground'
import ArchitectureSection from './components/ArchitectureSection'
import BentoFeatures from './components/BentoFeatures'
import BenchmarkComparison from './components/BenchmarkComparison'
import DecisionsSection from './components/DecisionsSection'
import Footer from './components/Footer'
import EasterEggModal from './components/EasterEggModal'

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export default function App() {
  const [eggOpen, setEggOpen] = useState(false)
  const [seq, setSeq] = useState([])

  useEffect(() => {
    const handler = (e) => {
      const key = ['b','a'].includes(e.key.toLowerCase()) ? e.key.toLowerCase() : e.key
      setSeq(prev => {
        const next = [...prev, key].slice(-KONAMI.length)
        if (next.length === KONAMI.length && next.every((v, i) => v === KONAMI[i])) {
          setEggOpen(true)
          return []
        }
        return next
      })
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-300 overflow-x-hidden">

        {/* Animated particle canvas background */}
        <HeroCanvas />

        {/* Navigation */}
        <Navbar onOpenEasterEgg={() => setEggOpen(true)} />

        <main className="flex-grow relative z-10">
          <Hero onExploreDemo={() => {}} />
          <InteractivePlayground />
          <ArchitectureSection />
          <BentoFeatures />
          <BenchmarkComparison />
          <DecisionsSection />
        </main>

        <Footer onTriggerEasterEgg={() => setEggOpen(true)} />

        <EasterEggModal isOpen={eggOpen} onClose={() => setEggOpen(false)} />
      </div>
    </ThemeProvider>
  )
}
