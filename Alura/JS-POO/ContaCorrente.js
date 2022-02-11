import { Cliente } from "./Cliente.js";
// para deixar um metodo privado não oficial #saldo
// https://github.com/tc39/proposal-class-fields#private-fields
// por convenção da sociedade atualmente usamos o 
    
export class ContaCorrente{
    static numeroDeContas = 0
    agencia;
    _cliente;

    set cliente(nomeCliente){
        if(nomeCliente instanceof(Cliente)){
            this._cliente = nomeCliente
        }
    }

    get cliente(){
        return this._cliente
    }

    _saldo = 0;

    get saldo(){
        return this._saldo
    }

    constructor(cliente, agencia){
        this.cliente = cliente
        this.agencia = agencia
        ContaCorrente.numeroDeContas ++
    }

    saque(valor){
        if (this._saldo >= valor){
            this._saldo -= valor
            return valor
        }
    }

    deposito(valor){
        if(valor <= 0) return;
        this._saldo += valor
    }

    transferir(valor, conta){
        const valorTransferido = this.saque(valor)
        conta.deposito(valorTransferido)
    }
}