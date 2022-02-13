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
        return this._saque(valor, taxa)
    }
    _saque(valor, taxa){
        let valorSacado = valor * taxa
        if(this._saldo >= valor){
            this._saldo -= valorSacado
            return valorSacado
        }return 0
    }

    deposito(valor){
        if(valor <= 0 ) return
            this._saldo = valor
    }

    transferir(valor, conta){
        const valorTransferido = this.saque(valor)
        conta.deposito(valorTransferido)
    }
    teste(){
        console('Testand o funcionamento do super, estou na conta')
    }
}