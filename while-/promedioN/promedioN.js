let suma = 0;
let contador = 0;
let n = parseInt(prompt("Ingrese el numero que desee: "));

while (n != 0) {
    n = parseFloat(prompt("Ingrese un numero"));
    suma = suma + n;
    contador++;
}
let promedio = suma / contador;
console.log("El promedio de los",n, "numeros es: ",promedio);
