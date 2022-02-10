//exercitando e expandindo conhecimentos sobre classes

class Cliente {
    nome;
    cpf;
}
class ContaCorrente{
    agencia;
    saldo;

    saque(valor){
        if (this.saldo >= valor){
            this.saldo -= valor
        }
    }

    deposito(valor){
        if(valor > 0){
        this.saldo += valor
        }
    }
}
const cliente1 = new Cliente()
cliente1.nome = 'Roger'
cliente1.cpf = 66677788899

const cliente2 = new Cliente()
cliente2.nome = 'Maria'
cliente2.cpf = 11122233344

const contaRoger = new ContaCorrente()
contaRoger.saldo = 0
contaRoger.agencia = 1001

contaRoger.deposito(100)
console.log(contaRoger)
contaRoger.saque(50)
console.log(contaRoger.saldo)
