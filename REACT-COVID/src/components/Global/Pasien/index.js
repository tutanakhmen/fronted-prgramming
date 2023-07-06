import styles from "./Pasien.module.css";

function Pasien(props) {
  const { pasien } = props;

  return (
    <div className={styles.card__coloumn}>
      <div className={styles.cardcovid__card}>
        <h3 className={styles.card__title}>{pasien.status}</h3>
        <h2 className={styles.Confimred}>{pasien.total}</h2>
      </div>
    </div>
  );
}

export default Pasien;
