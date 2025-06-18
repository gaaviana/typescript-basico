"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
const bandas = ["Metallica", "Slayer", "Iron Maiden"];
bandas.push("Nightwish");
console.log(bandas);
const artistas = ["Jon Oliva", "Stings", "David Gilmour"];
artistas.push("Neil Peart");
console.log(artistas);
(0, modulos_1.separador)();
const pessoas = ["Tiago", 28, "gabirel", 19];
(0, modulos_1.separador)();
const linguagens = [
    ["JS", "TS"],
    ["HTML", "CSS", "Bootstrap"],
];
console.log(linguagens[0][0]);
console.log(linguagens[1][0]);
(0, modulos_1.separador)();
const numeros = [10, 20, 30, 40, 10];
console.log(numeros.reduce((ac, numeros) => ac + numeros, 0));
