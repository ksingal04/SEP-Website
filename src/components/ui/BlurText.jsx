import React from 'react'
import { motion } from 'framer-motion'

const BlurText = ({ text, className = '', delay = 0 }) => {
  return (
    <motion.span
      className={className}
      initial={{ 
        opacity: 0, 
        filter: 'blur(10px)',
        y: 20
      }}
      animate={{ 
        opacity: 1, 
        filter: 'blur(0px)',
        y: 0
      }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {text}
    </motion.span>
  )
}

export default BlurText
