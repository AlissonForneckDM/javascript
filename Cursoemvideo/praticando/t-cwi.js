function tamanho(x){
    var soma = x/1024
    if (x < 1024){
        return console.log(x+' B')
    }else{
        if (soma < 1024){
            return console.log(soma.toFixed(2)+' KB')
        }else{
            soma = soma / 1024
            if (soma < 1024){
                return console.log(soma.toFixed(2)+' MB')
            }else{
                soma = soma / 1024
                if(soma < 1024){
                    return console.log(soma.toFixed(2)+' GB')
                }else{
                    soma = soma / 1024
                    if(soma < 1024){
                        return console.log(soma.toFixed(2)+' TB')
                    }else{
                        soma = soma /1024
                        if(soma < 1024){
                            return console.log(soma.toFixed(2)+' PB')
                        }else{
                            soma = soma / 1024
                            if(soma < 1024){
                                return console.log(soma.toFixed(2)+' EB')
                            }else{
                                soma = soma / 1024
                                if(soma < 1024){
                                    return console.log(soma.toFixed(2)+ ' ZB')
                                }else{
                                    soma = soma / 1024
                                    if (soma < 1024){
                                        return console.log(soma.toFixed(2)+' YB')
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
console.log(tamanho(2000000000000000000000000))