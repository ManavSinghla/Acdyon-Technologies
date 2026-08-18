import React, { useRef, useState, useCallback } from 'react'

/**
 * 3D Tilt Card wrapper — tracks mouse position and applies perspective tilt.
 * Falls back gracefully on touch devices.
 */
export default function TiltCard({ children, className = '', intensity = 12, glare = true }) {
  const cardRef = useRef(null)
  const [style, setStyle] = useState({})
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 })
  const rafRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2
      const rotX = ((y - cy) / cy) * -intensity
      const rotY = ((x - cx) / cx) * intensity

      setStyle({
        transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`,
        transition: 'none',
      })

      if (glare) {
        const glareX = (x / rect.width) * 100
        const glareY = (y / rect.height) * 100
        setGlareStyle({
          opacity: 0.15,
          background: `radial-gradient(ellipse 80% 80% at ${glareX}% ${glareY}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
        })
      }
    })
  }, [intensity, glare])

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    })
    setGlareStyle({ opacity: 0 })
  }, [])

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{ ...style, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {/* Glare overlay */}
      {glare && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] z-10"
          style={glareStyle}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
