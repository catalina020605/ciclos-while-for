let numero = parseInt(prompt("Ingrese un numero"))
let potencia = parseInt(prompt("Ingrese la potencia de:"+numero));
let contador = 1;

while (contador <= potencia) {
    contador= numero * potencia;
    console.log(numero,"^",potencia,"=",contador);
    contador++
}