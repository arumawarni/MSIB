const nilaiIPA = 71;
const nilaiMatematika = 90;
const nilaiIPS = 80;
const nilaiBahasa = 60;

const lulusKedokteran =
  nilaiIPA > 70 && nilaiMatematika > 70 && nilaiIPS > 70 && nilaiBahasa > 70;

console.log("lulusKedokteran =", lulusKedokteran);

const lulusInfomatika =
  nilaiIPA > 70 || nilaiIPS > 70 || (nilaiBahasa > 70 && nilaiMatematika > 80);

console.log("lulusInformatika =", lulusInfomatika);

const lulusSekolah =
  (nilaiIPA + nilaiIPS + nilaiBahasa + nilaiMatematika) / 4 > 70;

console.log("lulusSekoloah =", lulusSekolah);

const lulusKeperawatan = !lulusKedokteran && lulusSekolah;

console.log("lulusKeperawatan =", lulusKeperawatan);
console.log(
  (lulusKeperawatan && lulusSekolah) || (lulusSekolah && lulusKedokteran)
);
