/*Ejercicio 10: Convertir un array en un objeto
• Crea un array con elementos de diferentes tipos.
• Convierte el array en un objeto, donde cada elemento del array sea una propiedad del objeto.*/
let things = [1638,"Juan",true, 2315, "Daniela",false,395,"luis",1,"Yesid"];
let arrayObj =[];
for(let i = 0; i<things.length; i++){
    arrayObj[`Property ${i+1}`] = things[i];
}
console.log(arrayObj);
