import styles from "./Card.module.css";

function Card(props) {
  const { card } = props;

  return (
    <div className={styles.card__coloumn}>
      <div className={styles.cardcovid__card}>
        <h3 className={styles.card__title}>{card.status}</h3>
        <h2 className={styles.Confimred}>{card.total}</h2>
      </div>
    </div>
  );
}

export default Card;
