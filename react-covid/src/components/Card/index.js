import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "./Alert/index";
import styles from "./Card.module.css";
import image from "./../../asset/image/Image.svg";

function Card(props) {
  const { movies, setMovies } = props;

  const [formData, setFormData] = useState({
    provinsi: "",
    status: "",
    jumlah: "",
  });

  const [isProvinsiError, setIsProvinsiError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isJumlahError, setIsJumlahError] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    if (provinsi === "") {
      setIsProvinsiError(true);
      return false;
    } else if (status === "") {
      setIsStatusError(true);
      setIsProvinsiError(false);
      return false;
    } else if (jumlah === "") {
      setIsJumlahError(true);
      setIsStatusError(false);
      return false;
    } else {
      setIsProvinsiError(false);
      setIsStatusError(false);
      return true;
    }
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      provinsi: provinsi,
      status: status,
      jumlah: jumlah,
    };

    setMovies([...movies, movie]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    validate() && addMovie();
  }

  const { provinsi, status, jumlah } = formData;

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img className={styles.form__image} src={image} alt="" />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Form Covid</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="provinsi" className={styles.form__label}>
                Provinsi
              </label>
              <input
                id="provinsi"
                className={styles.form__input}
                type="text"
                name="provinsi"
                value={provinsi}
                onChange={handleChange}
              />
              {isProvinsiError && <Alert>Data Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="status" className={styles.form__label}>
                Status
              </label>
              <input
                id="status"
                className={styles.form__input}
                type="text"
                name="status"
                value={status}
                onChange={handleChange}
              />
              {isStatusError && <Alert>Data Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="jumlah" className={styles.form__label}>
                Jumlah
              </label>
              <input
                onChange={handleChange}
                id="jumlah"
                className={styles.form__input}
                name="jumlah"
                type="text"
                value={jumlah}
              />
              {isJumlahError && <Alert>Data Wajib Diisi</Alert>}
            </div>
            <div>
              <button className={styles.form__button}>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Card;
