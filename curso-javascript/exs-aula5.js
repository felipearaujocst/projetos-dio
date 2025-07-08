// let num = 3

// for(let i = 1;  i <= 10; i++){

//     console.log(num + " X " + i + " = " + num * i)

// }

// // console.log("======================")

const num = [2, 5, 4, 7, 25, 8, 13, 12, 54]

// for(let i = 0; i < num.length; i++){
//     if(num[i] % 2 === 0){
//         console.log(num[i] + " é par")
//     } else {
//         console.log(num[i] + " é impar")
//     }
// }

let maiorNum = 0

for(let i = 0; i < num.length; i++){

    if(num[i] > maiorNum){
        maiorNum = num[i]
    }
}

console.log("O maior número da lista é " + maiorNum)