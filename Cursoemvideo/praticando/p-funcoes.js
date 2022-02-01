//aqui vou brincar com funcoes
/*
function tabuada(x){
    for (var c = 1; c <=10 ; c++){
        console.log(`${c} x ${x} = ${c*x}`)
    }
}
tabuada(8)
*/
function testeOI(){
    console.log('Oie')
}
//testeOI()

//function expression
var testeFuncao = function(funcao){
    console.log('passei pela primeira funcao')
    testeOI()
}
//testeFuncao()
//arrow function
const funcaoArrow = () => {
    console.log('Sou uma funcao arrow')
}
funcaoArrow()