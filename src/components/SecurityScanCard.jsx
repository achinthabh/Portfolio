import { useState, useEffect } from 'react'
import '../styles/animations.css'

const SecurityScanCard = ({ title, description, status = 'secure', children }) => {
  const [scanning, setScanning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setScanning(prev => !prev)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const statusColor = {
    secure: '#00ff41',
    warning: '#ffff00',
    danger: '#ff0033'
  }

  return (
    <div className="relative border-2 p-4 rounded" style={{
      borderColor: statusColor[status],
      boxShadow: `0 0 20px ${statusColor[status]}40, inset 0 0 10px ${statusColor[status]}20`
    }}>
      {/* Status indicator */}
      <div className="absolute top-2 right-2 w-3 h-3 rounded-full" style={{
        backgroundColor: statusColor[status],
        animation: 'pulse-glow 1.5s ease-in-out infinite'
      }} />

      {/* Scan line */}
      {scanning && (
        <div 
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent pointer-events-none"
          style={{
            animation: 'security-scan 1.5s ease-in-out infinite'
          }}
        />
      )}

      <div className="mb-3" style={{ color: statusColor[status] }}>
        <h3 className="font-mono font-bold text-sm uppercase">{title}</h3>
      </div>

      <p style={{ color: '#00cc33' }} className="text-sm font-mono">{description}</p>

      {children}
    </div>
  )
}

export default SecurityScanCard
