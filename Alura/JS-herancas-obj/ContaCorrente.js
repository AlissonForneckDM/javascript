import { Cliente } from "./Cliente.js"

export class ContaCorrente {
    agencia
    static numeroDeContas = 0
    
    _cliente
    _saldo= 0

    set cliente(nomeCliente){
        if(nomeCliente instanceof(Cliente)){
            this._cliente = nomeCliente
        }
    }
    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }

    constructor (cliente, agencia){
        this.cliente = cliente
        this.agencia = agencia
    }

    saque(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
        }return valor
    }

    deposito(valor){
        if(valor <= 0 ) return
            this._saldo = valor
    }

    transferir(valor, conta){
        const valorTransferido = this.saque(valor)
        conta.deposito(valorTransferido)
    }
}