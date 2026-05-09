import { useState, useEffect, useRef } from 'react'
import '../styles/animations.css'

const GlitchText = ({ text, intensity = 'medium' }) => {
  const [glitch, setGlitch] = useState(false)
  const textRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 100)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const generateGarbled = () => {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`'
    return text.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join('')
  }

  const intensityValues = {
    light: 'glitch-text',
    medium: 'glitch-shift',
    high: 'digital-noise'
  }

  return (
    <div 
      ref={textRef}
      className={`relative font-mono font-bold ${glitch ? intensityValues[intensity] : ''}`}
      style={{
        animation: glitch ? `${intensityValues[intensity]} 0.2s ease-in-out` : 'none'
      }}
    >
      {text}
      {glitch && (
        <div className="absolute top-0 left-0 opacity-50" style={{ color: '#ff0033' }}>
          {generateGarbled()}
        </div>
      )}
    </div>
  )
}

export default GlitchText
