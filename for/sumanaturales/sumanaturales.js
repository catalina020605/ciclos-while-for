let numero = parseFloat(prompt("Ingrese el numero hasta donde quiere que se sumen los numeros"))
let contador = 0;

for (let index = 1; index <= numero; index++){
     contador = contador + index;
}
console.log("el total de la suma es:"+contador);
