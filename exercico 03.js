/*
03) Crie uma função que recebe dois parâmetros
base e expoente, e retorne a base elevada ao 
expoente.
*/

function baseExpoente (valor1, valor2){
    let base = valor1
    let expoente = valor2
    return base ** expoente
}

console.log(baseExpoente(5, 2))


//Outra maneira, usando Math.pow() e botando "base" e "expoente" como parametros
function baseExpoente (base, expoente){
    let resultado = Math.pow(base, expoente)
    return resultado
}


console.log(baseExpoente(5, 2))