class productos {
    constructor(nombre, id, precio, categoria) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.categoria=categoria
    }
};
const producto1 = new productos("SELVA NEGRA", 1, 3000, "Tortas");
const producto2 = new productos("BAGUETTES", 2, 200, "Panaderia");
const producto3 = new productos("TRIPLE JYQ", 3, 150, "Sandwiches");
const producto4 = new productos("SERVICIO CUMPLEAÑOS", 4, 6000, "Catering");
const producto5 = new productos("MEDIALUNAS DE MANTECA", 5, 3000, "Panaderia");
const producto6 = new productos("CHIPA", 6, 200, "Panaderia");
const producto7 = new productos("TRIPLE ROQUEFORT", 7, 150, "Sandwiches");
const producto8 = new productos("SERVICIO VEGANO", 8, 6000, "Catering");
const Productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8];

function almacenarProd() {
    localStorage.setItem("Productos", JSON.stringify(Productos))
}
almacenarProd()
let prodAlmacenados = JSON.parse(localStorage.getItem("Productos"));


class carrito {
    constructor(producto){
        this.producto=producto
    }


    agregarProducto(producto)
    {
        const esta = this.producto.find(element=>producto.id===element.id);
        

        if(esta)
        {
            esta.cantidad = producto.cantidad+esta.cantidad
        }
        else 
        {
            this.producto.push(producto);
        }

        
    }

    calcularTotal()
    {
        let total = 0;
        for(let i=0;i<this.producto.length;i++)
        {
            total+=this.producto[i].precio*this.producto[i].cantidad;
        }
        return total;
    }   
}