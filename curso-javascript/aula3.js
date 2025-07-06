/* function quadrado(valor){
    return Math.pow(valor, 2)
}

const numAoQuadrado =  quadrado(3)

console.log(numAoQuadrado) */

/* function incrementarJuros(valor, percentual){
    
    const valorDeAcrescimo = (percentual / 100) * valor

    return valor + valorDeAcrescimo
}

const incremento =  incrementarJuros(100, 10)

console.log(incremento) */

/* function calcularJuros(){

}

function main() {
    console.log('Programa principal')
    calcularJuros()
}

main() */

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return (`${imc}abaixo do peso`)
    } else if (imc >= 18.5 && imc < 25) {
        return (`peso normal`)
    } else if (imc >= 25 && imc < 30) {
        return (`acima do peso`)
    } else if (imc >= 30 && imc < 40) {
        return (`Obeso`)
    } else {
        return (`obesidade grave`)
    }
}

/* (function () {
    const peso = 60
    const altura = 1.70

    const imc = calcularImc(peso, altura)
    console.log(classificarImc(imc))
})() */

// function escrevaNome(nome){
//     return nome 
// }

// function verificarIdade(idade){
//     if(idade >= 18){
//         console.log(escrevaNome("Raul") + " é Maior de idade")
//     } else {
//         console.log("Menor Idade")
//     }
// }

// verificarIdade(18)

function aplicarDesconto(valor, desconto){
    return (valor - ((desconto * valor) / 100))
}

function aplicarJuros(valor, juros, parcela){
    return (valor + ((juros * valor) / 100))/parcela
}

const valorCamisa = 54
const formaPagamento = 4
const parcela = 3


if (formaPagamento === 1){
    console.log(aplicarDesconto(valorCamisa, 10))
} else if (formaPagamento === 2){
    console.log(aplicarDesconto(valorCamisa, 15))
} else if (formaPagamento === 3){
    console.log(valorCamisa)
} else {
    console.log(aplicarJuros(valorCamisa, 10, parcela))
}





