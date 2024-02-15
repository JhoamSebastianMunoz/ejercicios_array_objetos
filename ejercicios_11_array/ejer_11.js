/*Ejercicio 11:
Un pequeño negocio necesita un sistema para gestionar su inventario de productos. El sistema debe permitir al usuario:
• Agregar nuevos productos: registrar nombre, descripción, precio, cantidad en stock y categoría.(crear array de 
objetos)
• Listar todos los productos: mostrar información completa de cada producto.
• Buscar un producto por nombre: mostrar información del producto si existe.
• Eliminar un producto: eliminar producto del inventario.
• Actualizar la cantidad en stock: modificar la cantidad disponible de un producto*/

//Se crea la array vacía para inventario
let inventary = [];
//Se crea el objeto para los datos que contiene un producto dentro de un inventario

//Se crea la funcion para agregar unn producto al inventario
function add_products (name, description, price, quantity, category ){
    let product = {
        name:name,
        description:description,
        price:price,
        quantity:quantity,
        category:category
    };
  inventary.push(product);
  console.log("Producto agregado correctamente");
  console.log("--------------------------------");
};
//Se crea la funcion para listar los productos
function list_products(){
    console.log("Inventario de los productos");
    inventary.forEach(product => {
        console.log(`Name: ${ product.name}`);
        console.log(`Description: ${product.description}`);
        console.log(`Price: ${product.price}`);
        console.log(`Quantity: ${product.quantity}`);
        console.log(`Category ${product.category}`);
        console.log("--------------------------------")
    });
}
//Funcion para buscar un producto por su nombre
function search_product(name){
    let find_product = inventary.find(product=> product.name === name);
    if (find_product){
        console.log(`Name: ${find_product.name}`);
        console.log(`Description: ${find_product.description}`);
        console.log(`Price: ${find_product.price}`);
        console.log(`Quantity: ${find_product.quantity}`);
        console.log(`Category ${find_product.category}`);
        console.log("--------------------------------")
    } else {
        console.log("Producto no encontrado");
    }
}

// Se crea una funcion para eliminar un producto del inventario
function delete_product(name){
    inventary = inventary.filter(product => product.name !== name);
    console.log("Producto eliminado correctamente");
}
//Se crea una funcion para actualiar el inventario de un producto
function update_product (name, new_quantity){
    let product = inventary.find(product=> product.name === name);
    if (product){
        product.quantity = new_quantity;
        console.log("Cantidad actualizada correctamente.");
        console.log("--------------------------------")
    } else {
        console.log("Producto no encontrado.");
    }

}


add_products("Arroz", "Arroz supremo", 2100, 50, "grano");
add_products("Jugo", "Jugo hit, naranja", 1000, 240, "líquido");
list_products();
search_product("Arroz");
delete_product("Arroz");
list_products();
update_product("Arroz", 30);
list_products();
