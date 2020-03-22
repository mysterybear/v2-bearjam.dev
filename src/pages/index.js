import { motion } from "framer-motion"
import React from "react"
import SEO from "../components/seo"


const IndexPage = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 3 }}
  >
    <SEO title="Home" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt excepturi officia ut inventore, quaerat ea minus repellat quidem consequuntur quis id mollitia. Distinctio aliquam quos ipsa ducimus quidem explicabo saepe.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt excepturi officia ut inventore, quaerat ea minus repellat quidem consequuntur quis id mollitia. Distinctio aliquam quos ipsa ducimus quidem explicabo saepe.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt excepturi officia ut inventore, quaerat ea minus repellat quidem consequuntur quis id mollitia. Distinctio aliquam quos ipsa ducimus quidem explicabo saepe.</p>
  </motion.section>
)

export default IndexPage
