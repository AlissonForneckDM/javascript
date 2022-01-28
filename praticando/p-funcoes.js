//aqui vou brincar com funcoes

var testeFuncao = function(){
    console.log('passei pela primeira funcao')
}
//testeFuncao()

//agora vou testar um for dentro de uma funcao
function tabuada(x){
    for (var c = 1; c <=10 ; c++){
        console.log(`${c} x ${x} = ${c*x}`)
    }
}
tabuada(8)
