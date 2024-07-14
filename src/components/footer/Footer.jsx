import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>copyright &copy; Ashutosh Kumar Roy. All right Reserved</div>
      <div className={styles.images}>
        <Image
          src="/logos.png"
          width={15}
          height={15}
          className={styles.image}
          alt="x"
        />
        <Image
          src="/instagram.png"
          width={15}
          height={15}
          className={styles.image}
          alt="f"
        />
        <Image
          src="/meta.png"
          width={15}
          height={15}
          className={styles.image}
          alt="i"
        />
        <Image
          src="/youtube.png"
          width={15}
          height={15}
          className={styles.image}
          alt="y"
        />
      </div>
    </footer>
  );
};

export default Footer;
