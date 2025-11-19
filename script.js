const btn1 = document.getElementById("btn3");

btn1.addEventListener("click", () => {
    const parrafo = document.getElementById("parrafo");

    parrafo.textContent = "Texto cambiado con Js";
});


const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
    const parrafo = document.getElementById("parrafo2");

    if (parrafo.textContent === "Texto Original") {
        parrafo.textContent = "Texto Cambiado";
    }
    else {
        parrafo.textContent = "Texto Original";
    }
});


const btn5 = document.getElementById("btn5");
let oscuro = false;     

btn5.addEventListener("click", () => {
    const div = document.getElementById("ejercicio5");

    if (!oscuro) {
        div.style.backgroundColor = "black";    
        oscuro = true;      
    } else {
        div.style.backgroundColor = "red";
        oscuro = false;
    }
});

const btn6suma = document.getElementById("btn6suma"); 
const btn6resta = document.getElementById("btn6resta"); 
const parrafoResultado = document.getElementById("contador")

btn6suma.addEventListener("click", () => {
    parrafoResultado.textContent = parseInt(parrafoResultado.textContent) + 1;
});

btn6resta.addEventListener("click", () => {
    parrafoResultado.textContent = parrafoResultado.textContent - 1;
});



const imputText = document.getElementById("entradaElemento");
const ul = document.querySelector("#ejercicio7 ul");
const btn7 = document.getElementById("btn7");

btn7.addEventListener("click", () => {
    
    imputText.addEventListener("input", () => {
        const elementoNuevo = document.createElement("li");
        elementoNuevo.textContent = imputText.value;
            
        ul.appendChild(elementoNuevo);
        
    });
});