import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Covid ID</h1>
          <h4>developed by @tutanakhmen</h4>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>Global</li>
            <li className={styles.navbar__item}>Indonesia</li>
            <li className={styles.navbar__item}>Provinsi</li>
            <li className={styles.navbar__item}>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
