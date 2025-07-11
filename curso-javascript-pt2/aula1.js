// let invoice = {
//     name: "Felipe",
//     age: 30,
//     products: {
//         0: ["mouse 2xwm", 29.90],
//         1: ["Teclado mecânico", 129.99],
//         2: ["Monitor", 899.99],
//         3: ["TV 100 pol", 10000.90]
//     }
// }


// generateInvoice(invoice)

// function generateInvoice(invoice) {
//     console.log(`O comprador é ${invoice.name}`)
//     console.log(`A idade é ${invoice.age}`)
//     console.log("--------------------------")
//     for (let i in invoice.products) {
//         let [productName, ProductPrice] = invoice.products[i]
//         console.log(` - ${productName}: R$ ${ProductPrice}`)
//     }
// }


let dicionarioDePalavras = {
    alo: "Expressão para atender telefone",
    tchau: "Expressão de despedida",
    guri: "Giria usada em alguns estados do Brasil"
}

function buscarPalavra(palavra){
    if (palavra in dicionarioDePalavras){
        return dicionarioDePalavras[palavra]
    } else {
        return "Não encontrada"
    }
}

console.log(buscarPalavra("tchau"))




