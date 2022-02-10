//exercitando e expandindo conhecimentos sobre classes
import { Cliente } from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
const cliente1 = new Cliente()
cliente1.nome = 'Roger'
cliente1.cpf = 66677788899

const contaRoger = new ContaCorrente()
contaRoger.agencia = 1001
contaRoger.cliente = cliente1

contaRoger.deposito(100)
const valorSacado = contaRoger.saque(50)
console.log(contaRoger)
console.log(valorSacado)

const cliente2 = new Cliente()
cliente2.nome = 'Maria'
cliente2.cpf = 11122233344

const contaMaria = new ContaCorrente();
contaMaria.agencia = 102
contaMaria.cliente = cliente2
console.log(contaMaria)
