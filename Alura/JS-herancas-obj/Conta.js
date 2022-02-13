export class Conta{
    constructor(saldoInicial,cliente,agencia){
        this.saldoInicial = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

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

    saque(valor){
        let taxa = 1
        let valorSacado = valor * taxa
        if(this._saldo >= valor){
            this._saldo -= valorSacado
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