function calcular() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById('resultado').textContent = "Digite dois números!";
    return;
  }

  document.getElementById('resultado').textContent = "Resultado: " + (a + b);
}
