console.log('Alura ensinando condicionais')
const listaDeDestinos = [
    'São Paulo',
    'Porto Alegre',
    'Curitiba',
]
/*
let idadeCoprador = 15
let estaAcompanhada = true
if (idadeCoprador >= 18) {
    console.log('Voce esta autorizado a comprar passagens para os seguintes destinos')
    console.log(listaDeDestinos)
} else if (estaAcompanhada) {
    console.log('esta acompanahdo, pode comprar')
} else {
    console.log('Voce não esta autorizado')
}*/
let idadeCoprador = 15
let estaAcompanhada = true
let temPassagemComprada = true
if (temPassagemComprada &&  idadeCoprador >= 18 || estaAcompanhada) {
    console.log('Voce comprou um destino')
    console.log(listaDeDestinos)//removendo itens
}else {
    console.log('Voce não esta autorizado')
    console.log(listaDeDestinos)
}

