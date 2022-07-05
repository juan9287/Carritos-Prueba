
class productos {
    constructor(nombre, id, precio, categoria,um,stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.categoria=categoria
        this.um=um;
        this.stock=stock;
    }
};
const producto1 = new productos("SELVA NEGRA", 1, 3000, "Tortas", "Unidad","10");
const producto2 = new productos("BAGUETTES", 2, 200, "Panaderia","Kg","10");
const producto3 = new productos("TRIPLE JYQ", 3, 150, "Sandwiches","Unidad","10");
const producto4 = new productos("SERVICIO CUMPLEAÑOS", 4, 6000, "Catering", "unidad","10");
const producto5 = new productos("MEDIALUNAS DE MANTECA", 5, 440, "Panaderia", "Docena","10");
const producto6 = new productos("CHIPA", 6, 200, "Panaderia","1/4 kg","10");
const producto7 = new productos("TRIPLE ROQUEFORT", 7, 150, "Sandwiches","Unidad","10");
const producto8 = new productos("SERVICIO VEGANO", 8, 6000, "Catering","Unidad","10");
const producto9 = new productos("MEDIALUNAS DE GRASA", 9, 440, "Catering","Docena","10");
const Productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9];
almacenarProd();
function almacenarProd() {
    localStorage.setItem("Productos", JSON.stringify(Productos))
}

let prodAlmacenados = JSON.parse(localStorage.getItem("Productos"));
function traerProductos (){
    prodAlmacenados = JSON.parse(localStorage.getItem("Productos"));

}
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