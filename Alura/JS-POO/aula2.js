//exercitando e expandindo conhecimentos sobre classes
import { Cliente } from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente('Roger',66677788899)

const contaRoger = new ContaCorrente(1001, cliente1)

contaRoger.deposito(500)

const cliente2 = new Cliente('Maria', 11122233344)

const contaMaria = new ContaCorrente(102, cliente2);
console.log(contaRoger)
//contaMaria.cliente = new Cliente()--------forma diferente de instanciar uma classe dentro de uma variavel de classe
//contaMaria.cliente.nome= "Alice"
//contaMaria.cliente.cpf = 11122233344

