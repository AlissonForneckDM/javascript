import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Alisson", 85898295020)
const contaAlisson = new ContaCorrente(cliente1, 102)
console.log(contaAlisson);