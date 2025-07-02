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

 
function kirimWhatsApp() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var telepon = document.getElementById("telepon").value;
    var gender = document.getElementById("gender").value;
    var tanggalLahir = document.getElementById("tanggal").value;
    var poli = document.getElementById("poli").value;
    var tanggalKunjungan = document.getElementById("tanggal_kunjungan").value;
    var keluhan = document.getElementById("keluhan").value;

    var pesan = `Halo Admin, saya ingin daftar:\n\nNama: ${nama}\nEmail: ${email}\nTelepon: ${telepon}\nJenis Kelamin: ${gender}\nTanggal Lahir: ${tanggalLahir}\nPoli: ${poli}\nTanggal Kunjungan: ${tanggalKunjungan}\nKeluhan: ${keluhan}`;

    // Nomor WhatsApp tujuan (ganti dengan nomor admin)
    var nomorTujuan = "6285887195694"; // format: 62 + nomor tanpa 0

    var url = `https://wa.me/${nomorTujuan}?text=${encodeURIComponent(pesan)}`;

    window.open(url, '_blank');
}
