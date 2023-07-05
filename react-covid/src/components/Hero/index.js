import styles from "./Hero.module.css";
import HeroPicture from "./../../asset/img/ImageHero.svg";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h3 className={styles.hero__genre}>Monitoring Perkembangan Covid</h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            aut est pariatur quod, maxime odio placeat quaerat molestiae
            mollitia ullam inventore numquam expedita eveniet voluptate
            repellendus ad. Soluta, harum nobis.
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src={HeroPicture}
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
