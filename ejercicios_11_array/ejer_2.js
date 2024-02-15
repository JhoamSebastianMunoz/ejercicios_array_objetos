/*Ejercicio 2: Agregar y eliminar elementos de un array
• Crea un array vacío.
• Agrega al menos 3 elementos al array utilizando diferentes métodos (por ejemplo, push, unshift).
• Elimina el último elemento del array.
• Elimina un elemento específico del array por su índice.
• Imprime el array final después de las modificaciones */

let names= [];
names.push("Daniel");
names.push("Clarita");
names.unshift("Roxana");
console.log("Nombres de la array: "+names);

console.log(names.pop())
console.log("Valores contenidos en la array luego de eliminar el último elemento con la metodo pop: "+names);

names.splice(1,1);
console.log("Valores contenidos en la array luego de elimina un elemento específico del array por su índice:  "+ names);