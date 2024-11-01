let devamEt;

do {
  // Kullanıcıdan sayı al
  let sayi = prompt("Bir pozitif tam sayı girin:");

  // Girişin geçerli bir pozitif tam sayı olup olmadığını kontrol et
  if (isNaN(sayi) || sayi < 0 || sayi === "") {
    alert("Lütfen geçerli bir pozitif tam sayı girin.");
  } else {
    // Sayıyı tam sayıya dönüştür ve faktöriyel hesapla
    sayi = parseInt(sayi);
    let faktoriyel = 1;

    for (let i = 1; i <= sayi; i++) {
      faktoriyel *= i;
    }

    alert(`${sayi}! = ${faktoriyel}`);
  }

  // Başka bir sayı denemek isteyip istemediğini sor
  devamEt = confirm("Başka bir sayı denemek ister misiniz?");
} while (devamEt);
