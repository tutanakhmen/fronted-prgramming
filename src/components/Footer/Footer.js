/**
 * Membuat component Footer.
 * Component Footer menampilkan footer website.
 */
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <h2 className={styles.footer__title}>Movie App</h2>
      <p className={styles.footer__author}>Created by @tutanakhmen</p>
    </footer>
  );
}

export default Footer;
