let mainApp = document.querySelector(".mainApp");
mainApp.classList = "mainApp container"
crearTarjeta();
mostrarProductos();
logicaCarrito();



const miCarrito = new carrito([])

function logicaCarrito() {
    
    let verCarrito = document.querySelector(".verCarrito");
    
    verCarrito.addEventListener("click",()=>{
        
        mostrarCarrito(miCarrito);
        mostrarTotalCarrito();
        
        console.log(miCarrito)


    })
    prodAlmacenados.forEach(producto => {

        let btnAgregar = document.getElementById(`btnAgregar${producto.id}`);
        btnAgregar.setAttribute("type", "button");;
        btnAgregar.addEventListener("click", () => {

                const productoParaCarrito = {
                    ...producto,
                    cantidad: 1,
                }

                let cantidad = document.getElementById(`itemCantidad${producto.id}`);
                productoParaCarrito.cantidad = Number(cantidad.value)
                miCarrito.agregarProducto(productoParaCarrito)
                
               
                
                
                


            }



        )
    })
}