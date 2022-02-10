//exercitando e expandindo conhecimentos sobre classes

class Cliente {
    nome;
    cpf;
}
class ContaCorrente{
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
const cliente1 = new Cliente()
cliente1.nome = 'Roger'
cliente1.cpf = 66677788899

const cliente2 = new Cliente()
cliente2.nome = 'Maria'
cliente2.cpf = 11122233344

const contaRoger = new ContaCorrente()
contaRoger.agencia = 1001

contaRoger.deposito(100)
const valorSacado = contaRoger.saque(50)
console.log(contaRoger)
console.log(valorSacado)
