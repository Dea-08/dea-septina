document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});


  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

 
document.getElementById("wa-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dikirim seperti biasa

    // Ambil data dari input
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telepon = document.getElementById("telepon").value;
    const gender = document.getElementById("gender").value;
    const tanggal_lahir = document.getElementById("tanggal").value;
    const poli = document.getElementById("poli").value;
    const tanggal_kunjungan = document.getElementById("tanggal_kunjungan").value;
    const keluhan = document.getElementById("keluhan").value;

    // Nomor WhatsApp tujuan (ganti dengan nomor rumah sakit atau admin)
    const nomor_wa = "6285887195694"; // tanpa "+" dan ganti 0 jadi 62

    // Buat isi pesan
    const pesan = `Halo, saya ingin daftar sebagai pasien:\n
Nama: ${nama}
Email: ${email}
Telepon: ${telepon}
Jenis Kelamin: ${gender}
Tanggal Lahir: ${tanggal_lahir}
Poli Tujuan: ${poli}
Tanggal Kunjungan: ${tanggal_kunjungan}
Keluhan: ${keluhan}`;

    // Buat URL WhatsApp
    const waUrl = `https://wa.me/${nomor_wa}?text=${encodeURIComponent(pesan)}`;

    // Arahkan ke WhatsApp
    window.open(waUrl, '_blank');
});

