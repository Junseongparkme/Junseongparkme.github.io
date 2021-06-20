import * as React from 'react';
import { Link } from 'gatsby';
import {
  container,
  navLinks,
  heading,
  navLinkItem,
  navLinkText,
} from '../../public/style.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
      </ul>
      <h1 className={heading}>{pageTitle}</h1>
      <p>{children}</p>
    </main>
  );
};

export default Layout;
