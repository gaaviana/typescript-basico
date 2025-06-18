// exercicio02.ts

/* 
1) Crie uma interface para reprsentar um produto com as propriedades nome, preço e garantia.

2) Cria uma função que receba o objeto baseado na interface Produto e que mostre nome, preço e garantia. obs.: o oj=bjeto deve ser desestruturado como parametros individuais.

3) Use a função pelo menos 2x passando produtos diferentes
*/

interface Produto {
  nome: string;
  preco: number;
  garantia: number;
}

function exibir({ nome, preco, garantia }: Produto) {
  console.log(`nome: ${nome}`);
  console.log(`Preço: ${preco}`);
  console.log(`Garantia: ${garantia}`);
  console.log(`---------------------`);
}
const p1: Produto = {
  nome: "TV Samsung",
  preco: 1999.99,
  garantia: 1,
};

const p2: Produto = {
  nome: "Geladeira",
  preco: 3999.99,
  garantia: 2,
};

exibir(p1);
