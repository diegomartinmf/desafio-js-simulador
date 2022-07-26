//

// Creo la clase producto que servirá para agregar los productos (instancias de clase: objetos) al carrito
class Producto {
    constructor(producto) {
        this.id = producto.id;
        this.nombre_hierba = producto.nombre_hierba;
        this.unidad_hierba = producto.unidad_hierba;
        this.precio_unitario = producto.precio_unitario;
        this.habilitado = true;
        this.stock_inicial = 5;
        this.cantidad = 1;
    }

    obtenerNombre() {
        return this.nombre_hierba;
    }

    quitarStock() {
        this.stock_inicial--;
    }

    deshabilitarProducto() {
        this.habilitado = false;
    }


}

const productos = [{
        id: 1,
        nombre_hierba: 'diente_de_leon',
        unidad_hierba: 'gramo',
        precio_unitario: 50,
    },
    {
        id: 2,
        nombre_hierba: 'artemisa_annua',
        unidad_hierba: 'gramo',
        precio_unitario: 50,
    }

]