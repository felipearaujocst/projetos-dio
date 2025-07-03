function calcularXp(){
    const inputName = document.getElementById("hero")
    const heroName = inputName.value
    const inputXp = document.getElementById("xp")
    const xp = inputXp.value
    let nivel = ""

    if(xp < 1000){
        nivel = "Ferro"
    } else if (xp >= 1000 && xp < 2000){
        nivel = "Bronze"
    }

    const novaDiv = document.createElement("div")
    novaDiv.classList.add("resultado")
    novaDiv.innerHTML =`Seu herói se chama <strong>${heroName}</strong> e seu nível é <strong>${nivel}</strong>!`
    
    const container = document.querySelector(".container")
    container.appendChild(novaDiv)
}

