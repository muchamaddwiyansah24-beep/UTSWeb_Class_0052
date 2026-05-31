// Dark Mode

document.getElementById("darkModeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Validasi Form

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;

  let email = document.getElementById("email").value;

  let pesan = document.getElementById("pesan").value;

  if (nama === "" || email === "" || pesan === "") {
    alert("Semua data harus diisi!");
    return;
  }

  alert("Pesan berhasil dikirim!");

  this.reset();
});
