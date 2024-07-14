"use client";

import React, { useContext } from "react";
import styles from "./DarkModeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>
        <Image src="/moon.png" alt="moon" width={13} height={13} />
      </div>
      <div className={styles.icon}>
        <Image src="/sun.png" alt="moon" width={15} height={15} />
      </div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
