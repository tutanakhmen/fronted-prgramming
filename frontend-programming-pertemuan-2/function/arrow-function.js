/**
 * Membuat fungsi menghitung umur.
 * Dibuat menggunakan cara Arrow Function.
 *
 * @param {integer} bod (tanggal lahir)
 * @returns {integer} age (umur)
 */
const getAge = (bod) => {
  const year = 2023;
  const age = year - bod;
  const ageNow = `umur sekarang ${age}`;

  return ageNow;
};

// Memanggil fungsi getAge
console.log(getAge(2003));