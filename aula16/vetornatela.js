// formas de mostrar vatores
let num = [2,7,9]
console.log(num)//assim mostra ele na estrutura do array
/*
for (var c= 0 ; c < num.length ; c++){
    console.log(`A posição ${c} tem o valor ${num[c]}`) 
}
*/
for (var c in num){
    console.log(`A posição ${c} tem o valor ${num[c]}`) 
}
//comando para buscar um valor no array array.indexOf(valor)