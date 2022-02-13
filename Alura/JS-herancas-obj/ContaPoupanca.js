import { Conta } from "./Conta.js"

export class ContaPoupanca extends Conta{
    super(saldoInicial,cliente,agencia)

    teste(){
        super.teste()
        console('Testand o funcionamento do super, estou na conta poupanca')
    }
}