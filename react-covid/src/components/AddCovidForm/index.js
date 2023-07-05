// import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert";
import Button from "../Ui/Button";
import data from "../../utils/constants/provinces";
import styles from "./AddCovidForm.module.css";
import FormImage from "./../../asset/img/Imagecovid.png";

// Menangkap props
function AddCovidForm(props) {
  const provinces = data.provinces;

  const listStatus = ["Positif", "Sembuh", "Dirawat", "Meninggal"];

  const { setProvinsi } = props;

  const [kota, setKota] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");

  const [isJumlahError, setIsJumlahError] = useState(false);

  function handleKota(e) {
    setKota(e.target.value);
  }

  function handleStatus(e) {
    setStatus(e.target.value);
  }

  function handleJumlah(e) {
    setJumlah(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // Mencegah prilaku default

    if (jumlah === "") {
      setIsJumlahError(true);
    } else {
      const index = provinces.findIndex((item) => item.kota === kota);
      const foundKota = provinces.find((item) => item.kota === kota);

      let currentValueKasus = parseInt(foundKota.kasus);
      let currentValueSembuh = parseInt(foundKota.sembuh);
      let currentValueDirawat = parseInt(foundKota.dirawat);
      let currentValueMeninggal = parseInt(foundKota.meninggal);

      let valueNowKasus = status === "Positif" ? parseInt(jumlah) : parseInt(0);

      let valueNowSembuh = status === "Sembuh" ? parseInt(jumlah) : parseInt(0);

      let valueNowDirawat =
        status === "Dirawat" ? parseInt(jumlah) : parseInt(0);

      let valueNowMeninggal =
        status === "Meninggal" ? parseInt(jumlah) : parseInt(0);

      const provinsi = {
        kota: kota,
        kasus: currentValueKasus + valueNowKasus,
        sembuh: currentValueSembuh + valueNowSembuh,
        dirawat: currentValueDirawat + valueNowDirawat,
        meninggal: currentValueMeninggal + valueNowMeninggal,
      };

      provinces[index] = provinsi;

      setProvinsi([...provinces]);

      setIsJumlahError(false);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img className={styles.form__image} src={FormImage} alt="" />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Form Covid</h2>
          <form onSubmit={handleSubmit}>
            {/* ------ Provinsi ------ */}
            <div className={styles.form__group}>
              <label className={styles.form__label}>Provinsi</label>
              <select
                className={styles.form__select}
                value={kota}
                onChange={handleKota}
                name="kota"
                id="kota"
              >
                <option value="Select Provinsi">Select Provinsi</option>
                {provinces.map((province, key) => {
                  return (
                    <option value={province.kota} key={key}>
                      {province.kota}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* ----- End Provinsi -----*/}

            {/* ----- Status -----*/}
            <div className={styles.form__group}>
              <label className={styles.form__label}>Status</label>
              <select
                id="status"
                className={styles.form__select}
                name="status"
                value={status}
                onChange={handleStatus}
              >
                <option value="Select Status">Select Status</option>
                {listStatus.map((statusCovid, key) => {
                  return (
                    <option value={statusCovid} key={key}>
                      {statusCovid}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* ----- End Status -----*/}

            {/* ----- Jumlah -----*/}
            <div className={styles.form__group}>
              <label htmlFor="jumlah" className={styles.form__label}>
                Jumlah
              </label>
              <input
                onChange={handleJumlah}
                id="jumlah"
                className={styles.form__input}
                name="jumlah"
                type="number"
                value={jumlah}
              />
              {isJumlahError && <Alert>Jumlah Wajib Diisi</Alert>}
            </div>
            {/* ----- End Jumlah -----*/}

            {/* ----- Button -----*/}
            <div>
              <Button full>Submit</Button>
            </div>
            {/* ----- End Button -----*/}
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddCovidForm;
