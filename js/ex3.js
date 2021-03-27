/*A) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 
11 (utilizar console.log)*/
var currentYear =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(currentYear[4]);
console.log(currentYear[10]);
/* B Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */
console.log(currentYear.sort());
/*C) Agregar un elemento al principio y al final del array (utilizar unshift y push). */
currentYear.push('Dessert');
currentYear.unshift('Jazz');
console.log(currentYear);
/*D) Quitar un elemento del principio y del final del array (utilizar shift y pop). */
currentYear.shift();
currentYear.pop();
console.log(currentYear);
/*E) Invertir el orden del array (utilizar reverse) */
console.log(currentYear.reverse());
currentYear = currentYear.reverse();
/*F) Unir todos los elementos del array en un único string donde cada mes este separado 
por un guión - (utilizar join).*/
var unifiedCurrentYear= currentYear.join('-');
console.log(unifiedCurrentYear);
/*G) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
var slicedCurrentYear = currentYear.slice(4,11);
console.log(slicedCurrentYear);