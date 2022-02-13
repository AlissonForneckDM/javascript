import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Alisson", 85898295020)
const contaAlisson = new ContaCorrente(100,cliente1, 102)

const poupancaAlisson = new ContaPoupanca(200,cliente1,102)
console.log(contaAlisson)
console.log(poupancaAlisson);

