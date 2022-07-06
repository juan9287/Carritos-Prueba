let totalStock = "";

 
function menuAdmin() {
    document.body.innerHTML = `<section id="mainAdmin" class="mainAdmin galeria">
    <button id="btnAgregarProducto">Agregar Prductos</button>
    <button id="btnVerProductos">Actualizar Stock</button>
    <button id="btnClientes">Ver listado de clientes</button>
    <button id="btnSalir">Salir</button>  
    </section>  `
    let mainAdmin =document.getElementById("mainAdmin");

    let btnAgregarProducto = document.getElementById("btnAgregarProducto");
    btnAgregarProducto.addEventListener("click", () => {
        ingresoProducto();
    })
    let verProductos = document.getElementById("btnVerProductos");
    verProductos.addEventListener("click", () => {
        actualizarStock();

    })

    let btnSalir = document.getElementById("btnSalir");
    btnSalir.addEventListener("click", () => {

        menuInicial();

    })

    let btnClientes =document.getElementById("btnClientes")
    btnClientes.addEventListener("click", ()=>{
        traerDatosClientes();
    })
}



function actualizarStock() {
    crearTarjeta();
    mostrarProductos();
    let header = document.createElement("div");
    header.innerHTML = `<h1>ACTUALIZAR STOCK</h1>
                    <button id="btnBack">Volver al Menu</button>
    `
    document.body.prepend(header)

    let btnBack = document.getElementById("btnBack");
    btnBack.addEventListener("click", () => {
        menuAdmin();
    })

    prodAlmacenados.forEach(producto => {

        let btnAgregar = document.getElementById(`btnAgregar${producto.id}`);
        btnAgregar.setAttribute("type", "button");;
        btnAgregar.addEventListener("click", () => {

            let cantidad = document.getElementById(`itemCantidad${producto.id}`).value;
            totalStock = Number(Number(producto.stock) + Number(cantidad));
            producto.stock = totalStock

            Productos[producto.id - 1].stock = totalStock
            almacenarProd()
            header.innerHTML=""
            actualizarStock()

        })
    });
}



function agregar() { //EJECUCION DE AGREGAR PRODUCTOS
    let idProducto = 1;
    if (Productos.length > 0) {
        idProducto = Productos[Productos.length - 1].id + 1;
    };
    let nombreProducto = document.getElementById("nombreProducto").value;
    let categoriaProducto = valueCategoria;
    let umProducto = valueUm;
    let precioProducto = document.getElementById("precioProducto").value;
    precioProducto = Number(precioProducto);
    let stockProducto = Number(document.getElementById("cantidadProducto").value);
    let um = document.getElementById("umProducto");

    if ((nombreProducto !== "") && (categoriaProducto !== "")) {
        let nuevoProducto = new productos(nombreProducto, idProducto, precioProducto, categoriaProducto, umProducto, stockProducto)

        Productos.push(nuevoProducto);
        almacenarProd()
        traerProductos()
        console.log(prodAlmacenados, Productos)
        ingresoProducto();

        swal({
            title: "PRODUCTO AGREGADO EXITOSAMENTE",
            icon: "success",
        })

    } else {

        swal({
            title: "POR FAVOR NO DEJAR CAMPOS EN BLANCO",
            icon: "error",
        });
        ingresoProducto();
    }


}