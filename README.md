<div align="center">

# Ejercicios de Arrays y Objetos

*Colección de ejercicios prácticos en JavaScript para dominar arreglos y objetos*

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D14-3c873a?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![Sin dependencias](https://img.shields.io/badge/dependencias-ninguna-blue?style=flat-square)](#requisitos)
[![GitHub](https://img.shields.io/badge/repo-GitHub-181717?style=flat-square&logo=github)](https://github.com/JhoamSebastianMunoz/exercise-array-object)

[Contenido](#contenido) • [Estructura](#estructura-del-proyecto) • [Cómo clonar](#cómo-clonar) • [Uso](#uso)

</div>

Colección de ejercicios prácticos en **JavaScript** para el manejo de arreglos (arrays) y objetos, organizados en dos grupos: una serie de 11 ejercicios de fundamentos sobre arrays y dos simulaciones aplicadas (un cajero automático y un sistema de reservas de hotel).

## Características

- **11 ejercicios de fundamentos** que recorren desde la creación de un array hasta el uso de `reduce`, `filter`, `find` y el operador spread.
- **2 simulaciones aplicadas** que combinan arrays de objetos con lógica de negocio real.
- **Sin dependencias ni instalación**: solo se necesita un navegador o Node.js para ejecutarlos.
- **Código comentado** en español con el enunciado de cada ejercicio al inicio del archivo.

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
exercise-array-object/
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

## Requisitos

- Un navegador web moderno, o
- [Node.js](https://nodejs.org) 14 o superior (para ejecutar los archivos por consola).

No requiere instalación de dependencias ni proceso de compilación.

## Cómo clonar

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone https://github.com/JhoamSebastianMunoz/exercise-array-object.git
cd exercise-array-object
```

## Uso

Ejecuta cualquier archivo directamente con Node.js:

```powershell
node ejercicios_11_array/ejer_1.js
```

Para los ejercicios que usan `alert` y `prompt` (como el cajero automático), abre `ejercicio_2_array_objetos/index.html` en un navegador:

```powershell
Start-Process "ejercicio_2_array_objetos\index.html"
```

> [!NOTE]
> El cajero automático (`ejercicio_1.js`) usa `alert` y `prompt`, por lo que debe abrirse desde un navegador a través de `index.html`. Los demás archivos funcionan directamente con Node.js.

> [!TIP]
> Cada archivo incluye el enunciado del ejercicio como comentario en la parte superior, útil para repasar la lógica implementada.

## Autor

Jhoam Sebastian Muñoz B y Cristian Camilo Muñoz B. Todos los derechos reservados.
