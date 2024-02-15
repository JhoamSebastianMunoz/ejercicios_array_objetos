/*Ejercicio 6: Combinar dos arrays
• Crea dos arrays con diferentes elementos.
• Combina los dos arrays en un solo array nuevo.
• Mantén el orden original de los elementos en el array combinado.*/
let names = ["Juan","Carlos","Miguel","Daniel","Laura","Daniela"];
let things = [1638,"Juan",true, 2315, "Daniela",false,395,"luis",1,"Yesid"];

let names_things = [...names,...things];
console.log(names_things);
