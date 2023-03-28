/*
Cree un programa que muestre el promedio de n números, dejándose de solicitar números cuando se
introduzca el cero.
 */

contador = 0;
acumulador = 1;

let num = parseFloat(prompt("ingrese numero"));

while (num != 0 ) {
    let num = parseFloat(prompt("ingrese numero"));
    suma = suma + num;
    contador++
}
let promedio = suma / contador;
console.log("el promedio es:"+promedio);