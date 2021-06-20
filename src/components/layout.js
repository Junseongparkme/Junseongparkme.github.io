import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import {
  container,
  navLinks,
  heading,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './style.module.css';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <main className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <p className={siteTitle}>{data.site.siteMetadata.title}</p>
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
        <li className={navLinkItem}>
          <Link to="/blog" className={navLinkText}>
            Blog
          </Link>
        </li>
      </ul>
      <h1 className={heading}>{pageTitle}</h1>
      <p>{children}</p>
    </main>
  );
};

export default Layout;
