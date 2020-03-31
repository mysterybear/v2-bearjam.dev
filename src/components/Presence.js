import React from 'react'
import { motion } from 'framer-motion'

const Presence = props => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
    {...props}
  />
)

export default Presence
