function lulusKedokteran(nilaiIPA, nilaiIPS, nilaiMatematika, nilaiBahasa) {
  const lulus =
    nilaiIPA > 70 && nilaiIPS > 70 && nilaiMatematika > 70 && nilaiBahasa > 70;

  return lulus;
}

const nilaiIPAJohn = 90,
  nilaiIPSJohn = 50,
  nilaiMatematikaJohn = 99,
  nilaiBahasaJohn = 88;

const nilaiIPAJane = 90,
  nilaiIPSJane = 90,
  nilaiMatematikaJane = 90,
  nilaiBahasaJane = 90;

const kelulusanKedokteranJohn = lulusKedokteran(
  nilaiIPAJohn,
  nilaiIPSJohn,
  nilaiMatematikaJane,
  nilaiBahasaJane
);
const kelulusanKedokteranJane = lulusKedokteran(
  nilaiIPAJane,
  nilaiIPSJane,
  nilaiMatematikaJane,
  nilaiBahasaJane
);

console.log("john lulu?", kelulusanKedokteranJohn);
console.log("jane lulus?", kelulusanKedokteranJane);
