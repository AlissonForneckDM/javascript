export class ContaPoupanca{
    constructor(saldoInicial,cliente,agencia){
        this.saldoInicial = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
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