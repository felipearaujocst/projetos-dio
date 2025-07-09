// const {gets, print}= require('./funcoes_auxiliares');

// const numerosSorteados = [];

// for (let index = 0; index < 5; index++) {
//     const numerosSorteado = gets();
//     numerosSorteados.push(numerosSorteado)
// }

// print(numerosSorteados)

// let maiorNumero = 0

// for (let i = 0; i < numerosSorteados.length; i++) {
//     const numerosSorteado = numerosSorteados[i]
//     if(numerosSorteado > maiorNumero){
//         maiorNumero = numerosSorteado;
//     }
    
// }


// print(maiorNumero)

const {gets, print}= require('./funcoes_auxiliares');

const qntDeAlunos = gets();

let maiorNumeroEncontrado = 0;

for (let index = 0; index < qntDeAlunos; index++) {
    const numerosSorteado = gets();
    if(numerosSorteado > maiorNumeroEncontrado){
        maiorNumeroEncontrado = numerosSorteado 
    }
}


print(maiorNumeroEncontrado)







