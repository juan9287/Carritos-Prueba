const miCarrito = new carrito([])

function menuUser (){
    document.body.innerHTML=`<main class="mainApp">
    <nav>
    <button id="btnVolver"> Volver al menu </button>
    <button type="button" id="myBtn" data-toggle="modal" data-target="#carritoModal" class="verCarrito">VER CARRITO
    </button></nav>
    
    <section class="galeria">

    </section>
    
</main>`
let btnVolver = document.getElementById("btnVolver");
btnVolver.addEventListener("click", ()=>{
    menuInicial();
})
let mainApp = document.querySelector(".mainApp");         
mainApp.classList = "mainApp container"
crearTarjeta();
mostrarProductos();
logicaCarrito();





function logicaCarrito() {                     
    
    let verCarrito = document.querySelector(".verCarrito");
    
    verCarrito.addEventListener("click",()=>{
        
        mostrarCarrito(miCarrito);
        mostrarTotalCarrito();
        
        console.log(miCarrito)
        console.log(prodAlmacenados)


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
}}