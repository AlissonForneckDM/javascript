var frase
var letra
var quantidade = 0
var teste = Array.from(frase)
var tam = teste.length
for (var c = 1 ; c <= tam; c++){
    if (teste[c] == letra){
        quantidade ++
    }
}return quantidade