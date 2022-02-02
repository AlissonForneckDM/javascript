function solucao(arrA=[1,2,4], arrB=[4,5,6]) {
    var resposta = 0;
     for (let pos = 0 ; pos < arrA.length; pos++){
         if(arrA[pos] == arrB[pos]){
             resposta += arrA[pos] 
         }
     }
     return resposta;
 }

console.log =(solucao())

function solucao(arrA, arrB) {
    var resposta = 0;
      for (let pos = 0 ; pos < arrA.length; pos++){
          for ( let pos1 = 0 ; pos < arrB.length; pos1++){
            if(arrA[pos] == arrB[pos]){
              resposta += arrB[pos1]
             }
          }
      }
      return resposta;
 }
 
 module.exports = { solucao }