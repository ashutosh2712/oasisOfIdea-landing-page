import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          The art challenges the technology, and the technology inspires the
          art.
        </h1>
        <p className={styles.desc}>
          The technology you use impresses no one. The experience you create
          with it is everything.
        </p>
        <Button url="https://www.oasis-of-ideas.com/" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image
          src="/brainstrom.jpg"
          width={600}
          height={600}
          className={styles.hero}
        />
      </div>
    </div>
  );
}
