/*
var bienvenida = "Bienvenid@s al curso de JS" ;
console.log(bienvenida);



let numero1 = 33; 

let numero2 = 56 ;
let resta = numero2 - numero1 ;



let mensaje = "El resultado de la resta es " + resta ;

console.log(mensaje);

alert(mensaje);




let entrada = prompt("Ingresar una letra");
let salida  = entrada + " " + "ingresada";
alert(salida);





let numeroIngresado = parseInt(prompt("Ingrese un numero")) ;

console.log(typeof numeroIngresado);
console.log(numeroIngresado);


*/
/*ejercicio 1

let numeroA = 10;
let numeroB = 20;
const numeroC = 43;

let resultadosuma = numeroA + numeroB;
let resultadoResta = numeroB - numeroA;
let resultadoProducto = numeroB * numeroC;



document.write("El resultado de la primer suma es: " + resultadosuma + "<br>");
document.write("El resultado de la resta es:" + resultadoResta + "<br>");
document.write("El resultado de producto, osea de la 3er operacion es: " + resultadoProducto + "<br>");

*/
/* ejercicio 2 año de nacimiento
const anioactual = 2023;
let ingreseanio = prompt("Ingrese año de nacimiento");
if (isNaN(ingreseanio)) {
    alert("No a ingresado un numero");
    window.location.href = "indexdeprueba.html";
} else {
    if (anioactual - ingreseanio < 18) {
        alert("usted es menor de edad, no puede ingresar");
    } else {
        alert("Bienvenido, puede ingresar");

    }
}
*/

/* ejercicio 3 decir edad 
const anioactual = 2023;
let ingreseanio = prompt("Ingrese año de nacimiento");
if (isNaN(ingreseanio)) {
    alert("No a ingresado un numero");
    window.location.href = "indexdeprueba.html";
} else {
    alert("Usted tiene: " + (anioactual - ingreseanio))
}
*/

/* ejercicio 4 operador and 

let nombreingresado = prompt("Ingrese su nombre");
let apellidoingresado = prompt("Ingrese su apellido");

if((nombreingresado !="") && (apellidoingresado !="")){
    alert("Nombre: " + nombreingresado + "\nApellido: " + apellidoingresado);
    }else{
        alert("Error: no ingresaste el nombre o el apellido, salame, volve a intentarlo");
        window.location.href = "indexdeprueba.html";
    }

*/

/* ejercicio 5 for y while */

/* tabla de multiplicacion */

/*
let ingresarnumero = parseInt(prompt("Ingrese un numero"));

for (let numero = 1; numero <= 10; numero++) {
    let resultado = ingresarnumero * numero;
    alert(ingresarnumero + " X " + numero + " = " + resultado);
}

*/

/* bucle infinito (cuelga el explorador) 
let ingresarnumero = parseInt(prompt("Ingrese un numero pa romper"));

for (let numero = 100; numero++; numero++) {
    let resultado = ingresarnumero * numero;
    console.log (resultado = ingresarnumero * numero)
}
*/

/* ejercicio 6 while

let entrada = prompt("Ingresar un dato");
while(entrada != "ESC") {
    alert("El usuario ingreso: " + entrada);
    entrada = prompt("Ingresar otro dato");
}


let repetir = false;
do {
    console.log("Solo una vez")
}while (repetir)


let numero = 0;
do {
    numero = prompt("Ingresar numero");
    console.log(numero);
}while(parseInt(numero));


let texto = "";
do {
    texto = prompt("Ingresar texto");
    console.log(texto);
}while(texto !== "terminar");

*/

/* ejercicio 7 while y switch 

let lista_articulos = "";
let total_compra = 0;
let articulo = "";

while (articulo !== "ESC") {
    articulo = parseInt(prompt("Ingrese el codigo del articulo"));
    if (isNaN(articulo)) {
        break; // saldria del bucle en teoria al presionar cancelar
    } 
    switch (articulo) {
        case 1:
            lista_articulos += "Aceite - $1500" + "<br>";
            total_compra += 1500;
            break;
        case 2:
            lista_articulos += "Vinagre - $700" + "<br>";
            total_compra += 700;
            break;
        case 3:
            lista_articulos += "Kg Manzana - $1000" + "<br>";
            total_compra += 1000;
            break;
        case 4:
            lista_articulos += "Kg Papa - $250" + "<br>";
            total_compra += 800;
            break;

        default:
            alert("El codigo ingresado no existe");
            break;
    }
}

document.write(lista_articulos)
document.write("total de la compra es: $" + total_compra)
alert("El toal de la compra es:" + total_compra);
*/

/* Ejercicio 8 funcion */
let primnumero = prompt("ingrese el primer numero");
let segnumero = prompt("ingrese el segundo numero");
let operacion = prompt("ingrese la operacion a realizar");

function calculadora(primnumero, segnumero, operacion) {
    switch (operacion) {
        case "+":
            return primnumero + segnumero;
            break;
        case "-":
            return primnumero - segnumero;
            break;
        case "*":
            return primnumero * segnumero;
            break;
        case "/": 
            return primnumero / segnumero;

        default:
            return 0;
            break;
    }
}
