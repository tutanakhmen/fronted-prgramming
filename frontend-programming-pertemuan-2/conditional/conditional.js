const results = 95;

// if: membuat satu kondisi
if (results > 90) {
  console.log(`Nilai anda: ${nilai}, Grade: A`);
}
// else if: membuat 2 kondisi atau lebih
else if (results > 80) {
  console.log(`Nilai Anda: ${nilai}, Garade: B`);
} else if (results > 70) {
  console.log(`Nilai Anda: ${nilai}, Grade: C`);
}
// else: membuat kondisi terakhir
else {
  console.log(`Nilai Anda: ${nilai}, Grade: D`);
}
