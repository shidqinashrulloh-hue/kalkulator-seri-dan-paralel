function hitungResistorSeri() {
  const r1 = parseFloat(document.getElementById("r1").value);
  const r2 = parseFloat(document.getElementById("r2").value);
  const hasil = document.getElementById("hasil-resistor-seri");

  if (isNaN(r1) || isNaN(r2)) {
    hasil.innerHTML = "Masukkan nilai resistor!";
    return;
  }

  const total = r1 + r2;
  hasil.innerHTML = `Rumus: Rtotal = R1 + R2 <br> Hasil: ${total} Ω`;
}

function hitungResistorParalel() {
  const rp1 = parseFloat(document.getElementById("rp1").value);
  const rp2 = parseFloat(document.getElementById("rp2").value);
  const hasil = document.getElementById("hasil-resistor-paralel");

  if (isNaN(rp1) || isNaN(rp2)) {
    hasil.innerHTML = "Masukkan nilai resistor!";
    return;
  }

  const total = 1 / ((1 / rp1) + (1 / rp2));
  hasil.innerHTML = `Rumus: 1/Rtotal = 1/R1 + 1/R2 <br> Hasil: ${total.toFixed(2)} Ω`;
}

function hitungKapasitorParalel() {
  const c1 = parseFloat(document.getElementById("c1").value);
  const c2 = parseFloat(document.getElementById("c2").value);
  const hasil = document.getElementById("hasil-kapasitor-paralel");

  if (isNaN(c1) || isNaN(c2)) {
    hasil.innerHTML = "Masukkan nilai kapasitor!";
    return;
  }

  const total = c1 + c2;
  hasil.innerHTML = `Rumus: Ctotal = C1 + C2 <br> Hasil: ${total} μF`;
}

function hitungKapasitorSeri() {
  const cs1 = parseFloat(document.getElementById("cs1").value);
  const cs2 = parseFloat(document.getElementById("cs2").value);
  const hasil = document.getElementById("hasil-kapasitor-seri");

  if (isNaN(cs1) || isNaN(cs2)) {
    hasil.innerHTML = "Masukkan nilai kapasitor!";
    return;
  }

  const total = 1 / ((1 / cs1) + (1 / cs2));
  hasil.innerHTML = `Rumus: 1/Ctotal = 1/C1 + 1/C2 <br> Hasil: ${total.toFixed(2)} μF`;
}