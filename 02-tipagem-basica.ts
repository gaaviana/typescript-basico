import { separador } from "./modulos";

// 02-tapagem-basica.ts
export {};

// Exemplos de tipos básicos
let idade: number = 30;
let ativo: boolean = true;
let nome: string = "Gabriel";

console.log(`${nome} tem ${idade} anos.`);

// Nova atribuição
idade = 31;
console.log(`${nome} agora tem ${idade} anos.`);
console.log(`Status: ${ativo ? "Ativo" : "Inativo"}`);

separador();

/* Sobre o tipo any (qualquer) */
let qualquerCoisa: any = "tem que ta vendo com o cara la";
qualquerCoisa = 10;
qualquerCoisa = true;

console.log(`Qualquer coisa: ${qualquerCoisa}`);

separador();

/*  Sobre tipagem implícita ou por inferência */
let exemplo01 = "Isso é uma string";
let exemplo02 = 10;
let exemplo03;

// Sem valor mas ja definida como string
let exemplo04: string;
