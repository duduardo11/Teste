const visor = document.getElementById("visor");
const botoes = document.querySelectorAll("button");
let expressao = "";

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const valor = botao.textContent;

    if (valor === "C") {
      expressao = "";
      visor.value = "";
    } else if (valor === "=") {
      try {
        expressao = eval(expressao).toString();
        visor.value = expressao;
      } catch {
        visor.value = "Erro";
        expressao = "";
      }
    } else {
      expressao += valor;
      visor.value = expressao;
    }
  });
});
