let tamanhoFonte = 100;
let contrasteAtivo = false;
let leituraAtiva = false;

function aumentarFonte() {
  tamanhoFonte += 10;
  document.body.style.fontSize = tamanhoFonte + "%";
}

function diminuirFonte() {
  if (tamanhoFonte > 50) {
    tamanhoFonte -= 10;
    document.body.style.fontSize = tamanhoFonte + "%";
  }
}

function alternarContraste() {
  contrasteAtivo = !contrasteAtivo;
  document.body.classList.toggle("contraste", contrasteAtivo);
}

function alternarLeitura() {
  leituraAtiva = !leituraAtiva;
  document.body.classList.toggle("modo-leitura", leituraAtiva);
}

function resetar() {
  tamanhoFonte = 100;
  document.body.style.fontSize = "100%";
  contrasteAtivo = false;
  leituraAtiva = false;
  document.body.classList.remove("contraste", "modo-leitura");
}
