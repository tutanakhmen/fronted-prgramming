import styles from "./Card.module.css";

function Card() {
    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img 
                        className={styles.form__image}
                        src="https://picsum.photos/536/354" 
                        alt="" 
                    />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Add Movie</h2>
                    <form action="title">
                        <div className={styles.form__group}>
                            <label htmlFor="" className={styles.form__label}>
                                Title
                            </label>
                            <input 
                            id="title"
                            className={styles.form__input}
                            type="text" 
                            name="title"
                            />
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="year" className={styles.form__label}>
                                year
                            </label>
                            <input 
                            id="year"
                            className={styles.form__input}
                            type="text" 
                            name="year"
                            />
                        </div>
                        <div>
                            <button className={styles.form__button}>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Card;