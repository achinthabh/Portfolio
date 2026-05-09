// Performance Utilities for Portfolio

/**
 * Throttle function - limit function calls
 */
export const throttle = (func, limit) => {
  let inThrottle
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * Debounce function - delay function calls
 */
export const debounce = (func, delay) => {
  let timeoutId
  return function(...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, args), delay)
  }
}

/**
 * Lazy load images with Intersection Observer
 */
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.add('loaded')
          imageObserver.unobserve(img)
        }
      })
    }, {
      rootMargin: '50px'
    })
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img))
  }
}

/**
 * Preload critical resources
 */
export const preloadResources = (urls) => {
  urls.forEach(url => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = url
    document.head.appendChild(link)
  })
}

/**
 * Prefetch resources
 */
export const prefetchResources = (urls) => {
  urls.forEach(url => {
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = url
    document.head.appendChild(link)
  })
}

/**
 * Measure performance metrics
 */
export const measurePerformance = () => {
  if ('performance' in window) {
    const metrics = {
      FCP: 0,
      LCP: 0,
      CLS: 0,
      FID: 0
    }
    
    // First Contentful Paint
    const paintEntries = performance.getEntriesByType('paint')
    paintEntries.forEach(entry => {
      if (entry.name === 'first-contentful-paint') {
        metrics.FCP = entry.startTime
      }
    })
    
    return metrics
  }
}

/**
 * Cache API responses
 */
export const cacheResponse = (url, data, ttl = 3600000) => {
  const cacheKey = `cache_${url}`
  const cacheData = {
    data,
    timestamp: Date.now(),
    ttl
  }
  localStorage.setItem(cacheKey, JSON.stringify(cacheData))
}

/**
 * Retrieve cached response
 */
export const getCachedResponse = (url) => {
  const cacheKey = `cache_${url}`
  const cached = localStorage.getItem(cacheKey)
  
  if (!cached) return null
  
  const { data, timestamp, ttl } = JSON.parse(cached)
  
  if (Date.now() - timestamp > ttl) {
    localStorage.removeItem(cacheKey)
    return null
  }
  
  return data
}

/**
 * Optimize CSS delivery
 */
export const optimizeCSSDelivery = () => {
  // Move non-critical CSS to async loading
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
  stylesheets.forEach(sheet => {
    if (!sheet.dataset.critical) {
      sheet.media = 'print'
      sheet.onload = function() {
        this.media = 'all'
      }
    }
  })
}

/**
 * Enable service worker for offline support
 */
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      console.log('Service Worker registration failed')
    })
  }
}

export default {
  throttle,
  debounce,
  lazyLoadImages,
  preloadResources,
  prefetchResources,
  measurePerformance,
  cacheResponse,
  getCachedResponse,
  optimizeCSSDelivery,
  registerServiceWorker
}
