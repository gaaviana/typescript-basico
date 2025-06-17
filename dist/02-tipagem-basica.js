"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
// Exemplos de tipos básicos
let idade = 30;
let ativo = true;
let nome = "Gabriel";
console.log(`${nome} tem ${idade} anos.`);
// Nova atribuição
idade = 31;
console.log(`${nome} agora tem ${idade} anos.`);
console.log(`Status: ${ativo ? "Ativo" : "Inativo"}`);
(0, modulos_1.separador)();
/* Sobre o tipo any (qualquer) */
let qualquerCoisa = "tem que ta vendo com o cara la";
qualquerCoisa = 10;
qualquerCoisa = true;
console.log(`Qualquer coisa: ${qualquerCoisa}`);
(0, modulos_1.separador)();
/*  Sobre tipagem implícita ou por inferência */
let exemplo01 = "Isso é uma string";
let exemplo02 = 10;
let exemplo03;
// Sem valor mas ja definida como string
let exemplo04;
