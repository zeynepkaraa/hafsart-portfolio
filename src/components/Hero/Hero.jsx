import React from "react";
import styles from "./Hero.module.css";
import coupleImage from "../../../assets/images/couple.png";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>live fashion illustration</h1>
        <p className={styles.description}>
          Get ready to spice up your events with live fashion illustrations,
          capturing the vibe of your guests' style in every stroke
        </p>
        <a href="#book" className={styles.btn}>
          Get started
        </a>
      </div>
      <img src={coupleImage} alt="couple" className={styles.heroImg} />
    </section>
  );
};

export default Hero;
