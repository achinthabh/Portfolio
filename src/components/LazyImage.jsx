import { useState, useEffect, useRef } from 'react'

const LazyImage = ({ src, alt, className, placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E' }) => {
  const [imageSrc, setImageSrc] = useState(placeholder)
  const [imageRef, setImageRef] = useState(null)
  const observerTarget = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = new Image()
            img.src = src
            img.onload = () => {
              setImageSrc(src)
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current)
      }
    }
  }, [src])

  return (
    <img
      ref={observerTarget}
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
    />
  )
}

export default LazyImage
