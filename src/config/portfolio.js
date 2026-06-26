// Portfolio Configuration

export const PORTFOLIO_CONFIG = {
  // Personal Information
  personal: {
    name: 'Achintha Bhanuka',
    title: 'Cybersecurity Student',
    subtitle: 'Penetration Testing · Network Security · DevOps',
    tagline: 'Finding vulnerabilities. Securing networks. Automating systems.',
    description: 'Computer Networks undergraduate student at NSBM Green University with hands-on experience in penetration testing, network security, and DevOps practices. Passionate about automating security checks and building resilient infrastructures.',
    email: 'achinthabhanuka45@gmail.com',
    location: 'Colombo, Sri Lanka'
  },

  // Social Links
  social: {
    github: 'https://github.com/achinthabh',
    linkedin: 'https://linkedin.com/in/achintha-bhanuka-wijerathna-250a46266',
    devto: 'https://dev.to/achintha_bhanukawjerathn',
    email: 'mailto:achinthabhanuka45@gmail.com'
  },

  // Navigation Items
  navigation: [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ],

  // Theme Colors
  theme: {
    light: {
      primary: '#00d4ff',
      secondary: '#3b82f6',
      accent: '#10b981',
      background: '#ffffff',
      text: '#1f2937',
      textSecondary: '#6b7280'
    },
    dark: {
      primary: '#00d4ff',
      secondary: '#3b82f6',
      accent: '#10b981',
      background: '#0a0e27',
      text: '#f3f4f6',
      textSecondary: '#d1d5db'
    }
  },

  // Animation Settings
  animations: {
    duration: {
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.5s',
      slower: '1s'
    },
    easing: {
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      linear: 'linear'
    }
  },

  // Breakpoints
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
  },

  // Features
  features: {
    enableBlog: false,
    enableTestimonials: false,
    enableStatistics: true,
    enableDarkMode: true,
    enableScrollProgress: true,
    enableLazyLoading: true
  },

  // API Configuration
  api: {
    baseURL: 'https://achinthabhanuka.com',
    timeout: 5000
  },

  // Analytics
  analytics: {
    gtmId: process.env.REACT_APP_GTM_ID || '',
    enableTracking: true
  }
}

export const SKILL_LEVELS = {
  BEGINNER: 40,
  INTERMEDIATE: 65,
  ADVANCED: 85,
  EXPERT: 95
}

export const PROJECT_TYPES = {
  FRONTEND: 'Frontend Development',
  BACKEND: 'Backend System',
  FULLSTACK: 'Full-Stack Development',
  DEVOPS: 'DevOps',
  CICD: 'CI/CD Learning',
  INFRASTRUCTURE: 'Infrastructure Learning',
  CONTAINERIZATION: 'Containerization Learning',
  MONITORING: 'Monitoring Learning'
}

export const EXPERIENCE_TYPES = {
  EDUCATION: 'Education',
  INTERNSHIP: 'Internship',
  WORK: 'Work',
  PROJECT: 'Project',
  VOLUNTEER: 'Volunteer'
}

// Sections Configuration
export const SECTIONS = {
  hero: { enabled: true, order: 1, title: 'Home' },
  skills: { enabled: true, order: 2, title: 'Skills' },
  statistics: { enabled: true, order: 3, title: 'Statistics' },
  projects: { enabled: true, order: 4, title: 'Projects' },
  experience: { enabled: true, order: 5, title: 'Experience' },
  certifications: { enabled: true, order: 6, title: 'Certifications' },
  contact: { enabled: true, order: 7, title: 'Contact' }
}

export default PORTFOLIO_CONFIG
