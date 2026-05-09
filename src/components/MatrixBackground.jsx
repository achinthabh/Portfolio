import { useState, useEffect } from 'react'
import '../styles/animations.css'

const MatrixBackground = () => {
  const [chars, setChars] = useState('')

  useEffect(() => {
    const chars = 'ｦｧｨｩｪｫｬｭｮｯﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ' // Japanese-like characters
    let str = ''
    for (let i = 0; i < 100; i++) {
      str += chars[Math.floor(Math.random() * chars.length)]
    }
    setChars(str)
  }, [])

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden font-mono text-xs text-opacity-10"
      style={{
        color: '#00ff41',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        animation: 'matrix-rain 20s linear infinite',
        zIndex: 0
      }}
    >
      {chars}
    </div>
  )
}

export default MatrixBackground
