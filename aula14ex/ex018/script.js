
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#idade')
    var anonasc = Number(fano.value)
    var soma = ano - anonasc
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var sexo = document.getElementsByName('radsex')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked){
            genero = 'Homem'
            if(soma < 10){
                img.setAttribute('src' , 'imagens/crianca-menino.jpg')
            }else if (soma < 21){
                img.setAttribute('src', 'imagens/homem-j.jpg')
            }else if (soma < 50){
                img.setAttribute('src', 'imagens/homem-a.jpg')
            }else{
                img.setAttribute('src', 'imagens/homem-i.jpg')
            }
        }else{
            genero = 'Mulher'
            if(soma < 10){
                img.setAttribute('src', 'imagens/crianca-menina.jpg')
            }else if (soma < 21){
                img.setAttribute('src', 'imagens/mulher-j.jpg')
            }else if (soma < 50){
                img.setAttribute('src', 'imagens/mulher-a.jpg')
            }else{
                img.setAttribute('src', 'imagens/mulher-i.jpg')
            }
        }
        conteudo.style.textAlign = 'center'
        conteudo.innerHTML = `Voce é ${genero} com idade ${soma}<br>`
        conteudo.appendChild(img)
        
    }
}