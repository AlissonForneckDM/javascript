function solucao(matriz) {
  let fimMatriz = matriz.length
  let solucao = []
  for (let c0 = 0; c0 <= fimMatriz; c0++){
    for (let c1 = 0; c1 <= fimMatriz ; c1++ ){
      if(c0 == c1){
          solucao.push([c0],[c1])
      }
    }
  }
  return solucao
}

console.log(solucao())