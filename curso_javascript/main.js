//Parte 1 - Ejercicio 2
let a = 5;
let b = 10;
let c = a + b;
console.log("la suma de a y b es " + c)

//Parte 1 - Ejercicio 3
let nombre = prompt("Por favor, ingrese su nombre")
console.log("¡Hola, " + nombre + "! Bienvenido")

//Parte 2 - Ejercicio 1
let numero1 = 15;
let numero2 = 15;
let numero3 = 10;

if (numero1 >= numero2 && numero1 >= numero3) {
    console.log("El numero mas grande es " + numero1);
} else if (numero2 >= numero1 && numero2 >= numero3) {
    console.log("El numero mas grande es " + numero2);
} else {
    console.log("El numero mas grande es " + numero3);
}

//Parte 2 - Ejercicio 2
let par_impar = prompt("Ingrese un numero")

if (par_impar % 2 == 0) {
    console.log("El numero ingresado es par")
} else {
    console.log("El numero ingresado es impar")
}

//Parte 3 - Ejercicio 1
let variableWhile = 10;

while (variableWhile != 0) {
    console.log(variableWhile)
    variableWhile--;
}

//Parte 3 - Ejercicio 2
let variableDoWhile;

do {
    variableDoWhile = prompt("Ingrese un numero mayor a 100");
    
    if (variableDoWhile == null) {
        console.log("Operacion cancelada por el usuario");
        break;
    }

} while (variableDoWhile <= 100);

if (variableDoWhile !== null) {
    console.log("Ingresaste un numero mayor a 100: " + variableDoWhile);
}

//Parte 4 - Ejercicio 1
let numFuncion = prompt("Ingrese un numero")
const esPar = (num1) => {
    if (num1 % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log("El numero " + numFuncion + " es par: " + esPar(numFuncion));

//Parte 4 - Ejercicio 2
let celsius = prompt("Ingrese la cantidad de grados celcius")

const convertirCelsiusAFahrenheit = (num) => {
    return num * 1.8 + 32
}

console.log(celsius + "°C son equivalentes a " + convertirCelsiusAFahrenheit(celsius) + "°F")

//Parte 5 - Ejercicio 1

let persona = {
    nombre: "Valentin",
    edad: 21,
    ciudad: "Argentina",
    cambiarCiudad: function() {
        while (this.ciudad.toLowerCase() === "argentina" || !this.ciudad || /\d/.test(this.ciudad)) {
            this.ciudad = prompt("Elija la ciudad nueva: ");

            if (!this.ciudad) {
                console.log("Ingrese una ciudad válida.");
            } else if (this.ciudad.toLowerCase() === "argentina") {
                console.log("La ciudad ya es Argentina.");
            } else if (/\d/.test(this.ciudad)) {
                console.log("La ciudad no puede contener números.");
            } else {
                console.log("La nueva ciudad elegida es: " + this.ciudad);
                break;
            }
        }
    }
};

//Parte 5 - Ejercicio 2
console.log(persona);
persona.cambiarCiudad();
console.log(persona);

let libro = {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    publicacion: 1953,
    esViejo: function() {
        if (this.publicacion > 10) {
            return true;
        } else {
            return false;
        }
    }
}

console.log("El libro " + libro.titulo + " es antiguo: " + libro.esViejo())

//Parte 6 - Ejercicio 1
let arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arregloNumerosMultiplicados = [];

arregloNumeros.forEach((elemento) => {
    let numMultiplicado = elemento*2
    arregloNumerosMultiplicados.push(numMultiplicado)
})

console.log("Numeros originales: " + arregloNumeros)
console.log("Numeros multiplicados: " + arregloNumerosMultiplicados)

//Parte 6 - Ejercicio 2
let array = [];

for (let i = 1; i <= 20; i++) {
    array.push(i)
}

let pares = array.filter((elemento) => elemento % 2 == 0)
console.log(pares)

//Parte 7 - Ejercicio 1

const boton = document.getElementById("boton")
const parrafo = document.querySelectorAll(".parrafo")

const colorParrafo = () => {
    parrafo.forEach(parrafo => {
        if (parrafo.classList.contains("color_azul")){
            parrafo.classList.remove("color_azul")
        } else {
            parrafo.classList.add("color_azul")
        }
    })
}

boton.addEventListener("click", () => {
    colorParrafo();
})

//Parte 7 - Ejercicio 2
const buttonInput = document.getElementById("buttonInput");
const form = document.getElementById("formInput");

const getDataInput = () => {
    const formValue = formInput.value;
    console.log({formValue});
    alert("Mensaje Ingresado!")
}

buttonInput.addEventListener("click", () => {
    getDataInput();
}) 

//Parte 8 - Ejercicio 1
const unorderedList = document.getElementById("unorderedList");

unorderedList.addEventListener("click", (event) => {
    getListMessage(event);
})

const getListMessage = (event) => {
    console.log(event.target)
}

//Parte 8 - Ejercicio 2
const disableInput = document.getElementById("disableInput")
const disableButton = document.getElementById("disableButton")
const ableButton = document.getElementById("ableButton")

const disable = () => {
    disableInput.disabled = true;
}

const able = () => {
    disableInput.disabled = false;
}

disableButton.addEventListener("click", () => {
    disable();
})

ableButton.addEventListener("click", () => {
    able();
})

//Parte 9 - Ejercicio 1
const emailInput = document.getElementById("emailInput");
const reciveButton = document.getElementById("reciveButton");
const deleteButton = document.getElementById("deleteButton");
const textArea = document.getElementById("textArea");
const confirmData = document.getElementById("confirmData")

const saveInformation = () => {

    const emailValue = emailInput.value

    localStorage.setItem("datos", JSON.stringify({
        emailValue
    }))

    if (emailValue) {
        textArea.innerText = "Correo guardado: " + emailInput.value; 
        confirmData.innerText = "Existe un correo: Si";
    } else {
        confirmData.innerText = "Existe un correo: No";
    }
}

reciveButton.addEventListener("click", () => {
    saveInformation();
})

const deleteInformation = () => {
    const result = localStorage.getItem("datos")
    if (result) {
        localStorage.removeItem("datos")
        textArea.innerText = "Correo guardado: "
        confirmData.innerText = "Existe un correo: No";
    } else {
        confirmData.innerText = "Existe un correo: No";
    }
}

deleteButton.addEventListener("click", () => {
    deleteInformation();
}) 

