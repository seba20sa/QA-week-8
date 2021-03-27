/*A) Crear una variable de tipo string con al menos 
10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/
var stringA = 'ET Phone home';
console.log(stringA.toUpperCase());
/*B) Crear una variable de tipo string con al menos 10 caracteres y generar 
un nuevo string con los primeros 5 caracteres guardando el resultado 
en una nueva variable (utilizar substring).*/
var stringB = 'Hasta la vista baby';
var shortStringB = stringB.substring(0,5);
console.log(shortStringB);
/*C) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
  con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
var stringC = 'Elementary, my dear Watson';
var stringCLenght = stringC.length; 
var lastThreeStringC = stringC.substring(stringCLenght-3,stringCLenght);
console.log(lastThreeStringC);
/*D) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/
var stringC = 'my mama always said life was like a box of chocolates';
var FinalStringC = stringC.substring(0,1).toUpperCase() + stringC.substring(1,stringC.length).toLowerCase();
console.log(FinalStringC); 
/*E) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
var stringE = 'Houston, we have a problem.';
var firstBlankSpace = stringE.indexOf(' ');
console.log(firstBlankSpace);
/*F) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún 
espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo 
string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
var stingF = 'hakuna matata'
var x = stingF.indexOf(' ');
var FinalStringF = stingF.substring(0,1).toUpperCase() + stingF.substring(1,x).toLowerCase() + ' '
  + stingF.substring(x+1,x+2).toUpperCase() + stingF.substring(x+2,stingF.length).toLowerCase();
console.log(FinalStringF);