//brincando com vetores
const listaDeDestinos = new Array (
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
 )

 console.log(listaDeDestinos)
 listaDeDestinos.push('Porto Alegre')
 console.log(listaDeDestinos)

 //mostrando apenas um indice
 console.log(listaDeDestinos[0],listaDeDestinos[3])

 //para retirar um indice 
 listaDeDestinos.splice(1,1)
 console.log(listaDeDestinos)