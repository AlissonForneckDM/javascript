function verificar(){
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    conteudo.innerHTML = ` ${i} ${f} ${p}`
    if(i >= f || p > f ){
        window.alert('Digite valores validos')
    }else if (f==0 || p ==0){
        //for(var c=i; c <= f ; c+p){
            //conteudo.innerHTML += `${c}`
            conteudo.innerHTML ='to aqui 1'
        }else{
            conteudo.innerHTML ='to aqui'
        }
    }
}