// script.js
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
AOS.init();

  const dataJadwal = {
    "Penyakit Dalam": [
      { nama: "dr. Andi Saputra, SpPD", hari: "Senin & Rabu", jam: "08:00 - 12:00" },
      { nama: "dr. Rina Lestari, SpPD", hari: "Jumat", jam: "09:00 - 13:00" },
      { nama: "dr. Tiara Fahriza, SpPD", hari: "Senin - Minggu", jam: "12:00 - 18:00" }
    ],
    "Kebidanan dan Kandungan": [
      { nama: "dr. Dewi Astuti, SpOG", hari: "Selasa & Kamis", jam: "10:00 - 14:00" },
      { nama: "dr. Iwan Gunawan, SpOG", hari: "Sabtu", jam: "08:00 - 12:00" },
      { nama: "dr. Niko Saputra, SpOG", hari: "Senin - Jumat", jam: "12:00 - 17:00" }
    ],
    "Jantung dan Pembuluh Darah": [
      { nama: "dr. Budi Prakoso, SpJP", hari: "Senin & Kamis", jam: "08:00 - 11:00" },
      { nama: "dr. Yislam Jaidi, SpJP", hari: "Selasa - Jumat", jam: "12:00 - 19:00" }
    ],
    "Anak": [
      { nama: "dr. Sri Wahyuni, SpA", hari: "Senin - Kamis", jam: "08:00 - 12:00" },
      { nama: "dr. Leny Ambarwati, SpA", hari: "Selasa & Jumat", jam: "09:00 - 13:00" },
      { nama: "dr. Miza Afrizal, SpA", hari: "Rabu - Sabtu", jam: "10:00 - 19:00" }
    ]
  };


    function tampilkanJadwal(spesialis) {
      const box = document.getElementById("jadwalBox");
      const jadwal = dataJadwal[spesialis];

      if (!jadwal) {
        box.innerHTML = `<p>Belum ada jadwal untuk spesialis <strong>${spesialis}</strong></p>`;
        return;
      }

      let html = `<h3>Jadwal Dokter - ${spesialis}</h3><ul>`;
      jadwal.forEach(dokter => {
        html += `<li><strong>${dokter.nama}</strong><br>Hari: ${dokter.hari}<br>Jam: ${dokter.jam}</li>`;
      });
      html += `</ul>`;
      box.innerHTML = html;
    }
  