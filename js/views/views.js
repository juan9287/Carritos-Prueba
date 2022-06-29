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
                                <p class="card-text">Precio :$${producto.precio}.-</p>
                                <p class=" categoriaProducto card-text">Categoria :${producto.categoria}</p> 
                                </div>`;
    }
}

function mostrarProductos() {


    prodAlmacenados.forEach(producto => {
        let btnCarrito = document.createElement("div");
        btnCarrito.classList = "card-body"
        let cardItem = document.querySelector(`.itemId${producto.id}`)
        btnCarrito.innerHTML = ` <p>Cantidad</p>
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



let vistaCarrito = document.createElement("table");

function mostrarCarrito(miCarrito) {

    vistaCarrito.innerHTML = ""
    vistaCarrito.classList = "vistaCarrito table table-striped"
    vistaCarrito.setAttribute("id", "carritoActual")
    vistaCarrito.innerHTML = `
                          
                            
                            <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Subtotal</th>
                            </tr>
                            </thead>
                            <tbody class="listaProductos"></tbody>
                      `;
    mainApp.appendChild(vistaCarrito)
    let listaCarrito = document.querySelector(".listaProductos");


    miCarrito.producto.forEach(producto => {
        let productosCarrito = document.createElement("tr");
        productosCarrito.innerHTML = `
                                
                                <td>${producto.id}<img src="../productos_img/producto_${producto.id}.jpg"class="imagenesProductos card-img-top" style="height:100px ;width:100px" alt=""></td>
                                <td><p>${producto.nombre}</p></td>
                                <td><p>$${producto.precio}.-</p></td> 
                                <td><p>${producto.cantidad}</p></td>
                                <td><p>$${producto.cantidad*producto.precio}.-</p></td>   `
        listaCarrito.appendChild(productosCarrito)
    })

    $(document).ready(function(){

        $(".mainApp").append(`
        <div class="modal fade" id="carritoModal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                 
                            
                            <h4 >#</h4>
                            <h4 >Producto</h4>
                            <h4 >Precio</h4>
                            <h4 >Cantidad</h4>
                            <h4 >Subtotal</h4>
                            
                            
                </div>
                <div class="modal-body">
                <p>${producto.id}<p><img src="../productos_img/producto_${producto.id}.jpg"class="imagenesProductos card-img-top" style="height:100px ;width:100px" alt="">
                <p>${producto.nombre}</p>
                <p>$${producto.precio}.-</p> 
                <p>${producto.cantidad}</p>
                <p>$${Number(producto.cantidad)*Number(producto.precio)}.-</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

                </div>
        </div>`)

    })



}



function mostrarTotalCarrito() {
    let listaCarrito = document.querySelector(".listaProductos");
    let totalCarrito = document.createElement("tr");
    totalCarrito.classList = ""

    totalCarrito.innerHTML = ``;
    let total = miCarrito.calcularTotal();
    totalCarrito.innerHTML = `<td class ="text-end" colspan="4">TOTAL =</td><td> $${total}.-</td>`

    listaCarrito.appendChild(totalCarrito)




}