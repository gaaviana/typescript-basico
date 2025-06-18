import { separador } from "./modulos";

// 04-combinando-tipos.ts
export {};

//União de tipos literais
let direcao: "esquerda" | "direita";
direcao = "esquerda";
console.log(direcao);

separador();

direcao = "direita";
console.log(direcao);

separador();

// Criando um novo tipo combinando outros tipos existentes
type NumeroOuTexto = number | string;
let exemploA: NumeroOuTexto = 2112;
let exemploB: NumeroOuTexto = "senac";
console.log("Exemplo A: " + exemploA);
console.log("Exemplo B: " + exemploB);

separador();

type Status = "ativo" | "inativo" | "pendente";
let situacaoAluno1: Status = "ativo";
let situacaoAluno2: Status = "inativo";
let situacaoAluno3: Status = "pendente";

separador();

type DiasDaSemana =
  | "Domingo"
  | "Segunda-feira"
  | "Terça-feira"
  | "Quarta-feira";

const diaAtual: DiasDaSemana = "Quarta-feira";

separador();

/* Interseção de Tipos */
type Pessoa = { nome: string; idade: number };
type Funcionario = { salario: number };

const programador: Pessoa & Funcionario = {
  nome: "Lucas",
  idade: 18,
  salario: 5000,
};

console.log(programador);

separador();

type Colaborador = Pessoa & Funcionario;

const otroProgramdor: Colaborador = {
  nome: "Gabriel",
  idade: 18,
  salario: 4500,
};
