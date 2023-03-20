/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const user = [
  {
    name : "Fauzan Rahman Fadhillah",
    age : 21,
    major : "Teknik Informatika"
  },
  {
    name : "Lucas Modric",
    age : 24,
    major : "Bisnis Digital"
  },
  {
    name : "Benzema",
    age : 32,
    major : "Sistem Informasi"
  },
  {
    name : "Bani",
    age : 25,
    major : "Teknik Informatika"
  },
  {
    name : "Rizhul",
    age : 22,
    major : "Sistem Informasi"
  },
]

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
  for (const label of users){
    console.log(label);
  }
}

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
const store = (user) => {
  users.push(user);
}

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index, user) => {
  users[index] = user;
}

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
function destroy(index) {
  users.splice(index, 1);
}

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Ridwan",
    age: 20,
    major: "Bisnis Digital",
  };
  store(newUser);
  all();

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);
  all();

  /**
   * Test function destroy
   */
  console.log("# Delete User: Bani");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
