import data from "../../utils/constants/provinces";
import styles from "./Provinces.module.css";

function Provinsi() {
  const provinsi = data.provinces;
  let nomor = 0;
  return (
    <div className={styles.container}>
      <section className={styles.table}>
        <h2 className={styles.table__title}>Situation By Provinces</h2>
        <h3 className={styles.table__subtitle}>
          Data Covid Berdasarkan Provinsi
        </h3>
        <div className={styles.provinsi__container}>
          <table className={styles.table__coloumn}>
            <thead>
              <tr>
                <th className={styles.table__head}>No</th>
                <th className={styles.table__head}>Provinsi</th>
                <th className={styles.table__head}>Positif</th>
                <th className={styles.table__head}>Sembuh</th>
                <th className={styles.table__head}>Dirawat</th>
                <th className={styles.table__head}>Meninggal</th>
              </tr>
              {provinsi.map((value, key) => {
                nomor += 1;
                return (
                  <tr key={key}>
                    <td className={styles.table__data}>{nomor}</td>
                    <td className={styles.table__data}>{value.kota}</td>
                    <td className={styles.table__data}>{value.kasus}</td>
                    <td className={styles.table__data}>{value.sembuh}</td>
                    <td className={styles.table__data}>{value.dirawat}</td>
                    <td className={styles.table__data}>{value.meninggal}</td>
                  </tr>
                );
              })}
              ;
            </thead>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Provinsi;
