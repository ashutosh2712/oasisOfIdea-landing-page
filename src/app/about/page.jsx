import Image from "next/image";
import React from "react";
import styles from "./about.module.css";
import Button from "@/components/button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/team-tech.jpg"
          width={1200}
          height={400}
          alt="team"
          className={styles.wallpaper}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>
            Online platform for sharing, discovering and discussing ideas
          </h1>
          <h2 className={styles.imgDesc}>
            We don’t just build websites, we build websites that SELLS
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            We’re Oasis and we absolutely love working on projects – whether
            they’re websites, games, social initiatives, research projects, or
            startups. When we’re working on something, we find ourselves coming
            up with lots of great ideas about other valuable projects that one
            could do. But even though these ideas are amazing, they often
            require skills/resources that we don’t have and don’t align very
            well with our career goals. So, they just lie on the scratchpad. Yet
            later, when we’re looking for ideas, we’re unable to find anything
            good. The internet is full of so much other stuff that finding
            unique yet useful project ideas is a nightmare. Finding one that
            matches our specific interests is even more difficult.
            <br />
            <br />
            Enter Oasis of Ideas. It’s an online platform that, We hope, will be
            the best place on the internet to share and discover project ideas.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            - Dedicated Idea Pages: Each idea gets its own page, allowing for
            individual discussion and evaluation based on its own merit, rather
            than being grouped with a dozen other ideas.
            <br />
            <br />- Organized Ideas: Ideas are well organized by category,
            expected time to execute, and progress so far. This makes them
            really easy to search through. <br />
            <br />
            - Dynamic List: The rankings of ideas change as people interact with
            them (upvote, comment, etc.). If an adequate implementation of an
            idea is found, it is closed, thereby keeping everything fresh and
            unique.
            <br />
            <br />
            - Collaborator Connection: You can find collaborators! We have a
            Slack channel for each idea, so you can meet others who are
            interested in executing that idea.
            <br />
            <br />
          </p>
          <Button text="Contact" url="contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
