


async function traerDatosClientes () {
    let mainAdmin =document.getElementById("mainAdmin");
    mainAdmin.innerHTML=`
    <button id="btnBack">Volver al menu</button>
    <table id="listadoClientes">
    <thead>
        <tr>
            <th class="centered">#ID</th>
            <th class="centered">Nombre</th>
            <th class="centered">Nombre de Usuario</th>
            <th class="centered">Email</th>
        </tr>
    </thead>
    <tbody id="tableBody_Users"></tbody>
    </table>`;

    let datos = await fetch("https://jsonplaceholder.typicode.com/users");
    let clientes = await datos.json();
    let listadoClientes = document.getElementById("listadoClientes");
    let btnBack= document.getElementById("btnBack");
    btnBack.addEventListener("click",()=>{
        menuAdmin();
    })
    clientes.forEach((cliente) => {
        let infoUsuario= document.createElement("tr")
        infoUsuario.innerHTML=`
        <td class='centered'>${cliente.id}</td>
        <td class='centered'>${cliente.name}</td>
        <td class='centered'>${cliente.username}</td>
        <td class='centered'>${cliente.email}</td>
        `;
        listadoClientes.appendChild(infoUsuario)})



    
}


function verListadoClientes (id,nombre,username,email){
    

    let tableBody = ``;
   
   



}