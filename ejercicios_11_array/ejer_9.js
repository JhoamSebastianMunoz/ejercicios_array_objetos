/*Ejercicio 9: Agrupar elementos de un array por una propiedad
• Crea un array con objetos que tengan una propiedad en común (por ejemplo, color, tamaño, tipo).
• Agrupa los elementos del array por el valor de la propiedad común.*/

let animals = [
{specie:"perro",
color:"amarillo",
age:2,
type:"mamifero"
},
{specie:"gato",
color:"negro",
age:5,
type:"mamifero"
},
{specie:"leon",
color:"amarillo",
age:9,
type:"carnivoro"
},
{specie:"jirafa",
color:"amarillo",
age:7,
type:"herbivoro"
},
{specie:"pantera",
color:"negro",
age:3,
type:"carnivoro"
},
];
let animals_filter = animals.filter(animals=> animals.color == "amarillo");

function agruparPorPropiedad(array, propiedad) {
    return array.reduce((agrupado, elemento) => {
        const valorPropiedad = elemento[propiedad];
        if (!agrupado[valorPropiedad]) {
            agrupado[valorPropiedad] = [];
        }
        agrupado[valorPropiedad].push(elemento);
        return agrupado;
    }, {});
}

let animals_agrupados_por_color = agruparPorPropiedad(animals_filter, 'color');
console.log("Agrupa los elementos del array por el valor de la propiedad común:", animals_agrupados_por_color);
