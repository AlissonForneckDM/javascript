function verificar(){
    var tabu = document.querySelector('input#num')
    var tab = document.querySelector('select#tabuada')
    var num = Number(tabu.value)
    if(num == 0){
        window.alert('Digite um numero valido')
    }else{
        tab.innerHTML=''
        for (var c=1 ; c <= 10 ; c++){
            var resul = c * num
            var item = document.createElement('option')
            item.text =`${num} X ${c} = ${resul}`
            tab.value =`tab${c}`
            tab.appendChild(item)
            //conteudo.innerHTML += `${c} x ${num} = ${resul}<br>`
            //conteudo.innerHTML += `${resul}`
        }
    }
}