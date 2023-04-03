function convertendoParaRomanos() {
    console.log("Sim")
	const input = parseInt(document.getElementById("input-numero").value);
	const Numerosromanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	const n = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	let indice = n.indexOf(input);
    let resultado = Numerosromanos[indice];

    let paraResultado = document.getElementById("resultado");
    paraResultado.textContent = resultado;
}

