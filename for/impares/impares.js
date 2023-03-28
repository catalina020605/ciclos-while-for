// Cree un programa que muestre los números impares entre 1 y n.

let numero = parseFloat(prompt("Ingrese el numero impar a donde quiere que se ejecute el programa"));
let suma = 1;

for (let index = 1; index <= numero; index++) {
   if (suma % 2 !=0) {
    console.log(suma+"es impar");
   }
   suma++ 
}
