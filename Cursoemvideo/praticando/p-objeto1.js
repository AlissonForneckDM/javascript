var pessoa = {
    nome: ['Alisson', 'Forneck'],
    idade: 24,
    sexo: 'masculino',
    interesses: ['musica', 'desenvolvimento'],
    bio(){
        console.log(this.nome[0] + ' ' +this.nome[1] +' é do sexo '+this.sexo +' tem '+ this.idade + ' anos de idade. E gosta de '+
        this.interesses[0] + ' e ' + this.interesses[1])
    },saudacao: function(){
       alert('Ola, meu nome é '+this.nome[0] + ' ' + this.nome[1] + ' muito prazer!')
    }
}
console.log(pessoa.bio())
