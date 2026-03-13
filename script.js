// ── Date() untuk menampilkan tanggal saat ini ──────────────────
Date()

// ── Mendapatkan tanggal hari ini ───────────────────────────────
let tanggal = new Date();
document.getElementById("tanggal").innerHTML = tanggal.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

// ── Helper: tampilkan dan tutup modal ─────────────────────────
function showModal(icon, title, msg) {
    document.getElementById("modalIcon").textContent = icon;
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalMsg").textContent = msg;
    document.getElementById("modalOverlay").classList.add("active");
}

function closeModal() {
    document.getElementById("modalOverlay").classList.remove("active");
}

// Tutup modal kalau klik di luar box
document.getElementById("modalOverlay").addEventListener("click", function(e) {
    if (e.target === this) closeModal();
});

// ── untuk menampilkan alert tampil() ──────────────────────────
function tampil() {
    alert("tampil button");
}

// ── Untuk menampilkan alert show() ────────────────────────────
function show() {
    alert("welcome to my home page");
}

// ── Untuk menampilkan tanggal lewat button ────────────────────
function showDate() {
    let now = new Date();
    let formatted = now.toLocaleString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    alert("Tanggal sekarang: " + formatted);
}

// ── Klik nama pemain ──────────────────────────────────────────
function alertPemain(nama) {
    alert(ronaldhinho + " adalah salah satu pemain terbaik di dunia!");
}

// ── Klik nama klub ────────────────────────────────────────────
function alertKlub(nama) {
    alert(barcelona + " adalah salah satu klub terbesar di dunia sepak bola!");
}
