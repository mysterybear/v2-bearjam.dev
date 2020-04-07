import React from "react"
import styles from './styles/footer.module.css'
import Nav from "./Nav"
import SvgBearjamAvatar from "./SvgBearjamAvatar"
import SvgBearjamTitle from "./SvgBearjamTitle"
import cx from 'classnames'
import { useContext } from "react"
import { MediaContext } from "../contexts"
import IconGitHub from "./icons/IconGitHub"
import IconTwitter from "./icons/IconTwitter"
import IconLinkedIn from "./icons/IconLinkedIn"

const Footer = () => {
  const screen = useContext(MediaContext)
  return (
    // <footer className="bg-blue-900 flex flex-col items-center">
    <footer className={cx(styles.root, "py-4 flex flex-col items-center")}>
      <Nav
        className="flex flex-col text-center sm:flex-row"
        linkProps={{
          className: "mb-4 text-gray-100 sm:mb-0 sm:mx-4"
        }}
      />
      <hr className="border-gray-500 w-40" />
      <SvgBearjamAvatar className="w-8 mt-4" />
      <SvgBearjamTitle className="w-24 mt-4" />
      <div className="flex">
        <IconGitHub className="w-4 text-white fill-current"/>
        <IconTwitter className="w-4 text-white fill-current"/>
        <IconLinkedIn className="w-4 text-white fill-current"/>
      </div>
    </footer>
  )
}
export default Footer
