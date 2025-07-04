function calcularXp(){
    const inputName = document.getElementById("hero")
    const heroName = inputName.value
    const inputXp = document.getElementById("xp")
    const xp = inputXp.value
    let nivel = ""

    if(xp < 1000){
        nivel = "Ferro"
    }else if (xp >= 1000 && xp < 2000){
        nivel = "Bronze"
    }else if (xp >= 2000 && xp < 5000){
        nivel = "Prata"
    }else if (xp >= 5000 && xp < 7000){
        nivel = "Ouro"
    }else if (xp >= 7000 && xp < 8000){
        nivel = "Platina"
    }else if (xp >= 8000 && xp < 9000){
        nivel = "Ascendente"
    }else if (xp >= 9000 && xp < 10000){
        nivel = "Imortal"
    }else if (xp >= 10000){
        nivel = "Radiante"
    }

    let resultadoDiv = document.querySelector(".resultado")

    if(!resultadoDiv){
        resultadoDiv = document.createElement("div")
        resultadoDiv.classList.add("resultado")
        document.querySelector(".container").appendChild(resultadoDiv)
    }

    resultadoDiv.innerHTML = `Seu herói se chama <strong>${heroName}</strong> e seu nível é <strong>${nivel}</strong>!`
}

