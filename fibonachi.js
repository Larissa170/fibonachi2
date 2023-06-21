function fibonachi(numero) {
  if (numero < 0) {
    throw "Número não pode ser menor que zero";
  } else {
    let nAnterior = 0;
    let nAtual = 1;
    let nproximo = 0;
    let sfibonachi = "";

    sfibonachi += nAnterior + ", " + nAtual;
    while (nAtual < numero) {
      nproximo = nAnterior + nAtual;
      sfibonachi += ", " + nproximo;
      nAnterior = nAtual;
      nAtual = nproximo;
    }
    return sfibonachi;
  }
}
module.exports = fibonachi;
