function adicionar(){
    var n = document.querySelector('input#inicio')
    var mos = document.querySelector('select#dados')
    var valor = Number(n.value)
    if(valor == 0){
        window.alert('digite um valor valido')
    }else{
        
        var item = document.createElement('option')
        item.text = `Valor ${valor} adicionado`
        mos.appendChild(item)
        //conteudo.innerHTML += `${array}`
    }
}
var n = document.querySelector('input#inicio')
var valor = Number(n.value)
var array = []
array.push(valor)
function verificar(){
    
    conteudo.innerHTML += `${array}`
    //conteudo.innerHTML += `teste`
}

//var array = []