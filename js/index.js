

menuInicial();
function menuInicial (){

    document.body.innerHTML=`
    <h1>POR FAVOR SELECCIONE UNA OPCION</h1>
    <main class="container justify-center">
        <div class="row row-cols-2">
        <img id="imgAdmin" src="https://cdn-icons-png.flaticon.com/512/2082/2082875.png " alt="adminImg">
        <img id= "imgUser" src="https://cdn-icons-png.flaticon.com/512/746/746900.png" alt="userImg">
    </div>
    </main>`
    let imgUser= document.getElementById("imgUser");
    imgUser.addEventListener("click",()=>{
    menuUser()
})
    let imgAdmin=document.getElementById("imgAdmin");
    imgAdmin.addEventListener("click",()=>{
    menuAdmin()
})

}


