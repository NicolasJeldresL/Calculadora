// Seleccionar el elemento Html, con la clase pantalla y lo asigna en la variable pantalla
const pantalla = document.querySelector(".pantalla"); // un sólo btn query selector  
// Todos los elementos html con la clase btn y los guarda en una variable que definiremos como botones
const botones = document.querySelectorAll(".btn"); // query selector llama a todas las clases

// Genera una iteración sobre cada elemento botón en la lista botones
botones.forEach(boton =>{  //
    boton.addEventListener("click", ()=>{ // Agregar un evento click a cada botón
        //console.log(btn.textContent); // Efectivamente imprime el texto del contenido
        //Obtener el texto de botón presionado y guardarlo en una variable
        const botonApretado = boton.textContent;
        if(boton.id === "c"){ // Verificar si el botón tiene el id C
            pantalla.textContent = "0" // De cumplirse esto, establece el contenido de pantalla como 0 y reestable la función
            return; 
        }
        if(boton.id === "borrar"){ // verificar si el botón tiene el id de borrar
            if(pantalla.textContent.length === 1 || pantalla.textContent === "error"){ // de ser el botón borrar, verificar la longitud del contenido de la pantalla
                pantalla.textContent = "0" // si la longitud es 1 o el contenido es error, vamos a establecer el contenido de pantalla como 0
            } else {
                pantalla.textContent = pantalla.textContent.slice (0, -1); //de lo contrario, elimina el último carácter del contenido depantalla
            }
            return; // Se retorna la función
        }
        if(boton.id === "igual"){
            try {
                pantalla.textContent = eval(pantalla.textContent);
                return;
            } catch {
                pantalla.textContent = "error" 
            }
            return;
        }
        //verificar si el contenido de la pantalla es 0 o error
        if(pantalla.textContent === "0" || pantalla.textContent === "error"){
            pantalla.textContent = botonApretado;  // reemplaza el contenido de pantalla por el contenido del botón apretado
        } else { // Agrega el contenido del botón apretado al contenido existente de pantalla 
            pantalla.textContent += botonApretado;
        }
    })
}) 
