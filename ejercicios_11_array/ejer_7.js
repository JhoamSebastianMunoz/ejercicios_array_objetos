/*Ejercicio 7: Eliminar elementos duplicados de un array
• Crea un array con elementos duplicados.
• Elimina los elementos duplicados del array.*/

let names = ["Juan","Carlos","Miguel","Daniel","Laura","Daniela","Carlos","Miguel","Daniel"];
const delet_duplicate = [];

names.forEach((item)=>{
    if(!delet_duplicate.includes(item)){
        delet_duplicate.push(item);
    }
})
console.log(delet_duplicate);