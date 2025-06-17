"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function saudacoes(nome) {
    return `Olá ${nome}`;
}
console.log(saudacoes("Gabi"));
function saudacaoCompleta(nome, anoLetivo = 2025, curso) {
    if (curso) {
        return `Olá ${nome}, você está estudando ${curso}. Ano letivo: ${anoLetivo}`;
    }
    return `Olá ${nome}, tem que ta vendo com o cara la... Ano: ${anoLetivo}`;
}
console.log(saudacaoCompleta("gabzin"));
console.log(saudacaoCompleta("gabzin", 2021));
