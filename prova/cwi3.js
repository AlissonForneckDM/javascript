function solucao(s) {
    let contribuicaoINSSMensal = 0;
    let contribuicaoINSSAnual = 0;
    let quantidadePessoasNecessarias = 0;
    if(s < 1045){
        contribuicaoINSSMensal = s*0.075;
        contribuicaoINSSAnual = contribuicaoINSSMensal*13.3;
        quantidadePessoasNecessarias = s/contribuicaoINSSMensal;
        }else if (s <= 2089.60){
        contribuicaoINSSMensal = s*0.9;
        contribuicaoINSSAnual = contribuicaoINSSMensal*13.3;
        quantidadePessoasNecessarias = s/contribuicaoINSSMensal;
        }else if (s <= 3134.40){
        contribuicaoINSSMensal = s*0.12
        contribuicaoINSSAnual = contribuicaoINSSMensal*13.3;
        quantidadePessoasNecessarias = s/contribuicaoINSSMensal
        }else{
        contribuicaoINSSMensal = s*0.14
        contribuicaoINSSAnual = contribuicaoINSSMensal*13.3;
        quantidadePessoasNecessarias = s/contribuicaoINSSMensal
    }
    
    return [contribuicaoINSSMensal, contribuicaoINSSAnual, quantidadePessoasNecessarias];
}

console.log = (solucao(12230.50))