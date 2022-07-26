// Script para consultar datos de productos a comprar en carrito de compras
const productos = [{
        id: 1,
        nombre_hierba: 'Diente de León',
        unidad_hierba: 'Bolsa de 100 gramos',
        precio_unitario: 75,
    },
    {
        id: 2,
        nombre_hierba: 'Menta Piperita',
        unidad_hierba: 'Bolsa de 100 gramos',
        precio_unitario: 65,
    },
    {
        id: 3,
        nombre_hierba: 'Salvia',
        unidad_hierba: 'Bolsa de 100 gramos',
        precio_unitario: 78,
    },
    {
        id: 4,
        nombre_hierba: 'Carqueja',
        unidad_hierba: 'Bolsa de 100 gramos',
        precio_unitario: 60,
    }
]

function solicitarProducto() {
    let producto = parseInt(prompt("Ingrese el número de acuerdo al producto a agregar al carrito. De acuerdo a: '1-Diente de León','2-Menta Piperita','3-Salvia','4-Carqueja'"))
    if (producto === null || producto === "") {
        alert('Usted no ha escrito un producto válido');
        // Llamo recursivamente a la función hasta que ingrese un dato válido

        solicitarProducto();
    } else {
        switch (producto) {
            case producto = 1:
                {
                    alert("Usted ha elegido el producto: " + productos[0].nombre_hierba);
                    break;
                }
            case producto = 2:
                {
                    alert("Usted ha elegido el producto: " + productos[1].nombre_hierba);
                    break;
                }
            case producto = 3:
                {
                    alert("Usted ha elegido el producto: " + productos[2].nombre_hierba);
                    break;
                }
            case producto = 4:
                {
                    alert("Usted ha elegido el producto: " + productos[3].nombre_hierba);
                    break;
                }
            default:
                {
                    alert("Usted no ha elegido un producto de la lista");
                    // Llamo recursivamente a la función hasta que ingrese un valorde la lista
                    solicitarProducto();
                }
        }
    }
    return producto;

}

function solicitarCantidad() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de unidades del producto anterior"))
    if (cantidad === null || cantidad === "" || isNaN(cantidad)) {
        alert('Usted no ha escrito una cantidad válida producto válido');
        // la llamo recursivamente hasta que ingrese cantidad válida
        solicitarCantidad();
    } else {
        alert('Usted ha escrito una cantidad de : ' + cantidad);

    }
    return cantidad;
}

function calcularCosto(cant, p) {
    let costo = cant * p.precio_unitario
    return costo;

}

function preguntarAgregar() {
    let pregunta_inicial = confirm("Desea agregar un producto al carrito")
    return pregunta_inicial
}

let a = "";
let mensaje = "";
entrada = preguntarAgregar();
while (entrada) {
    const prod = solicitarProducto();
    console.log(prod);
    const cant = solicitarCantidad();
    console.log(cant);
    const costo = calcularCosto(cant, productos[prod - 1]);
    mensaje = "Nombre: " + productos[prod - 1].nombre_hierba + ", Cantidad: " + cant + ", Precio Total: $" + costo;
    a = a + "\n" + mensaje;
    alert(a);
    entrada = preguntarAgregar();
}