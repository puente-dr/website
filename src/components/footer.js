import React from "react"
import {
   Link,
//   useStaticQuery,
//   graphql
} from "gatsby"
// import Img from "gatsby-image"

// Style/Icon Imports
import { Icon } from 'react-icons-kit'
import { facebook } from 'react-icons-kit/fa/facebook'
import { instagram } from 'react-icons-kit/fa/instagram'
import { youtubePlay } from 'react-icons-kit/fa/youtubePlay'
import { linkedin } from 'react-icons-kit/fa/linkedin'
import footerStyles from './footer.module.scss'

const Footer = () => (
  <footer className={footerStyles.footer}>
    <div className={footerStyles.footerMain}>
      <div className={footerStyles.section}>
        <h1>
          <Link className={footerStyles.title} to="/">Puente</Link>
        </h1>
        <p>
          Puente is a 501(c)(3) nonprofit corporation fueled by forward-thinking, passionate individuals. Founded in 2018, and based in Constanza, Dominican Republic, with offices in Indiana.
        </p>
      </div>
      <nav>
        <ul className={footerStyles.navList}>
          <li>
            <Link className={footerStyles.navItem} to="/about">About Us</Link>
          </li>
          <li>
            <Link className={footerStyles.navItem} to="/technology">Our Technology</Link>
          </li>
          <li>
            <Link className={footerStyles.navItem} to="/projects">Past Projects</Link>
          </li>
          <li>
            <Link className={footerStyles.navItem} to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className={footerStyles.navList}>
          <li>
            <Link className={footerStyles.navItem} to="/community">Community Empowerment</Link>
          </li>
          <li>
            <Link className={footerStyles.navItem} to="/volunteers">Volunteers</Link>
          </li>
          <li>
            <Link className={footerStyles.navItem} to="/reports">Annual Report</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h2>Address:</h2>
        <p>51181 Whitewater Ln.</p>
        <p>South Bend, IN</p>
        <p className={footerStyles.lastItem}>46628</p>
        <h2>Phone:</h2>
        <p className={footerStyles.lastItem}>
          1-574-302-7756
        </p>
        <div className={footerStyles.icons}>
          <a href="https://www.facebook.com/puentedr/"><Icon size={25} icon={facebook} /></a>
          <a href="https://www.instagram.com/puentedr/"><Icon size={25} icon={instagram} /></a>
          <a href="https://www.youtube.com/channel/UCDcD_DYPeLt4NZdVwKX8gDw"><Icon size={25} icon={youtubePlay} /></a>
          <a href="https://www.linkedin.com/company/18499313/admin/"><Icon size={25} icon={linkedin} /></a>
        </div>
      </div>
    </div>
    <div className={footerStyles.tos}>
      <Link className={footerStyles.tosText} to="/service">Terms of Service</Link>
      <p>|</p>
      <Link className={footerStyles.tosText} to="/acknowledgements">Acknowledgement of Use</Link>
      <p>|</p>
      <Link className={footerStyles.tosText} to="/privacy">Privacy Policy</Link>
    </div>
  </footer>
)
export default Footer