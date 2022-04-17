// 1. Get Anggota True
// query getAnggotaTrue {
//     anggota(where: {fk_anggota: {status: {_eq: true}}}) {
//       id
//       nama
//     }
//   }

// 2. Insert Keterangan
// mutation insertKeterangan($objects: [keterangan_insert_input!] = {}) {
//     insert_keterangan(objects: $objects) {
//       returning {
//         id
//         id_anggota
//         nilai
//         pelajaran
//         status
//       }
//     }
//   }

// Variables
// {
//     "objects": [
//       {
//        "id_anggota": 3,
//         "pelajaran": "Sistem informasi",
//         "nilai": 90,
//         "status": true
//       },
//       {
//        "id_anggota": 3,
//         "pelajaran": "React",
//         "nilai": 55,
//         "status": false
//       }
//     ]
//   }

// 3. Update data false to true
// mutation updateNilaiToTrue {
//     update_keterangan(where: {status: {_eq: false}}, _set: {status: true}) {
//       returning {
//         id
//         id_anggota
//         nilai
//         pelajaran
//         status
//       }
//     }
//   }
