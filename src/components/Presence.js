import React from 'react'
import { motion } from 'framer-motion'

const Presence = props => (
  <motion.div
    variants={{
      enter: {
        transition: {
          staggerChildren: 0.1,
        }
      },
      exit: {
        transition: {
          staggerChildren: 0.05,
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
