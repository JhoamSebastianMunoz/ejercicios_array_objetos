# Ejercicios de Arrays y Objetos

Colección de ejercicios prácticos en **JavaScript** para el manejo de arreglos (arrays) y objetos, organizados en dos grupos: una serie de 11 ejercicios de fundamentos sobre arrays y dos simulaciones aplicadas (un cajero automático y un sistema de reservas de hotel).

## Contenido

### `ejercicios_11_array/`

Serie de 11 ejercicios que cubren operaciones básicas y avanzadas con arrays:

1. **Crear y recorrer un array** de nombres e imprimir la longitud.
2. **Agregar y eliminar elementos** usando `push`, `unshift`, `pop` y `splice`.
3. **Buscar un elemento** por su valor e imprimir su índice (`filter`, `indexOf`).
4. **Ordenar un array** de números de forma ascendente y descendente (`sort`, `reverse`).
5. **Filtrar elementos** de un array de objetos por una condición (`filter`).
6. **Combinar dos arrays** conservando el orden (`spread operator`).
7. **Eliminar elementos duplicados** de un array (`forEach`, `includes`).
8. **Encontrar el máximo y el mínimo** de un array (`Math.max`, `Math.min`).
9. **Agrupar elementos** por una propiedad en común (`reduce`).
10. **Convertir un array en un objeto**, usando cada elemento como propiedad.
11. **Sistema de inventario**: agregar, listar, buscar, eliminar y actualizar productos (array de objetos).

### `ejercicio_2_array_objetos/`

Dos simulaciones aplicadas con array de objetos:

- **`ejercicio_1.js` — Cajero automático (ATM):** autenticación por documento y PIN, retiro de efectivo, depósito, transferencia entre cuentas y consulta de saldo mediante un menú en consola/prompt.
- **`ejercicio_2.js` — Gestión de reservas de hotel:** reserva de habitaciones individuales, dobles y familiares, con control de disponibilidad, capacidad, preferencia de fumadores, restricción de mascotas y estadísticas de reservas.

## Estructura del proyecto

```
ejercicios_array_objetos/
├── README.md
├── ejercicios_11_array/
│   ├── ejer_1.js
│   ├── ejer_2.js
│   ├── ejer_3.js
│   ├── ejer_4.js
│   ├── ejer_5.js
│   ├── ejer_6.js
│   ├── ejer_7.js
│   ├── ejer_8.js
│   ├── ejer_9.js
│   ├── ejer_10.js
│   └── ejer_11.js
└── ejercicio_2_array_objetos/
    ├── index.html        # Página que carga ejercicio_1.js
    ├── ejercicio_1.js    # Simulación de cajero automático
    └── ejercicio_2.js    # Sistema de reservas de hotel
```

## Uso

No requiere instalación ni dependencias. Ejecuta cualquier archivo directamente con Node.js:

```powershell
node ejercicios_11_array/ejer_1.js
```

Para los ejercicios que usan `alert` y `prompt` (como el cajero automático), abre `ejercicio_2_array_objetos/index.html` en un navegador:

```powershell
Start-Process "ejercicio_2_array_objetos\index.html"
```

## Autor

Jhoam Sebastian Muñoz B y Cristian Camilo Muñoz B. Todos los derechos reservados.
