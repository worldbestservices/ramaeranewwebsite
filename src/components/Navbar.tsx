import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import EnhLogo from './EnhLogo'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Industries', path: '/industries' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Join', path: '/join' },
    { name: 'Contact', path: '/contact' }
  ]

  const ctaButtons = [
    { name: 'Become Shareholder', path: '/shareholder', primary: true },
    { name: 'Apply Factory', path: '/apply', secondary: true }
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <EnhLogo size="sm" variant="floating" />
            <span className="text-white font-bold text-xl font-['Orbitron'] hidden sm:block">
              RAMAERA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary-400 ${
                  isActive(item.path) ? 'text-primary-400' : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {ctaButtons.map((button) => (
              <button
                key={button.path}
                onClick={() => navigate(button.path)}
                className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                  button.primary
                    ? 'bg-gradient-to-r from-secondary-600 to-secondary-500 text-black hover:from-secondary-500 hover:to-secondary-400 shadow-golden'
                    : 'bg-gradient-to-r from-white to-accent-500 text-black hover:from-gray-200 hover:to-accent-400 shadow-neon'
                }`}
              >
                {button.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-primary-400 bg-primary-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 space-y-3 border-t border-white/10">
                {ctaButtons.map((button) => (
                  <button
                    key={button.path}
                    onClick={() => {
                      navigate(button.path)
                      setIsOpen(false)
                    }}
                    className={`w-full px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      button.primary
                        ? 'bg-gradient-to-r from-secondary-600 to-secondary-500 text-black hover:from-secondary-500 hover:to-secondary-400'
                        : 'bg-gradient-to-r from-white to-accent-500 text-black hover:from-gray-200 hover:to-accent-400'
                    }`}
                  >
                    {button.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar