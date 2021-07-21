res=document.getElementById("res")
console.log(res)
boton=document.getElementById("das")
boton.addEventListener("click", ()=>{
    res.classList.remove('rojo')
    res.classList.add('azul')
})