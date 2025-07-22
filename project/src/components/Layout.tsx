import React, { useState, useEffect, Suspense } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Factory, 
  Menu, 
  X, 
  Home, 
  Info, 
  Building, 
  Cog, 
  Trophy, 
  UserPlus, 
  FileText, 
  Phone,
  Quote,
  Zap,
  Sparkles
} from 'lucide-react'
import ScrollProgress from './ScrollProgress'
import EnhancedLogo from './EnhancedLogo'
import LoadingFallback from './LoadingFallback'
import PageTransition from './PageTransition'
import { useScrollAnimations, useParticleSystem } from '../hooks/useGSAP'
import EnhLogo from './EnhLogo'

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const location = useLocation()

  // Initialize smooth scrolling and particle system
  useScrollAnimations()
  useParticleSystem()

  // This effect will run every time the route changes
  useEffect(() => {
    // Scroll to hero section on route change
    const hero = document.getElementById('hero-section');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname]); 

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Industries', href: '/industries', icon: Building },
    { name: 'How It Works', href: '/how-it-works', icon: Cog },
    { name: 'Success Stories', href: '/success-stories', icon: Trophy },
    { name: 'Join Us', href: '/join', icon: UserPlus },
    { name: 'Apply for Factory', href: '/apply', icon: FileText },
    { name: 'Contact', href: '/contact', icon: Phone },
  ]

  const isActive = (path: string) => location.pathname === path

  useEffect(() => {
    // Reset loading state on route change
    setIsLoading(true)
    setLoadingProgress(0)

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 100)

    // Ensure loading completes within reasonable time
    const loadingTimer = setTimeout(() => {
      setLoadingProgress(100)
      clearInterval(progressInterval)
      
      // Hide loading screen after progress completes
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }, 1500) // Reduced to 1.5 seconds for better UX

    return () => {
      clearTimeout(loadingTimer)
      clearInterval(progressInterval)
    }
  }, [location])

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <ScrollProgress />
      
      {/* Enhanced Page Loader with Fallback */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="fixed inset-0 bg-black z-[100] flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative flex flex-col items-center">
              {/* Enhanced logo with fallback */}
              <div className="mb-8">
                <Suspense fallback={<LoadingFallback />}>
                  <EnhLogo size="xl" variant="spinning" showText={false} />
                </Suspense>
              </div>
              
              {/* Loading text and progress */}
              <motion.div
                className="text-2xl font-bold text-white mb-4 font-['Orbitron']"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [0.9, 1, 0.9]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                RAMAERA INDUSTRIES
              </motion.div>
              
              {/* Progress bar */}
              <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              
              {/* Progress percentage */}
              <motion.div
                className="text-gray-400 text-sm"
                animate={{
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {Math.round(loadingProgress)}% Loading...
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 matrix-bg opacity-30"></div>
        
        {/* Enhanced dynamic gradient orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-500/5 rounded-full blur-3xl"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }
          }}
        />
        
        {/* Enhanced floating geometric shapes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Enhanced Header */}
     {/* Enhanced Header with Glass Morphism */}
<motion.header 
  className=" relative z-50 bg-black/30 backdrop-blur-xl border-b border-white/10  top-0 p-3"
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  style={{
    borderRadius: '0 0 20px 20px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(12px) saturate(160%)',
    WebkitBackdropFilter: 'blur(12px) saturate(160%)',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  }}
>
<div 
    className=" absolute inset-0 rounded-b-[20px]"
    style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(173,102,255,0.05) 100%)',
      pointerEvents: 'none' // Prevent interaction with the gradient layer
    }}
  ></div>
  <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16"> {/* Reduced height */}
      {/* Enhanced Logo */}
      <Link to="/" className="flex items-center space-x-2 group shrink-0"> {/* Reduced space-x */}
              {/* <EnhancedLogo size="sm" variant="floating" />  */}
              <EnhLogo size="sm" variant="floating"/>
        <motion.div 
          className="flex flex-col"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-lg font-bold text-white group-hover:text-accent-400 transition-colors font-['Orbitron'] glitch-hover">
            RAMAERA
          </span>
          <span className="text-[0.65rem] text-gray-400 font-medium tracking-wider"> {/* Smaller text */}
            INDUSTRIES LTD
          </span>
        </motion.div>
      </Link>

      {/* Enhanced Desktop Navigation */}
      <div className="flex-1 flex items-center justify-between px-4 lg:px-8">
        <nav className="hidden md:flex space-x-1"> {/* Removed scrollbar and hide on mobile */}
          {navigation.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="shrink-0"
              >
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-white bg-white/20 border border-white/30 shadow-neon'
                      : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-neon'
                  }`}
                  style={{
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  <Icon className="h-3 w-3" /> {/* Smaller icon */}
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            )
          })}
        </nav>

        {/* Enhanced CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="shrink-0"
        >
          <Link
            to="https://kyc1.ramaera.com/auth/signup"  target="_blank" rel="noopener noreferrer"
            className="flex items-center space-x-1 px-3 py-1.5 glow-button btn-hover-lift text-xs font-bold rounded-full" // Smaller button
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <Zap className="h-3 w-3" /> {/* Smaller icon */}
            <span className="hidden sm:inline">JOIN NOW</span>
          </Link>
        </motion.div>
      </div>

      {/* Mobile menu button */}
      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/20 ml-2" // Smaller button
        style={{
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-5 w-5" /> {/* Smaller icon */}
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-5 w-5" /> {/* Smaller icon */}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  </div>

  {/* Mobile Navigation */}
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div 
        className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
        }}
      >
        <div className="px-3 pt-3 pb-4 space-y-1"> {/* Reduced padding */}
          {navigation.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-white bg-white/20 border border-white/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  <Icon className="h-4 w-4" /> {/* Smaller icon */}
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            )
          })}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navigation.length * 0.1, duration: 0.3 }}
          >
            <Link
              to="/join"
              className="flex items-center justify-center space-x-1 px-4 py-2 glow-button btn-hover-lift text-xs font-bold mt-2 rounded-full" // Smaller button
              onClick={() => setIsMenuOpen(false)}
              style={{
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              <Zap className="h-3 w-3" /> {/* Smaller icon */}
              <span>JOIN NOW</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</motion.header>

      {/* Enhanced Main Content with Page Transitions */}
      <motion.main 
        className="relative z-10 flex-1"
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
        transition={pageTransition}
        key={location.pathname}
      >
        <PageTransition>
          <Outlet />
        </PageTransition>
      </motion.main>

      {/* Enhanced Footer */}
      <footer className="relative z-10 bg-black border-t border-white/10">
        {/* Enhanced Inspirational Quote Section */}
        <div className="bg-gradient-to-r from-black via-white/5 to-black py-16 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"
              animate={{ x: [0, 100, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-accent-500/30 to-transparent"
              animate={{ x: [0, -50, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Quote className="h-16 w-16 text-secondary-400 mx-auto mb-8 floating-icon pulse-glow" />
            </motion.div>
            <motion.blockquote 
              className="text-2xl md:text-4xl font-bold text-white mb-6 holographic leading-tight font-['Orbitron']"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              "Welcome to the New Era of Industrialization — Where Every Shareholder Is an Owner, a User, a Distributor, and a Nation Builder."
            </motion.blockquote>
            <motion.p 
              className="text-gray-400 text-xl font-medium golden-accent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Building India's industrial future, one factory at a time.
            </motion.p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <motion.div 
              className="col-span-1 md:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
              <EnhLogo size="sm" variant="floating"/>
                <div>
                  <span className="text-2xl font-bold text-white font-['Orbitron'] glitch-hover">RAMAERA</span>
                  <div className="text-sm text-gray-400 font-medium">INDUSTRIES LTD</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                India's first community-owned public limited company building thousands of factories 
                across India through shareholder participation.
              </p>
              <div className="flex flex-wrap gap-4">
  {[
    { name: 'Twitter', url: 'https://twitter.com/Ramaeraltd' },
    { name: 'Facebook', url: 'https://www.facebook.com/ramaeraindustries' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/83034449' },
    { name: 'Instagram', url: 'https://www.instagram.com/ramaeraindustries/' }
  ].map((social, index) => (
    <motion.a 
      key={social.name}
      href={social.url} 
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/5 border border-white/10"
      whileHover={{ scale: 1.1, y: -2 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      {social.name}
    </motion.a>
  ))}
</div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 golden-accent font-['Orbitron']">QUICK LINKS</h3>
              <ul className="space-y-3">
  {[
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Industries', path: '/industries' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'How it work', path: '/how-it-works' },
    { name: 'Apply', path: '/apply' },
    { name: 'Join Us', path: '/join' },
    { name: 'Contact', path: '/contact' }
  ].map((link, index) => (
    <motion.li 
      key={link.name}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link 
        to={link.path} 
        className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 block py-1"
      >
        → {link.name}
      </Link>
    </motion.li>
  ))}
</ul>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 golden-accent font-['Orbitron']">CONTACT</h3>
              <div className="text-gray-400 space-y-3">
                {/* <motion.p 
                  className="flex items-center space-x-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span 
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span>H77 Sector 63, Noida</span>
                </motion.p> */}
                <motion.p 
                  className="flex items-center space-x-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span 
                    className="w-2 h-2 bg-accent-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <span className="text-accent-400">support@ramaera.in</span>
                </motion.p>
                <motion.p 
                  className="flex items-center space-x-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span 
                    className="w-2 h-2 bg-secondary-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  <span>App Coming Soon</span>
                </motion.p>
              </div>
            </motion.div>
          </div>
          
          {/* Enhanced Footer Legal / Terms */}
          <motion.div 
            className="border-t border-white/10 mt-12 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center text-gray-400 space-y-4">
              <p className="text-lg">&copy; 2024 Ramaera Industries Ltd. All rights reserved.</p>
              <div className="text-sm space-y-2 max-w-4xl mx-auto">
                <p className="flex items-center justify-center space-x-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span>Profit is not guaranteed. All investments are subject to business risks.</span>
                </p>
                <p className="flex items-center justify-center space-x-2">
                  <span className="w-1 h-1 bg-accent-500 rounded-full"></span>
                  <span>Shares are currently unlisted. IPO will be announced publicly when ready.</span>
                </p>
                <p className="flex items-center justify-center space-x-2">
                  <span className="w-1 h-1 bg-secondary-400 rounded-full"></span>
                  <span>Shareholder participation is non-refundable once committed to a project.</span>
                </p>
              </div>
              <motion.p 
                className="text-white font-bold text-lg golden-accent"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(251, 191, 36, 0.5)',
                    '0 0 20px rgba(251, 191, 36, 0.8)',
                    '0 0 10px rgba(251, 191, 36, 0.5)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Building generational wealth through community-owned industries.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default Layout