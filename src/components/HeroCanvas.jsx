import React, { useRef, useEffect, useState } from 'react'

/**
 * Animated canvas background — floating orbs, particle trails, subtle network grid.
 * Pure CSS fallback available via dot-grid-bg class.
 */
export default function HeroCanvas() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Particles
    const isDark = document.documentElement.classList.contains('dark')
    const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 25000))

    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.6 + 0.1,
      pulse: Math.random() * Math.PI * 2,
    }))

    const draw = () => {
      const darkMode = document.documentElement.classList.contains('dark')
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const connectionDist = 120

      // Update & draw particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.pulse += 0.02
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        const alpha = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = darkMode
          ? `rgba(129, 140, 248, ${alpha})`
          : `rgba(99, 102, 241, ${alpha * 0.6})`
        ctx.fill()
      })

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * (darkMode ? 0.18 : 0.1)
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = darkMode
              ? `rgba(129, 140, 248, ${alpha})`
              : `rgba(99, 102, 241, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      window.removeEventListener('resize', resize)
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-100"
      aria-hidden="true"
      role="presentation"
    />
  )
}
