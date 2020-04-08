import cx from 'classnames'
import { motion } from 'framer-motion'
import React from "react"
import IconGitHub from "./icons/IconGitHub"
import IconLinkedIn from "./icons/IconLinkedIn"
import IconTwitter from "./icons/IconTwitter"
import Link from './Link'
import links from "./links"
import styles from './styles/footer.module.css'
import SvgBearjamAvatar from "./SvgBearjamAvatar"
import SvgBearjamTitle from "./SvgBearjamTitle"

const socStyles = "w-5 text-white fill-current mx-2"

const Footer = () => {
  return (
    // <footer className="bg-blue-900 flex flex-col items-center">
    <footer className={cx(styles.root, "py-10 flex flex-col items-center sm:relative sm:pt-12 sm:pb-4")}>
      <motion.nav
        className="flex flex-col text-center sm:flex-row"
      >
        {links.map(({ href, label }) => (
          <Link
            className="mb-4 text-gray-100 sm:mb-0 sm:mx-8 lg:mx-12 sm:mt-8 sm:mb-3"
            key={href}
            to={href}
          >
            {label}
          </Link>
        ))}
      </motion.nav>
      <hr className="border-gray-500 w-40 sm:w-full sm:max-w-2xl lg:max-w-4xl sm:my-3" />
      <div className="flex flex-col items-center sm:absolute sm:top-0 sm:mt-3">
        <SvgBearjamAvatar className="w-12 mt-4 sm:w-10" />
        <SvgBearjamTitle className="w-32 mt-4 sm:w-16" />
      </div>
      <div className="flex mt-4 sm:mt-0 sm:mb-3 sm:mt-3">
        <IconGitHub className={socStyles} />
        <IconTwitter className={socStyles} />
        <IconLinkedIn className={socStyles} />
      </div>
    </footer>
  )
}
export default Footer
