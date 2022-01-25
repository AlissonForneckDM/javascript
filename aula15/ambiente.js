let num = [5, 8, 2, 9, 3]//6 , 7
//formas de adicionar valore ao vetor
num[5]=6
num.push(7)
num.sort() //para reordenar o vetor
console.log(`O primeiro valor do vetor é ${num[0]}`) 

console.log('Tamanho do vetor '+num.length) //para mostrar o tamanho

console.log(num)
let pos =num.indexOf(8)
if (pos == -1){
    console.log('Não encontrei o valor')
}else{
    console.log(`O valor esta na posição ${pos}`)
}