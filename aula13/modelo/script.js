
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
        window.alert(`${soma} ${sexo}`)
    }
}