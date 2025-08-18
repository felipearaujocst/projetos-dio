// function soma(x){
//     return function(y){
//         return x + y
//     }
// }

// const somaParcial = soma(10)

// console.log(somaParcial(20))
// console.log(somaParcial(30))
// console.log(somaParcial(40))

// const pessoa = {
//     nome:'Felipe',
//     idade: 30

// }

// function gritar(prefixo){
//     console.log(prefixo, this.nome)
// }

// gritar.apply(pessoa, ['olaaaa'])

const promessaDeNumero = new Promise((resolve, reject) => {
  setTimeout(() => {
    const numero = parseInt(Math.random() * 100);
    resolve(numero);
  }, 1000);
});

console.log("vai filhão!")

promessaDeNumero
  .then((value) => {
    console.log(value);
    return value + 10
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finalizou");
  });
