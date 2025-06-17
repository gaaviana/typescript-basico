"use strict";
function exibirCor(nome, cor) {
    if (cor) {
        return `A cor preferida de ${nome} é ${cor}`;
    }
    return `A cor preferida de ${nome} tem que ta vendo com o cara la`;
}
console.log(exibirCor("gabi", "Amarelo"));
console.log(exibirCor("viana"));
