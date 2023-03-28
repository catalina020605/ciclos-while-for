let suma = 0;
let contador = 1;
let num = parseInt(prompt("ingrese el numero que desee:"));

while (contador <= num) {
    suma = suma + contador **2;
    contador++
}
console.log("el total de la suma de los cuadrados es de:",suma);