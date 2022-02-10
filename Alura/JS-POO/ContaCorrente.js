export class ContaCorrente{
    agencia;
    // para deixar um metodo privado não oficial #saldo
    // https://github.com/tc39/proposal-class-fields#private-fields
    // por convenção da sociedade atualmente usamos o _saldo
    _saldo = 0;

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
}