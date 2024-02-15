/*Ejercicio 4: Ordenar un array
• Crea un array con números aleatorios.
• Ordena el array de forma ascendente.
• Ordena el array de forma descendente.
• Imprime el array antes y después de ordenarlo*/

let numbers = Array.from({length:10},() =>Math.floor(Math.random()*10));
numbers.forEach(function(item,index,arr){
    console.log(item);
});
let asc_numbers = numbers.sort();
console.log("Los valores anteriores ordenados de forma ascendente es: "+asc_numbers);
let desc_numbers = numbers.reverse();
console.log("Los valores anteriores ordenados de forma descendente es: "+desc_numbers);