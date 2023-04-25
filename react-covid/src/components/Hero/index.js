import styles from "./Hero.module.css";
import image from "./../../asset/image/ImageHero.svg";
function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h3 className={styles.hero__genre}>Monitoring Perkembangan Covid</h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          <button className={styles.hero__button}>Vaccin</button>
        </div>
        <div className="hero__right">
          <img className={styles.hero__image} src={image} alt="placeholder" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
