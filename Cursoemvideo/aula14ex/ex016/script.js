function verificar(){
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    res = document.querySelector('div#conteudo')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    //conteudo.innerHTML = ` ${i} ${f} ${p}`
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Digite valores validos')
        res.innerHTML = 'Não foi possivel contar'
        //conteudo.innerHTML += `${c}`
    }else{
        if(p <= 0){
            window.alert('Passo invalido, vou considerar o PASSO 1')
            p = 1
        }
        if (i < f){
        res.innerHTML = 'Contando...<br>'
        for (var c=i; c<=f; c+=p){
            conteudo.innerHTML += ` ${c} \u{1F449}`
        }
        }else{
            for (var c = i; c >=f; c -= p){
                conteudo.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
