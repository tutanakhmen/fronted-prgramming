import styles from "./Pasien.module.css";

function Pasien(props) {
  const { pasien, keyIdx } = props;

  return (
    <tr className={styles.pasien}>
      <td>{keyIdx + 1}</td>
      <td className={styles.pasien__status}>{pasien.provinsi}</td>
      <td className={styles.pasien__kasus}>{pasien.positif}</td>
      <td className={styles.pasien__sembuh}>{pasien.sembuh}</td>
      <td className={styles.pasien__dirawat}>{pasien.dirawat}</td>
      <td className={styles.pasien__meninggal}>{pasien.meninggal}</td>
    </tr>
  );
} 

export default Pasien;
