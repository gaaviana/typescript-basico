// Exercicio01.ts

/* Crie uma função chamada "exibirCor" que aceite:
nome da pessoa (obrigatorio)
corpreferida da pessoa (opcinonal)

Atençao: o parâmetro cor deve ser do tipo cor e aceitar somente 5 cores

Chame a função pelo menos 2x
*/

type Cores = "Azul" | "Amarelo" | "Verde" | "Vermelho" | "Roxo";

function exibirCor(nome: string, cor?: Cores) {
  if (cor) {
    return `A cor preferida de ${nome} é ${cor}`;
  }
  return `A cor preferida de ${nome} tem que ta vendo com o cara la`;
}

console.log(exibirCor("gabi", "Amarelo"));
console.log(exibirCor("viana"));
