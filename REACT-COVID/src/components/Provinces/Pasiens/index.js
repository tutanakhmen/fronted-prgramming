import Pasien from "../Pasien";
import styles from "./Pasiens.module.css";

function Pasiens({ pasiens }) {
  return (
    <div className={styles.container}>
      <section className={styles.pasiens}>
        <h2 className={styles.pasien__judul}>
          Data Covid Berdasarkan Provinsi
        </h2>
        <div className={styles.pasien__container}>
          <table>
            <tr>
              <th>No</th>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>

            {pasiens?.map((pasien, index) => (
              <Pasien key={pasien.id} pasien={pasien} keyIdx={index} />
            ))}
          </table>
        </div>
      </section>
    </div>
  );
}

export default Pasiens;
