/*Ejercicio 5: Filtrar elementos de un array
• Crea un array con nombres de personas y sus edades.
• Filtra el array para obtener solo los nombres de las personas mayores de edad (por ejemplo, usando filter).
• Imprime los nombres de las personas que cumplen con el criterio.
• Usa un bucle para recorrer el array filtrado y realizar alguna acción con cada elemento (por ejemplo, mostrar un 
mensaje).*/
let peoples = [
    {name:"Juan",
    age:17},
    {name:"Luisa",
    age:25},
    {name:"Martin",
    age:2},
    {name:"Rojelio",
    age:54},
    {name:"Andrea",
    age:15}   
]

peoplesPlusAge = peoples.filter(x => x.age >= 18);
for(let i = 0; i < peoplesPlusAge.length; i++) {
    console.log(peoplesPlusAge[i]);
}