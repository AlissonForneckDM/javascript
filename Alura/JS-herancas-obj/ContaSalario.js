import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0,cliente,100)
    }
    saque(valor){
        let taxa = 1.01
        return super._saque(valor,taxa)
    }
}