let suma = 0;
let contador = 0;

while (contador < 10) {
    numero = parseFloat(prompt("Ingrese un numero"));
    suma = suma + numero;
    contador++;
}
let promedio = suma / 10;
console.log("El promedio de los 10 numeros es: ",promedio);
