import Pasien from "../Pasien";
import styles from "./Pasiens.module.css";
import { useEffect, useState } from "react";
import { fetchData } from "../../../utils/constants/fetch";

function Pasiens() {
  const [dataIndonesia, setDataIndonesia] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetchData(
        "https://covid-fe-2023.vercel.app/api/indonesia.json"
      );

      setDataIndonesia(res.indonesia);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.pasiens}>
        <h2 className={styles.card__title}>Indonesia</h2>
        <h3 className={styles.card__subtitle}>
          Data Covid Berdasarkan Indonesia
        </h3>
      </section>
      <div className={styles.pasien__container}>
        {dataIndonesia.map((pasien) => (
          <Pasien key={pasien.status} pasien={pasien} />
        ))}
      </div>
    </div>
  );
}

export default Pasiens;
