const button = document.querySelector("button")



button.addEventListener("click", (event) => {
    event.preventDefault()

    const min = parseInt(document.getElementById("min").value)
    const max = parseInt(document.getElementById("max").value)
    
    
    let result = Math.floor(Math.random() * (max - min + 1)) + min


    if (isNaN(result)) {
        alert("Número invalido")
    }


    document.querySelector("section span").textContent = result
    

     

    

    


})





   

