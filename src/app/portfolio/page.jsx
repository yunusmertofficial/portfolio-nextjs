import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <Image
            src="/illustration.png"
            fill={true}
            alt=""
            className={styles.img}
          />
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <Image
            src="/websites.jpg"
            fill={true}
            alt=""
            className={styles.img}
          />
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <Image src="/apps.jpg" fill={true} alt="" className={styles.img} />
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
