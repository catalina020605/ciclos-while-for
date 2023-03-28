let contador = 0;

let num = parseInt(prompt("Ingrese el numero hasta donde quiere que se ejecute el programa"));

if (num >=1) {
    while (contador <= num) {
        console.log(contador+1);
        contador++;
    }
}