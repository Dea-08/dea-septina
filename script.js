function kirimWhatsApp() {
        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const telepon = document.getElementById("telepon").value;
        const gender = document.getElementById("gender").value;
        const tanggal_lahir = document.getElementById("tanggal_lahir").value;
        const poli = document.getElementById("poli").value;
        const tanggal_kunjungan = document.getElementById("tanggal_kunjungan").value;
        const keluhan = document.getElementById("keluhan").value;

        const nomor_wa = "6285887195694";

      if (!nama || !email || !telepon || !gender || !tanggal_lahir || !poli || !tanggal_kunjungan || !keluhan) {
      alert("Mohon lengkapi semua data sebelum mengirim.");
      return;
    }

        const pesan = `Halo, saya ingin daftar sebagai pasien:\n
Nama: ${nama}
Email: ${email}
Telepon: ${telepon}
Jenis Kelamin: ${gender}
Tanggal Lahir: ${tanggal_lahir}
Poli Tujuan: ${poli}
Tanggal Kunjungan: ${tanggal_kunjungan}
Keluhan: ${keluhan}`;

        const waUrl = `https://wa.me/${nomor_wa}?text=${encodeURIComponent(pesan)}`;
        window.open(waUrl, '_blank');
    }


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }
});
    

