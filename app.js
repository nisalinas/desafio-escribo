function somatorioDivisiveis3ou5(numero) {

  if (!Number.isInteger(numero) || numero <= 0) {
    console.error("Por favor, forneça um número inteiro positivo válido.");
    return;
  }

  let somatorio = 0;

  // Calcula o somatório
  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      somatorio += i;
    }
  }

  return somatorio;
}

// Exemplo de uso:
const numeroTeste = 10;
const resultado = somatorioDivisiveis3ou5(numeroTeste);

if (resultado !== undefined) {
  console.log(`O somatório dos valores divisíveis por 3 ou 5 abaixo de ${numeroTeste} é: ${resultado}`);
}
