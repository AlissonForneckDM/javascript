import { Conta } from "./Conta.js"

export class ContaPoupanca extends Conta{
    constructor(cliente,agencia){
        super(0,cliente,agencia)
    }

    teste(){
        super.teste()
        console('Testand o funcionamento do super, estou na conta poupanca')
    }
}