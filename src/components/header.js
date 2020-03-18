import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/header.module.css'
import SvgLogo from './SvgLogo';
import { useStaticQuery } from 'gatsby';

const Logo = ({ ...props }) => (
  <div {...props}>
    <Link to="/">
      <SvgLogo />
    </Link>
  </div>
)

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ's" },
  { href: "/contact", label: "Contact" },
];

const Nav = ({ ...props }) => {
  return (
    <nav {...props}>
      {links.map(({ href, label }) => (
        <Link key={href} to={href}>{label}</Link>
      ))}
    </nav>
  )
}

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <header className={styles.header}>
      <div>
          <Logo className={styles.logo} />
          <h1>{site.siteMetadata.title}</h1>
      </div>
      <Nav className={styles.smNav} />
      <div>
        <input type="checkbox" name="xMenu" id="xMenu" className={styles.checkbox} />
        <label htmlFor="xMenu">
          <svg viewBox="0 0 20 20" className={styles.xMenuSvg}>
            <path d="M3,6 L17,6" />
            <path d="M3,10 L17,10" />
            <path d="M3,14 L17,14" />
          </svg>
        </label>
        <Nav className={styles.xsNav} />
      </div>
    </header>
  );
}

export default Header;
