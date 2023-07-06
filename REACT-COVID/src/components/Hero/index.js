import React from "react";
import styles from "./Hero.module.css";
import covid from "../Img/ImageHero.svg";

console.log(covid);

function Hello() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h3 className={styles.hero__genre}>Monitoring Perkembangan Covid</h3>
          <p className={styles.hero__description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className={styles.hero__right}>
          <img className={styles.hero__image} src={covid} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Hello;
