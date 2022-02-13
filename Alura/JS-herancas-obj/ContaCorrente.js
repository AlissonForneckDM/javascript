import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta{
    static numeroDeContas = 0
    constructor(cliente,agencia){
        super(saldoInicial,cliente,agencia)
        ContaCorrente.numeroDeContas +=1
    }
    saque(valor){
        let taxa = 1.1
        return super._saque(valor,taxa)
    }
}