let n = document.querySelector('input#inicio')
let mos = document.querySelector('select#dados')
let lista = document.querySelector('select#dados')
let res = document.querySelector('div#conteudo')
let valores = []
let item = document.createElement('option')
var num = Number(n.value)
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
   if (isNumero(n.value) && !inLista(n.value, valores)){
       item.text = `Adicionado o valor ${num}`
       lista.appendChild(item)
   }else{
       window.alert('Valor invalido ou já encontrado na lista')
   }
}

//var array = []