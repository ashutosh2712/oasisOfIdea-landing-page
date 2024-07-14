import Link from "next/link";
import React from "react";
import DarkModeToggle from "../darkmodetoggle/DarkModeToggle";
import styles from "./navbar.module.css";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },

  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Oasis Of Idea
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link href={link.url} key={link.id} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}>SignIn</button>
      </div>
    </div>
  );
};

export default Navbar;
