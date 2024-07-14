import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/hacker-contact.jpg"
            width={500}
            height={450}
            alt="contact"
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            className={styles.input}
          />
          <textarea
            className={styles.textarea}
            placeholder="message"
            cols="30"
            rows="10"
          />
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
