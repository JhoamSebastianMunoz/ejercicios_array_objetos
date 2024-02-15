/*Ejercicio 3: Buscar un elemento en un array
• Crea un array con al menos 10 elementos de diferentes tipos (números, strings, booleanos).
• Busca un elemento específico en el array por su valor.
• Imprime la posición (índice) del elemento encontrado o un mensaje si no se encuentra.
• Bonus: Usa diferentes métodos para realizar la búsqueda (por ejemplo, indexOf, find).*/

let things = [1638,"Juan",true, 2315, "Daniela",false,395,"luis",1,"Yesid"];
let things_2 = things.filter(x=> x == "Daniela");
console.log("El elemento filtrado es: "+things_2);
let indice = things.indexOf("Daniela");
console.log("El índice de "+things_2+" es: "+indice);
things_2 >= things ? console.log ("El elemmento encontrado es: "+things_2) : console.log("No se encontró el elemento")