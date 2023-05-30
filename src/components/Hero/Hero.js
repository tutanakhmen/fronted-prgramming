import styles from "./Hero.module.css"

function Hero(){
    return(
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Superman</h2>
                    <h3 className={styles.hero__genre}>
                        Genre: Thriller, Action, Drama
                    </h3>
                    <p className={styles.hero__description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur commodi sapiente natus itaque nihil accusantium voluptates ut eius dicta, necessitatibus sed quidem dolores, vero labore animi molestias cupiditate totam architecto?
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image} src="https://picsum.photos/530/354" alt="placeholder" />
                </div>
            </section>
        </div>
    )
}

export default Hero;