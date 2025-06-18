//06-tuplas.ts

import { separador } from "./modulos";

/* Se usar readonly, a tupla não podera modificar (somente letitura) */
const usuario: /* readonly */ [string, number, boolean] = ["João", 12, true];
console.log(usuario[0]);
console.log(usuario[1] + " anos.");
console.log(usuario[2] ? "ativo" : "inativo");

usuario[1] = 30; // atualizando o valor da tupla (desde que não seja readonly)
console.log(usuario[1] + " anos.");

separador();

// Criando uma tupla com tipo

type Produto = [string, number];

const produtoA: Produto = ["Camiseta", 29.99];
// const produtoB:Produto = [100, "Calça"]
const produtoC: Produto = ["TV", 1000];

console.log(produtoA);
console.log(produtoC);

separador();

type Msg = [number, string];

function verificarOperacao(sucesso: boolean): Msg {
  if (sucesso) {
    return [200, "Operação realizada com sucesso!"];
  }
  return [500, "Erro inesperado no servidor"];
}

let resultado = verificarOperacao(true);
const [, mensagem] = resultado;
console.log(mensagem);
