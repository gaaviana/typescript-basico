import { separador } from "./modulos";

// 05- arrays.ts
export {};

// Sintaxe 1
const bandas: Array<string> = ["Metallica", "Slayer", "Iron Maiden"];
// bandas.push(10) // erro
bandas.push("Nightwish");
console.log(bandas);

// Sintaxe 2
const artistas: string[] = ["Jon Oliva", "Stings", "David Gilmour"];
artistas.push("Neil Peart");
console.log(artistas);

separador();

const pessoas: (string | number)[] = ["Tiago", 28, "gabirel", 19];

separador();

const linguagens: string[][] = [
  ["JS", "TS"],
  ["HTML", "CSS", "Bootstrap"],
];

console.log(linguagens[0][0]);
console.log(linguagens[1][0]);

separador();

/* Mini-exercício
Crie um array de números e calcule a soma de todos os elementos.
*/

const numeros: number[] = [10, 20, 30, 40, 10];
console.log(numeros.reduce((ac, numero) => ac + numero, 0));
