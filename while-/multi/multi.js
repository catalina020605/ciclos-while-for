// Crear un programa que muestre la multiplicación de dos cantidades. Use ciclo while. NO USE LA OPERACIÓN MULTIPLICACIÓN

let acumulador = 0;
let contador = 1;

let num1 = parseFloat(prompt("Ingrese un numero"))
let num2 = parseFloat(prompt("Ingrese un numero"))

while (contador <= num1) {

    acumulador = acumulador + num2;
    contador++
}
console.log("la suma abreviada es:"+acumulador);

