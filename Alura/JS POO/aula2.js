//exercitando e expandindo conhecimentos sobre classes

class Cliente {
    nome;
    cpf;
}
class ContaCorrente{
    agencia;
    saldo;
}
const cliente1 = new Cliente()
cliente1.nome = 'Roger'
cliente1.cpf = 66677788899

const cliente2 = new Cliente()
cliente2.nome = 'Maria'
cliente2.cpf = 11122233344

const contaRicardo = new ContaCorrente()
contaRicardo.saldo = 0
contaRicardo.agencia = 1001

console.log(contaRicardo.saldo)
contaRicardo.saldo = 100
console.log(contaRicardo.saldo)
let valorSacado = 50
if(valorSacado > contaRicardo.saldo){
    console.log('Voce não pode continuar com essa operação')
}else{
    contaRicardo.saldo -= valorSacado
}console.log(contaRicardo.saldo)