const boton= document.getElementById("boton");
const div= document.getElementById("miDiv");

boton.addEventListener("click",function(boton){
    boton.stopPropagation();
    alert("Hola soy el botón!");
});

div.addEventListener("click", function() {
    alert("Hola! Soy el div");
});