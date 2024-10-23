const productos = [
    { id: 1, nombre: "Nagaraku pelo por pelo tam. 5mm a 14mm", precio: 5000, stock: 50 },
    { id: 2, nombre: "Cinta hipoalergenica ", precio: 1500, stock: 15 },
    { id: 3, nombre: "Pinza recta", precio: 15000, stock: 6 },
    { id: 4, nombre: "Pinza curva", precio: 19000, stock: 10 },
    { id: 5, nombre: "Adhesivo cherimoya", precio: 27000, stock: 5 },
    { id: 6, nombre: "Lash shampoo", precio: 4000, stock: 10 },
    { id: 7, nombre: "Parches hidrogel x1 uni", precio: 180, stock: 100 },
];


const agregarProducto = ({ nombre, precio, stock }) => {
    const nuevoId = productos.length ? productos[productos.length - 1].id + 1 : 1;
    productos.push({ id: nuevoId, nombre, precio, stock });
    mostrarProductos();
}

const mostrarProductos = () => {
    let mensajeInformativo = "";
    for (let producto of  productos) {
        mensajeInformativo += `

        ID : ${producto.id}
        nombre : ${producto.nombre}
        precio: ${producto.precio}
        stock: ${producto.stock} \n
        `;
    }
    console.log(mensajeInformativo);
};

const solicitarDatosDelProducto = () => {
    let nombreProducto = prompt("Por favor ingresa el nombre del producto");
    let precioDelProducto = parseFloat(
        prompt("Por favor ingresa el precio del producto")
    );
    let stock = parseInt(
        prompt("A continuacion, ingresa la cantidad de unidades disponible")
    );
    if (nombreProducto && !isNaN(precioDelProducto) && !isNaN(stock)) {
        return { nombre: nombreProducto, precio: precioDelProducto, stock };
    } else {
        alert("Por favor ingresa datos validos");
    }
};

const eliminarProducto = (nombre) => {
    const indice = productos.findIndex(
        (producto) => producto.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (indice !== -1) {
        productos.splice(indice, 1);
        console.log(`Producto ${nombre} eliminado con exito`);
        mostrarProductos();
    } else {
        alert(`Producto ${nombre} no encontrado`);
    }
};

const encontrarOfertas = (precioMaximo) => {
    const productosBaratos = productos.filter(
        (producto) => producto.precio < precioMaximo
    );

    if (productosBaratos.length > 0) {
        console.log("Productos más baratos que " + precioMaximo + ":");
        productosBaratos.forEach((producto) => {
            console.log(producto.nombre);
        });
    } else {
        console.log("No hay productos mas baratos que :" + precioMaximo);
    }
};



const main = () => {
    let opcion = "";

    while (opcion !== "5") {
        opcion = prompt(
            "Selecciona una opcion: \n1. Ver Productos \n2. Agregar Productos \n3. Eliminar Producto \n4. Productos Baratos \n5. Salir"
        );


        switch (opcion) {
            case "1":
                mostrarProductos();
                break;

            case "2":
                const nuevoProducto = solicitarDatosDelProducto();
                if (nuevoProducto) {
                    agregarProducto(nuevoProducto);
                }
                break;

            case "3":
                const productoAEliminar = prompt(
                    "ingresa el nombre del producto a eliminar"
                );
                eliminarProducto(productoAEliminar);
                break;

            case "4":
                const precioMaximo = parseFloat(
                    prompt("Ingresa el precio maximo, para encontrar productos más económicos")
                );
                encontrarOfertas(precioMaximo);
                break;

            case "5":
                console.log("Saliendo...");
                break;

            default:
                alert("Opcion no valida . Por favor selecciona nuevamente");
        }
    };
};

main();