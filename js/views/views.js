
function crearTarjeta() {                                  // Funcion para crear tarjetas en general
  
    let galeria = document.querySelector(".galeria");
    galeria.innerHTML=""
    galeria.classList = "galeria row row-cols-3"

    for (producto of prodAlmacenados) {
        let tarjetaProducto = document.createElement("div");


        tarjetaProducto.setAttribute("class", `card tarjetaProducto itemId${producto.id} col`)
        tarjetaProducto.setAttribute("style", "width:400px")
        galeria.appendChild(tarjetaProducto);
        tarjetaProducto.innerHTML = `
                                
                                <img src="./productos_img/producto_${producto.id}.jpg"class="imagenesProductos card-img-top" style="height:200px" alt="">
                                <div class="card-body">
                                <h3 class="card-title">${producto.nombre}</h3>
                                <p class="card-text">Precio :$${producto.precio}.- ${producto.um}</p>
                                <p class=" categoriaProducto card-text">Categoria :${producto.categoria}</p> 
                                <p id="prodStock"class="card-text">Stock: ${producto.stock}</p>
                                </div>`;
    }
}

function mostrarProductos() {                                             // Funcion para crear el cuerpo de la tarjeta con botones + , - y agregar, para libre uso.
 
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





function mostrarCarrito(carritoActual) {                                                    // Funcion para crear la vista del carrito
    
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
                                
        
        <div><img src="./productos_img/producto_${producto.id}.jpg"class="imagenesProductos card-img-top" style="height:50px ;width:50px" alt="">${producto.nombre}</div>
        <div>$${producto.precio}.-</div> 
        <div>${producto.cantidad}</div>
        <div>$${Number(producto.cantidad)*Number(producto.precio)}.-</div>  `

        $(".modal-body").append(productosCarrito);
        
    })
    $("#carritoModal").modal("toggle");

}

function mostrarTotalCarrito (){                                             // Funcion para crear linea del total del carrito.
    let totalCarrito = 0
    totalCarrito= miCarrito.calcularTotal();
    $(".totalCarrito").html("")
    $(".totalCarrito").text(`TOTAL $${totalCarrito}.-`)
}









// LADO ADMINISTRADOR

function ingresoProducto(){                                                               // Funcion para crear el formulario para agregar productos
        let mainUser = document.querySelector(".mainUser")
        mainUser.innerHTML = "";


        let formProductos = document.createElement("form");
        mainUser.appendChild(formProductos);
        formProductos.setAttribute("id", "formProductos")
        let propProductos = ["Nombre", "Precio", "Categoria","Cantidad","Um"];

        propProductos.forEach((propiedad) => {


            if (propiedad === "Categoria") {
                let categoriaProducto = document.createElement("div")
                categoriaProducto.innerHTML = `
                <label> Categoria </label>

                <select id="categoriaProducto">
                <option value="Panaderia">Panaderia</option>
                <option value="Tortas">Tortas</option>
                <option value="Catering">Catering</option>
                <option value="Sandwiches">Sandwiches</option>
                </select>
                `
                formProductos.appendChild(categoriaProducto)
                let select = document.getElementById('categoriaProducto');
                valueCategoria = select.options[select.selectedIndex].value;


            } 
            else if (propiedad==="Um"){
                let umProducto = document.createElement("div")
                umProducto.innerHTML = `
                <label> Unidad de Medida </label>

                <select id="umProducto">
                <option value="kg">KG</option>
                <option value="unidad">Unidad</option>
                <option value="docena">Docena</option>
                
                <option value="1/4kg">1/4 Kg</option>
                </select>
                `
                formProductos.appendChild(umProducto)
                let uMselect = document.getElementById('umProducto');
                valueUm = uMselect.options[uMselect.selectedIndex].value;

            }
            else {
                let labelProductos = document.createElement("label");
                labelProductos.innerHTML = propiedad;
                formProductos.appendChild(labelProductos);

                let inputProductos = document.createElement("input");
                formProductos.appendChild(inputProductos);
                let id = `${propiedad.toLowerCase()}Producto`
                inputProductos.setAttribute("id", id);
            }


        })

        let btnAgregar = document.createElement("button");
        btnAgregar.innerText = "AGREGAR"
        btnAgregar.setAttribute("onclick", "agregar()")
        btnAgregar.setAttribute("type", "buton")
        formProductos.appendChild(btnAgregar);

        let btnSalir = document.createElement("button");
        btnSalir.innerText = "Salir";
        btnSalir.addEventListener("click",()=>{
            menuAdmin();
        })
        formProductos.appendChild(btnSalir);
        
    

}






