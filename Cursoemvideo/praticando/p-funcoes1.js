//aqui estou vendo sobre parametros

function funcao(x){
    console.log('Olaa ' + x)
}
//funcao('testando passagem de parametro')
function funcao1(x,y){
    if (x == y){
        console.log(`Os valores ${x} e ${y} são iguais`)
    }else{
        console.log(`Os valores ${x} e ${y} não são iguais`)
    }
}
funcao1(1,1)