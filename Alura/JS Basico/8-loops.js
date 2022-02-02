console.log('Alura ensinando repetições')
var listaDeDestinos = [
    'São Paulo',
    'Porto Alegre',
    'Rio de Janeiro',
    'Curitiba',
]

let idadeCoprador = 15
let estaAcompanhada = false
let temPassagemComprada = false
let destinoExiste = false
const destino = 'São Paulo'
const podeComprar = idadeCoprador >= 18 || estaAcompanhada == true

/*while(contador <= 3){
    if(destino == listaDeDestinos[contador]){
        //console.log('destino existe')
        listaDeDestinos.splice[contador,1]
        destinoExiste = true
        break
    }contador++
}
*/
for (let i = 0; i <=3 ; i++){
    if(destino == listaDeDestinos[i]){
        destinoExiste = true
        break
    }
}
if(podeComprar && destinoExiste){
    console.log('Boa viagem')
}else{
    console.log('Desculpa, na proxima tentativa espero atender voce melhor')
}
