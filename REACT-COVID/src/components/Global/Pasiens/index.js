import Pasien from "../Pasien";
import styles from "./Pasiens.module.css";
import { useEffect, useState } from "react";
import { fetchData } from "../../../utils/constants/fetch";

function Pasiens() {
  const [dataGlobal, setDataGlobal] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetchData(
        "https://covid-fe-2023.vercel.app/api/global.json"
      );

      setDataGlobal(res.global);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.pasiens}>
        <h2 className={styles.card__title}>Global Situation</h2>
        <h3 className={styles.card__subtitle}>Data Covid Berdasarkan Global</h3>
      </section>
      <div className={styles.pasien__container}>
        {dataGlobal.map((pasien) => (
          <Pasien key={pasien.status} pasien={pasien} />
        ))}
      </div>
    </div>
  );
}

export default Pasiens;
