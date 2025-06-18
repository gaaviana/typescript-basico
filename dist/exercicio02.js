"use strict";
function exibir({ nome, preco, garantia }) {
    console.log(`---------------------`);
    console.log(`nome: ${nome}`);
    console.log(`Preço: ${preco}`);
    console.log(`Garantia: ${garantia}`);
    console.log(`---------------------`);
}
const p1 = {
    nome: "TV Samsung",
    preco: 1999.99,
    garantia: 1,
};
const p2 = {
    nome: "Geladeira",
    preco: 3999.99,
    garantia: 2,
};
exibir(p1);
exibir(p2);
