import { useState, useEffect } from 'react'
import '../styles/animations.css'

const CodeTypeAnimation = ({ text, speed = 50, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.substring(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <div className={`font-mono ${className}`}>
      <code>{displayedText}</code>
      {displayedText.length < text.length && (
        <span className="inline-block w-2 h-5 ml-1 bg-green-400 animate-pulse" />
      )}
    </div>
  )
}

export default CodeTypeAnimation
