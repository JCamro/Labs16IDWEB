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


//Ejercicio 7
const imputText = document.getElementById("entradaElemento");
const ul = document.querySelector("#ejercicio7 ul");
const btn7 = document.getElementById("btn7");

btn7.addEventListener("click", () => {
    
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = imputText.value;
    ul.appendChild(nuevoLi);
});

//Ejercicio 8

const btn8 = document.getElementById("btn8");

btn8.addEventListener("click", () => {
    const nombre = document.getElementById("nombreEntrada").value;
    const correo = document.getElementById("correoEntrada").value;
    const spanNombre = document.getElementById("span-nombre");
    const spanCorreo = document.getElementById("span-email");

    // Validación nombre
    if (!entradaValida(nombre)) {
        spanNombre.style.color = "red";
        spanNombre.textContent = "El nombre ingresado no debe estar vacío";
    } else {
        spanNombre.textContent = "";
    }

    // Validación correo
    if (!entradaValida(correo)) {
        spanCorreo.style.color = "red";
        spanCorreo.textContent = "El correo ingresado no debe estar vacío";
    } else {
        spanCorreo.textContent = "";
    }
});

const entradaValida = (texto) => {
    return texto.trim() !== "";
};



// Ejercicio 9
let valor = false;
const ampliarImagen = (valorImagen) => {
    // Asegura que siempre obtienes la imagen
    const imagen = valorImagen.querySelector("img");
    const div = document.getElementById("imagen-grande");
    valorImagen.addEventListener("click", () => {

        if (valor == false) {
            // Limpia el div si ya había algo
            div.innerHTML = "";
            const imagenClon = imagen.cloneNode(true);
            div.appendChild(imagenClon);
            valor = true;
        }
        else {
            div.innerHTML = "";
            div.style.backgroundColor = "none";
            valor = false;
        }
    });

};

const perro1 = document.getElementById("perro1");
ampliarImagen(perro1);
const perro2 = document.getElementById("perro2");
ampliarImagen(perro2);
const gato1 = document.getElementById("gato1");
ampliarImagen(gato1);
const gato2 = document.getElementById("gato2");
ampliarImagen(gato2);

// Ejercicio 10

const productos = [ 
    { nombre: "Laptop", precio: 3500 }, 
    { nombre: "Mouse", precio: 80 }, 
];

const  btn11 = document.getElementById("btn10");
const div11 = document.getElementById("ejercicio10");

btn11.addEventListener("click", () => {
    const tabla = document.createElement("table");
    const thead = document.createElement("tr");
    
    const tnombre = document.createElement("th");
    tnombre.textContent = "Nombre";

    const tprecio = document.createElement("th");
    tprecio.textContent = "Precio";

    thead.appendChild(tnombre);
    thead.appendChild(tprecio);
    tabla.appendChild(thead);
    
    for (const element of productos) {
        const tr = document.createElement("tr");
        const tdNombre = document.createElement("td");
        const tdPrecio = document.createElement("td");
        tdNombre.textContent = element.nombre;
        tdPrecio.textContent = element.precio;
        tr.appendChild(tdNombre);
        tr.appendChild(tdPrecio);
        tabla.appendChild(tr);
    }
    div11.appendChild(tabla);

});


//Ejercicio 11

const ul11 = document.querySelector("#ejercicio11 ul");

ul11.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
})

//Ejercicio 12

const btnMover = document.getElementById("btn12Mover");
const btnReiniciar = document.getElementById("btn12Reiniciar");
const div = document.getElementById("cuadrado");

btnMover.addEventListener("click", () => {
    div.classList.add("mover");
});

btnReiniciar.addEventListener("click", () => {
    div.classList.remove("mover");
});


//Ejercicio 13

const btnRegistrar = document.getElementById("btnRegistrar");
const tabla = document.getElementById("tabla13");

btnRegistrar.addEventListener("click", () => {

    const nombre = document.getElementById("nombreEntrada1").value;
    const edad = document.getElementById("edadEntrada").value;

    const nuevoRow = document.createElement("tr");

    const nuevoNombre = document.createElement("td");
    nuevoNombre.textContent = nombre;

    const nuevaEdad = document.createElement("td");
    nuevaEdad.textContent = edad;

    nuevoRow.appendChild(nuevoNombre);
    nuevoRow.appendChild(nuevaEdad);

    tabla.appendChild(nuevoRow);

});
    

tabla.addEventListener("click", (event) => {
    if (event.target.tagName === "TD") {
        event.target.parentNode.remove();
    }
});


//Ejercicio 14

const persona = {
    nombre: "Josue",
    edad: 18,
    ciudad: "Arequipa"
};

const personaJSON = JSON.stringify(persona);
console.log(personaJSON);


//Ejercicio 15

const personaJSON15 = '{"nombre":"Josué","edad":25,"ciudad":"Lima"}';
const persona15 = JSON.parse(personaJSON);
const btnMostrar = document.getElementById("btnMostrar");
const p = document.getElementById("mostrarValor");

btnMostrar.addEventListener("click", () => {
    p.textContent = "Nombre: " + persona.nombre;
});

//Ejercicio 16
const productos16 = [
    { nombre: "Manzana", precio: 1.5 },
    { nombre: "Pan", precio: 0.8 },
    { nombre: "Leche", precio: 2.0 }
];

