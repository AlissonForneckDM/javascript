let n = document.querySelector('input#inicio')
let mos = document.querySelector('select#dados')
let lista = document.querySelector('select#dados')
let res = document.querySelector('div#conteudo')
let valores = []
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
       valores.push(Number(n.value))
       let item = document.createElement('option')
       item.text = `Valor ${n.value} adicionado`
       lista.appendChild(item)
       res.innerHTML =''
   }else{
       window.alert('Valor invalido ou já encontrado na lista')
   }n.value = ''
   n.focus()
}
function verificar(){
    if(valores.length == 0){
        window.alert('Adicione algum numero para continuarmos')
    }else{
        let tot = valores.length
        //valores.sort()
        //let menor = valores[0]
        //let maior =  tot-1
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            
            if(valores[pos] < menor)
                menor = valores[pos]
            
        }
        media = soma / tot
        res.innerHTML = ""
        res.innerHTML +=`<p>Ao todo, temos ${tot} numeros cadastrados. </p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>A soma dos valores informados foi ${soma}</p>`
        res.innerHTML += `<p>A media dos valores informados foi ${media}</p>`
    }
}