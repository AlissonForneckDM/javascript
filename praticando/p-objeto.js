let pessoa = {
    nome: ['Alisson', 'Forneck'] ,
    idade: 24,
    interesse: ['desenvolvimento web','exercicio fisico'],
     saudacao(){
        console.log('Oi meu nome é '+this.nome[0] +' '+this.nome[1] +
        ' tenho '+this.idade+' gosto de '+this.interesse[0] + ' e ' + this.interesse[1])
    }
}
console.log(pessoa.saudacao())