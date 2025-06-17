// 03-funcoes.ts
export {};

function saudacoes(nome: string) {
  return `Olá ${nome}`;
}

console.log(saudacoes("Gabi"));

function saudacaoCompleta(
  nome: string,
  anoLetivo: number = 2025,
  curso?: string
) {
  if (curso) {
    return `Olá ${nome}, você está estudando ${curso}. Ano letivo: ${anoLetivo}`;
  }
  return `Olá ${nome}, tem que ta vendo com o cara la... Ano: ${anoLetivo}`;
}

console.log(saudacaoCompleta("gabzin"));
console.log(saudacaoCompleta("gabzin", 2021));
