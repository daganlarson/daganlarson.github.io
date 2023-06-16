"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../../../local/DarkMode/DarkModeToggle";

const links = [
  {
    id: 1,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 2,
    title: "Articles",
    url: "/articles",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },

  {
    id: 5,
    title: "Dashboard",
    url: "/dashboard",
  },
];

function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Dagan Larson
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
        <button
          onClick={() => {
            console.log("logged out");
          }}
          className={styles.logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