const productosJSON = JSON.stringify(productos16);
const productosObjeto = JSON.parse(productosJSON);

const btnMostrar16 = document.getElementById("btnMostrar16");
const ul16 = document.getElementById("listaProductos");

btnMostrar16.addEventListener("click", () => {
    ul16.innerHTML = "";
    productosObjeto.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = producto.nombre;
        ul16.appendChild(li);
    });

});

//Ejercicio 17

const usuario = {
    nombre: "Josué",
    correo: "josue@example.com",
    rol: "Administrador"
};

const btnGuardar17 = document.getElementById("btnGuardar17");
const btnMostrar17 = document.getElementById("btnMostrar17");
const pMostrar = document.getElementById("mostrarUsuario");

btnGuardar17.addEventListener("click", () => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
    alert("Usuario guardado en localStorage");
});

btnMostrar17.addEventListener("click", () => {
    const usuarioJSON = localStorage.getItem("usuario");

    if(usuarioJSON) {
        const usuarioObj = JSON.parse(usuarioJSON);
        pMostrar.textContent = `Nombre: ${usuarioObj.nombre}, Correo: ${usuarioObj.correo}, Rol: ${usuarioObj.rol}`;
    } else {
        pMostrar.textContent = "No hay usuario guardado en localStorage";
    }
});


//Ejercicio 18
const librosJSON = `
[
    { "titulo": "Cien Años de Soledad", "autor": "Gabriel García Márquez" },
    { "titulo": "Don Quijote de la Mancha", "autor": "Miguel de Cervantes" },
    { "titulo": "La Sombra del Viento", "autor": "Carlos Ruiz Zafón" }
]
`;

const libros = JSON.parse(librosJSON);
const tabla18 = document.getElementById("tablaLibros");

libros.forEach(libro => {
    const fila = document.createElement("tr");

    const tdTitulo = document.createElement("td");
    tdTitulo.textContent = libro.titulo;

    const tdAutor = document.createElement("td");
    tdAutor.textContent = libro.autor;

    fila.appendChild(tdTitulo);
    fila.appendChild(tdAutor);

    tabla18.appendChild(fila);
});


//Ejercicio 19
let personaJSON19 = '{"nombre":"Josué","edad":25,"ciudad":"Lima"}';

let persona19 = JSON.parse(personaJSON19);

const btnActualizar = document.getElementById("btnActualizar");
const edadInput = document.getElementById("edadInput");
const pMostrar19 = document.getElementById("mostrarJSON");

pMostrar19.textContent = "JSON inicial: " + JSON.stringify(persona19);

btnActualizar.addEventListener("click", () => {
    persona19.edad = Number(edadInput.value);

    personaJSON19 = JSON.stringify(persona19);

    pMostrar19.textContent = "JSON actualizado: " + personaJSON19;
});


//Ejercicio 20
const input20 = document.getElementById("input20");
const btn20 = document.getElementById("btn20");

btn20.addEventListener("click", () => {

    const nombre20 = input20.value.trim();

    if(nombre20 === ""){
        alert("Por favor escribe tu nombre");
        return;
    }

    const usuario20 = {
        nombre: nombre20
    };

    const usuarioJSON20 = JSON.stringify(usuario20);
    console.log(usuarioJSON20);
});


//Ejercicio 21
const tareasJSON21 = `
[
    { "titulo": "Hacer la cama", "completada": true },
    { "titulo": "Lavar los platos", "completada": false },
    { "titulo": "Estudiar JS", "completada": true }
]
`;

const tareasObjeto21 = JSON.parse(tareasJSON21);

const btn21 = document.getElementById("btn21");
const ul21 = document.getElementById("listaTareas21");

btn21.addEventListener("click", () => {
    ul21.innerHTML = "";

    tareasObjeto21.forEach(tarea => {
        const li21 = document.createElement("li");
        li21.textContent = tarea.titulo;

        if(tarea.completada){
            li21.style.color = "green";
            li21.style.fontWeight = "bold";
        } else {
            li21.style.color = "red";
        }

        ul21.appendChild(li21);
    });
});


//Ejercicio 22

const nombre22 = document.getElementById("nombre22");
const edad22 = document.getElementById("edad22");
const pais22 = document.getElementById("pais22");
const btnGuardar22 = document.getElementById("btnGuardar22");
const perfil22 = document.getElementById("perfil22");

const mostrarPerfil22 = (usuario22) => {
    perfil22.textContent = `Nombre: ${usuario22.nombre}, Edad: ${usuario22.edad}, País: ${usuario22.pais}`;
};

const usuarioGuardado22 = localStorage.getItem("usuario22");
if(usuarioGuardado22){
    const usuarioObj22 = JSON.parse(usuarioGuardado22);
    mostrarPerfil22(usuarioObj22);
}

btnGuardar22.addEventListener("click", () => {
    const usuario22 = {
        nombre: nombre22.value.trim(),
        edad: edad22.value.trim(),
        pais: pais22.value.trim()
    };

    if(usuario22.nombre === "" || usuario22.edad === "" || usuario22.pais === ""){
        alert("Por favor completa todos los campos");
        return;
    }

    localStorage.setItem("usuario22", JSON.stringify(usuario22));

    mostrarPerfil22(usuario22);
});
