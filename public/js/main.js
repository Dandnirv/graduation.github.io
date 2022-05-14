const btnName = document.getElementById("#btn-name");

function showAlert() {
  swal("Hai Najwa Raudlatul Jannah", {
    buttons: {
      graduation: "Graduation",
      utbk: "For You",
    },
  }).then((value) => {
    switch (value) {
      case "utbk":
        swal(
          "H-4 UTBK",
          "Semangat UTBKnya naa, hari rabu nanti final dari apa yang udah diusahain dari beberapa bulan lalu.\n\n Semoga banyak yang keluar sesuai apa yang dipelajari. Tetep optimis lulus OK!\n\n  Jangan lupa berdo'a yaa"
        );
        break;

      case "graduation":
        swal(
          "Selamat hari kelulusan Naa!",
          "Semoga apa yang udah dipersiapin buat kedepannya bisa berjalan dengan lancar, aamiin.\n\nJangan lupa buat bilang terimakasih sama mereka yang selalu ada di masa sekolah: Kantin, Brainly, dan Wikipedia. haha just kidding Naa, maksudnya temen-temen, guru dan orang-orang sekolah."
        );
    }
  });
}
