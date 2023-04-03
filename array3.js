const numerosAb = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const nRomanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

function converterParaRomano(numero) {
  let resultado = '';
  for (let i = 0; i < numerosAb.length; i++) {
    while (numerosAb[i] <= numero) {
      resultado += nRomanos[i];
      numero -= numerosAb[i];
    }
  }
  return resultado;
}

document.write(converterParaRomano(1234)); // MCCXXXIV
document.write(converterParaRomano(2023)); // MMXXIII
