let vize = document.getElementById("Vize");
let final = document.getElementById("Final");
let btnHesap = document.getElementById("hesap");

btnHesap.onclick = function () {
  let durum = "";
  let vizeNotu = Number(vize.value);
  let finalNotu = Number(final.value);
  let ortalama = vizeNotu * 0.4 + finalNotu * 0.6;
  if (ortalama >= 50 && finalNotu >= 50) {
    durum = "GEÇTİNİZ TEBRİKLER";
  } else if (ortalama >= 50 && finalNotu < 50) {
    durum = "FİNAL NOTU 50' DEN KÜÇÜK! KALDINIZ";
  } else {
    durum = "ORTALAMANIZ 50' DEN KÜÇÜK! KALDINIZ . ";
  }
  document.getElementById("Sonuc").innerHTML =
    "Ortalamanız : " + ortalama + "<BR>" + durum;
};

btnHesap.style.backgroundColor = "red";
btnHesap.style.width = "80px";
btnHesap.style.height = "40px";
