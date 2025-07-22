import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

interface PageTransitionProps {
  children: React.ReactNode
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation()

  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
      filter: 'blur(10px)'
    },
    in: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: 'blur(0px)'
    },
    out: { 
      opacity: 0, 
      y: -50,
      scale: 1.05,
      filter: 'blur(10px)'
    }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.6
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition