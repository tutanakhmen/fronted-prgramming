import styles from "./GlobalCard.module.css";
import Card from "../Card";
import data from "../../../utils/constants/indonesia";

function GlobalCard() {
  const globalcard = data.indonesia;
  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <h2 className={styles.card__title}>Global Situation</h2>
        <h3 className={styles.card__subtitle}>Data Covid Berdasarkan Global</h3>
      </section>
      <div className={styles.card__container}>
        {globalcard.map(function (card, key) {
          return <Card card={card} key={key} />;
        })}
        ;
      </div>
    </div>
  );
}

export default GlobalCard;
