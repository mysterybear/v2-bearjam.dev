import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"

const NotFoundPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 3 }}
  >
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </motion.div>
)

export default NotFoundPage
