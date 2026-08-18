import React, { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InteractivePlayground from './components/InteractivePlayground'
import ArchitectureSection from './components/ArchitectureSection'
import BentoFeatures from './components/BentoFeatures'
import BenchmarkComparison from './components/BenchmarkComparison'
import DecisionsSection from './components/DecisionsSection'
import Footer from './components/Footer'
import EasterEggModal from './components/EasterEggModal'

export default function App() {
  const [easterEggOpen, setEasterEggOpen] = useState(false)
  const [konamiSequence, setKonamiSequence] = useState([])

  // Konami Code detector: [Up, Up, Down, Down, Left, Right, Left, Right, B, A]
  const KONAMI_CODE = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
  ]

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase() === 'b' ? 'b' : e.key.toLowerCase() === 'a' ? 'a' : e.key
      
      setKonamiSequence((prevSequence) => {
        const nextSequence = [...prevSequence, key].slice(-KONAMI_CODE.length)
        const isMatch = nextSequence.every((val, index) => val === KONAMI_CODE[index])
        
        if (isMatch) {
          setEasterEggOpen(true)
          return []
        }
        return nextSequence
      })
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-300">
        
        {/* Navigation Bar */}
        <Navbar onOpenEasterEgg={() => setEasterEggOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero onExploreDemo={() => {}} />

          {/* Interactive Ingestion Playground */}
          <InteractivePlayground />

          {/* Architecture & Pipeline Deep Dive */}
          <ArchitectureSection />

          {/* Bento Grid Capabilities */}
          <BentoFeatures />

          {/* Benchmarks Comparison Table */}
          <BenchmarkComparison />

          {/* Written Decisions Section (Section 3 of PDF) */}
          <DecisionsSection />
        </main>

        {/* Footer */}
        <Footer onTriggerEasterEgg={() => setEasterEggOpen(true)} />

        {/* Easter Egg Bonus Modal */}
        <EasterEggModal 
          isOpen={easterEggOpen} 
          onClose={() => setEasterEggOpen(false)} 
        />

      </div>
    </ThemeProvider>
  )
}
