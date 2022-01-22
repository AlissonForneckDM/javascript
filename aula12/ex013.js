var agora = new Date()
var diaSem = agora.getDay()

//console.log(diaSem)

switch (diaSem){
    case 0:
        console.log('Domingãaao')
        break
    case 1:
        console.log('Segundao pae')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sextou')
        break
    case 6:
        console.log('Começou o find')
        break
        default:
            console.log('[ERRO] Dia invalido')
        break
}