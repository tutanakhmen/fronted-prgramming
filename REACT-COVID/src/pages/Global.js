import GlobalPassiens from "../components/Global/Pasiens";
import styles from "../components/Indonesia/Pasiens/Pasiens.module.css";

const Global = () => {
  return (
    <div>
      <GlobalPassiens />
      <div className={styles.container}>
        <section className={styles.pasiens}></section>
      </div>
    </div>
  );
};

export default Global;
