/**
 * Membuat fungsi menghitung umur.
 * Dibuat menggunakan cara Function Declaration.
 *
 * @param {integer} bod (tanggal lahir)
 * @returns {integer} age (umur)
 */
function getAge(bod) {
  const year = 2023;
  const age = 2023 - bod;

  return age;
}

// Memanggil fungsi getAge
console.log(getAge(2003));