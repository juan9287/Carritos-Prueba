
function crearTarjeta() {


    let galeria = document.querySelector(".galeria");
    galeria.classList = "galeria row row-cols-3"

    for (producto of prodAlmacenados) {
        let tarjetaProducto = document.createElement("div");


        tarjetaProducto.setAttribute("class", `card tarjetaProducto itemId${producto.id} col`)
        tarjetaProducto.setAttribute("style", "width:400px")
        galeria.appendChild(tarjetaProducto);
        tarjetaProducto.innerHTML = `
                                
                                <img src="../productos_img/producto_${producto.id}.jpg"class="imagenesProductos card-img-top" style="height:200px" alt="">
                                <div class="card-body">
                                <h3 class="card-title">${producto.nombre}</h3>
                                <p class="card-text">Precio :$${producto.precio}.- ${producto.um}</p>
                                <p class=" categoriaProducto card-text">Categoria :${producto.categoria}</p> 
                                </div>`;
    }
}

function mostrarProductos() {


    prodAlmacenados.forEach(producto => {
        let btnCarrito = document.createElement("div");
        btnCarrito.classList = "card-body"
        let cardItem = document.querySelector(`.itemId${producto.id}`)
        btnCarrito.innerHTML = ` <p>Cantidad:</p>
    <input id="itemCantidad${producto.id}" type="" value="0">
    <button class="btn btn-light" id="btnAdd${producto.id}">+</button>   
    <button class="btn btn-light" id="btnRemove${producto.id}">-</button>
    <button class="btn btn-light" id="btnAgregar${producto.id}">AGREGAR</button>`
        cardItem.appendChild(btnCarrito)
        let btnAdd = document.getElementById(`btnAdd${producto.id}`);
        let btnRemove = document.getElementById(`btnRemove${producto.id}`);
        let itemCantidad = document.getElementById(`itemCantidad${producto.id}`);


        btnAdd.addEventListener("click", () => {
            let cantidad = Number(Number(itemCantidad.value) + 1)

            itemCantidad.value = cantidad

        })

        btnRemove.addEventListener("click", () => {
            let cantidad = Number(Number(itemCantidad.value) - 1)
            if (cantidad <= 0) {
                itemCantidad.value = 0
            } else {
                itemCantidad.value = cantidad
            }


        })

    })
}





function mostrarCarrito(carritoActual) {
    
    $(".mainApp").append(`
    <div class="modal fade" id="carritoModal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                 
                            
                           
                            <h4 >Producto</h4>
                            <h4 >Precio</h4>
                            <h4 >Cantidad</h4>
                            <h4 >Subtotal</h4>
                            
                            
                </div>
                <div class="modal-body container">
                
                </div>
                <div class="modal-footer footer-cart">
                
                <button>COMPRAR</button>
                <button>SEGUIR ELIGIENDO</button>
                <h4 class="totalCarrito"></h4>

                </div>
        </div>`)
    $(".modal-body").html("")
    carritoActual.producto.forEach(producto => {



        let productosCarrito = document.createElement("div");
        productosCarrito.classList="row row-cols-4"
        productosCarrito.innerHTML = `
                                
        
        <div><img src="../productos_img/producto_${producto.id}.jpg"class="imagenesProductos card-img-top" style="height:50px ;width:50px" alt="">${producto.nombre}</div>
        <div>$${producto.precio}.-</div> 
        <div>${producto.cantidad}</div>
        <div>$${Number(producto.cantidad)*Number(producto.precio)}.-</div>  `

        $(".modal-body").append(productosCarrito);
        
    })
    $("#carritoModal").modal("toggle");

}

function mostrarTotalCarrito (){
    let totalCarrito = 0
    totalCarrito= miCarrito.calcularTotal();
    $(".totalCarrito").html("")
    $(".totalCarrito").text(`TOTAL $${totalCarrito}.-`)
}



