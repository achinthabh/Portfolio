import './animations.css'

const LoadingSpinner = ({ size = 'md', variant = 'primary' }) => {
  const sizeClass = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  return (
    <div className={`${sizeClass[size]} relative inline-block`}>
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-green-400 border-r-green-400 animate-spin" />
      
      {/* Middle ring */}
      <div 
        className="absolute inset-1 rounded-full border-2 border-transparent border-b-green-500 border-l-green-500 animate-spin"
        style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
      />
      
      {/* Inner dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
      </div>
    </div>
  )
}

export default LoadingSpinner
