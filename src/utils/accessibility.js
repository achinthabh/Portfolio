// Accessibility Utilities for Portfolio

/**
 * Skip to main content functionality
 * Helps keyboard users jump directly to main content
 */
export const createSkipLink = () => {
  const skipLink = document.createElement('a')
  skipLink.href = '#main'
  skipLink.textContent = 'Skip to main content'
  skipLink.className = 'skip-link'
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: white;
    padding: 8px;
    z-index: 100;
  `
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0'
  })
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px'
  })
  document.body.prepend(skipLink)
}

/**
 * Announce messages to screen readers
 */
export const announceToScreenReader = (message, priority = 'polite') => {
  const announcement = document.createElement('div')
  announcement.setAttribute('role', 'status')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.textContent = message
  announcement.style.cssText = `
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  `
  document.body.appendChild(announcement)
  
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

/**
 * Focus management for modal dialogs
 */
export const manageFocusTrap = (containerRef, onClose) => {
  const focusableElements = containerRef.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]
  
  containerRef.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      onClose()
    }
    
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }
  })
  
  firstElement?.focus()
}

/**
 * Ensure color contrast meets WCAG standards
 */
export const checkColorContrast = (foreground, background) => {
  const getLuminance = (color) => {
    const rgb = color.match(/\d+/g)
    if (!rgb || rgb.length < 3) return 0
    const [r, g, b] = rgb.map(x => parseInt(x) / 255)
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b
    return luminance > 0.5 ? (luminance + 0.05) / (0.05 + 0.05) : (0.05) / (luminance + 0.05)
  }
  
  const contrast = getLuminance(foreground) / getLuminance(background)
  return contrast >= 4.5 // WCAG AA standard
}

/**
 * Handle keyboard navigation in custom components
 */
export const setupKeyboardNav = (container, onAction) => {
  container.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onAction()
    }
  })
}

/**
 * Set up focus visible styles for better keyboard navigation visibility
 */
export const setupFocusVisibility = () => {
  const style = document.createElement('style')
  style.textContent = `
    :focus-visible {
      outline: 2px solid var(--primary-color, #00d4ff);
      outline-offset: 2px;
    }
    
    *:focus:not(:focus-visible) {
      outline: none;
    }
  `
  document.head.appendChild(style)
}

export default {
  createSkipLink,
  announceToScreenReader,
  manageFocusTrap,
  checkColorContrast,
  setupKeyboardNav,
  setupFocusVisibility
}
