"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useSelectedLayoutSegment } from "next/navigation";

const Navbar = () => {
  const activeSegment = useSelectedLayoutSegment();

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
      segment: null,
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
      segment: "portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
      segment: "blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
      segment: "about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
      segment: "contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
      segment: "dashboard",
    },
  ];

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          src={Logo}
          width={350}
          className={styles.icon}
          alt="Yunus Emre Mert Logo"
        />
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={`${styles.link} ${
              activeSegment === link.segment ? styles.active_link : ""
            }`}
          >
            {link.title}
          </Link>
        ))}
        <button className={styles.logout} onClick={() => console.log("asda")}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
