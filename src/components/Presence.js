import React from 'react'
import { motion } from 'framer-motion'

const Presence = props => (
  <motion.div
    variants={{
      enter: {
        // opacity: 1,
        transition: {
          staggerChildren: 0.1,
          // delayChildren: 0.1
        }
      },
      exit: {
        // opacity: 0,
        transition: {
          staggerChildren: 0.05,
          // delayChildren: 1,
          staggerDirection: -1
        }
      }
    }}
    initial="exit"
    animate="enter"
    exit="exit"
    {...props}
  />
)

export default Presence
