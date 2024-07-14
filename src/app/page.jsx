import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Engineering is the closest thing to magic that exists in the world.
        </h1>
        <p className={styles.desc}>
          Once a new technology rolls over you, if you’re not part of the
          steamroller, you’re part of the road.
        </p>
        <Button url="#" text="See Your Works" />
      </div>
      <div className={styles.item}>
        <Image
          src="/oasis.jpg"
          width={400}
          height={400}
          className={styles.hero}
        />
      </div>
    </div>
  );
}
