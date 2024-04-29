const filasTablas = [document.getElementsByTagName("input")];
let contadorAdmins = 0;
const filasIconos = [document.getElementsByTagName("i")];
const userTable = document.getElementById("usersTable");
let memoriaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
let memoriaCatalogo = JSON.parse(localStorage.getItem("catalogo"));
const usuarios = [];
const div = document.createElement("div");
const mensaje = document.createElement("div");


window.addEventListener('beforeunload', function (e) {
    
});

document.addEventListener("DOMContentLoaded", function () {




    const memoria = JSON.parse(localStorage.getItem("usuarios"));

    const uActivoNombre = document.getElementById("uActivo");

    const activo = JSON.parse(localStorage.getItem("uActivo"));

    uActivoNombre.innerHTML = "Bienvenido(a), " + activo[0].name;

    const loginIcono = document.getElementById("login");
    const liga = document.getElementById("loginRef");

    loginIcono.className = "fa-solid fa-power-off";

    

    liga.href = "javascript:logout()";


    






});


function generarListadoCatalogo() {
    const divPadre = document.getElementById("listado");
    

    const div = document.createElement("div");

    
    div.id = "tablaCatalogo";

   

  
   
    const crearNuevo = document.getElementById("tablaCatalogo");




    div.innerHTML = `
        
    <table class="table" id="catalogTable">
    
        <thead class="thead-dark">
        
            <tr>
                <th scope="col">Accion</th>
                <th scope="col">ID</th>
                <th scope="col">ENLACE IMAGEN</th>
                <th scope="col">MINIATURA</th>
                <th scope="col">PRECIO</th>
                <th scope="col">NOMBRE</th>
            </tr>
        </thead>
    </table>
    `;
    divPadre.appendChild(div);

    const catalogTable = document.getElementById("catalogTable");

    memoriaCatalogo.forEach((item) => {
        const fila = document.createElement("tbody");
        fila.innerHTML = `
        <td><a href="#"><i class="fa-solid fa-trash"  id="${item.id}" onclick="borrarArticulo()" ></i></a>
        <a href="#"><i class="fa-solid fa-pencil"  onclick="editarArticulo()" id="${item.id}"></i></a>
        <a href="#" ><i class="fa-solid fa-floppy-disk" id="${item.id}" onclick="guardarArticulo()" ></i> </a>
        </td>

        
        <td id="id" >${item.id}</td>
        
        <td><input id="${item.id}" type="text" disabled value=${item.imagen}></td> 
        <td><img src="${item.imagen}" style=width:100px></td> 
        <td><input id="${item.id}" type="text" disabled value=${item.precio}></td>
        <td><input id="${item.id}" type="text" disabled value=${item.nombre}></td>
         
        `;

        fila.id = "filasTablas";
        catalogTable.appendChild(fila);


    });

}



function crearFormulario() {
    div.id = "divsd";

    const divPadre = document.getElementById("listado");
    const tablaUsuarios = document.getElementById("tablaUsuarios");
    const tablaCatalogo = document.getElementById("tablaCatalogo");





    div.innerHTML = `
    <form id="formularioUser">
  <div class="form-row">

    <div class="form-group col-md-6">
      <label for="inputNombre">Nombre</label>
      <input type="text" class="form-control" id="inputNombre">
    </div>

    <div class="form-group col-md-6">
      <label for="inputPassword4">Apellido</label>
      <input type="text" class="form-control" id="inputApellido" >
    </div>
    <div class="form-group col-md-6">
      <label for="inputUsuario">Usuario</label>
      <input type="text" class="form-control" id="inputUsuario" >
    </div>

    <div class="form-group col-md-6">
    <label for="inputEmail4">Contraseña</label>
    <input type="text" class="form-control" id="inputContraseña" >
  </div>

  <div class="form-group col-md-6">
    <input class="form-check-input" type="checkbox" id="lvladmin">Admin

  </div>

</div>
  
  <button type="submit" class="btn btn-primary" onClick="crear()">Crear</button>
  <button type="submit" class="btn btn-primary" onClick="limpiar()">Nuevo</button>
</form>
    `;
    divPadre.appendChild(div);

}





function crearFormularioArticulo() {
    div.id = "divsd";

    const divPadre = document.getElementById("listado");
    const tablaUsuarios = document.getElementById("tablaUsuarios");
    const tablaCatalogo = document.getElementById("tablaCatalogo");






    div.innerHTML = `
    <form id="formNuevoArt">
  <div class="form-row">

    <div class="form-group col-md-6">
      <label for="inputNombre">Nombre</label>
      <input type="text" class="form-control" id="inputNombre">
    </div>

    <div class="form-group col-md-6">
      <label for="inputPassword4">Enlace Imagen</label>
      <input type="text" class="form-control" id="inputEnlace" >
    </div>
    <div class="form-group col-md-6">
      <label for="inputUsuario">Precio</label>
      <input type="number" class="form-control" id="inputPrecio" >
    </div>

   
  </div>

</div>
  
  <button type="submit" class="btn btn-primary" onClick="crearArticulo()">Crear</button>
  <button type="submit" class="btn btn-primary" onClick="limpiar()">Nuevo</button>
</form>
    `;
    divPadre.appendChild(div);
}


function limpiar() {
    mostrarMensajeFormUsuario("", "");
    lvladmin = document.getElementById("lvladmin");

    inputContraseña = document.getElementById("inputContraseña");
    inputApellido = document.getElementById("inputApellido");
    inputUsuario = document.getElementById("inputUsuario");
    inputNombre = document.getElementById("inputNombre");

    inputContraseña.value = "";
    inputApellido.value = "";
    inputNombre.value = "";
    inputUsuario.value = "";

    lvladmin.checked = false;




}
function mostrarMensajeFormUsuario(alerta, cadena) {
    mensaje.role = "alert";
    mensaje.classList = alerta;

    mensaje.innerHTML = cadena;



    div.appendChild(mensaje);



}



function crearArticulo() {
    var id = memoriaCatalogo[memoriaCatalogo.length - 1].id + 1;

    let nuevo = [];
    const nombre = document.getElementById("inputNombre").value;
    const enlace = document.getElementById("inputEnlace").value;
    const precio = document.getElementById("inputPrecio").value;

    nuevo = { id: id, imagen: enlace, nombre: nombre, precio: precio };
    id++;
    const userExiste = memoriaCatalogo.find((item) => item.enalce === nuevo.user);

    memoriaCatalogo.push(nuevo);




    localStorage.setItem("catalogo", JSON.stringify(memoriaCatalogo));

}

function crear() {



    let admin = false;
    let nuevo = [];
    const nombre = document.getElementById("inputNombre").value;
    const apellido = document.getElementById("inputApellido").value;
    const usuario = document.getElementById("inputUsuario").value;
    const contrasena = document.getElementById("inputContraseña").value;
    const lvl = document.getElementById("lvladmin");
    var id = 0;

    if (lvl.checked == true) {
        admin = true;
    }
    if (memoriaUsuarios.length == 0) {
        id = 100;
    } else
        memoriaUsuarios[memoriaUsuarios.length - 1].id + 1




    nuevo = { id: id, user: usuario, name: nombre, lastName: apellido, password: contrasena, admin: admin };
    id++;
    const userExiste = memoriaUsuarios.find((item) => item.user === usuario);



    if (userExiste) {

        mostrarMensajeFormUsuario("alert alert-warning", "Usuario ya existe");
    }

    else {
        memoriaUsuarios.push(nuevo);
        mostrarMensajeFormUsuario("alert alert-success", "Usuario agregado con éxito");
    }

    localStorage.setItem("usuarios", JSON.stringify(memoriaUsuarios));


}

function buscarIdIcono() {
    const newMemoria = memoriaUsuarios;
    let numeroIcono = parseInt(event.currentTarget.id);



    return numeroIcono;
}


function enableInput(id, condicion, tabla) {




    const table = document.getElementById(tabla);

    const fila = table.querySelectorAll("input");




    fila.forEach(element => {

        if (element.id == id) {

            element.disabled = condicion;

        }

    });

}
function enableInputCatalog(id, condicion) {




    const table = document.getElementById("catalogTable");

    const fila = table.querySelectorAll("input");




    fila.forEach(element => {

        if (element.id == id) {

            element.disabled = condicion;

        }

    });

}
function guardarArticulo() {
    let numeroIcono = buscarIdIcono();


    let index = memoriaCatalogo.findIndex(element => element.id === numeroIcono);



    const table = document.getElementById("catalogTable");

    const fila = table.querySelectorAll("input");

    const userValuesArray = [];



    fila.forEach(element => {


        if (element.id == numeroIcono) {

            if (element.type === "checkbox")
                userValuesArray.push(element.checked);

            else
                userValuesArray.push(element.value);


        }


    });
    console.log(userValuesArray);
    memoriaCatalogo[index].imagen = userValuesArray[0];
    memoriaCatalogo[index].precio = parseInt(userValuesArray[1]);
    memoriaCatalogo[index].nombre = userValuesArray[2];



    enableInput(numeroIcono, true, "catalogTable");
    localStorage.setItem("catalogo", JSON.stringify(memoriaCatalogo));
}
function guardar() {

    let numeroIcono = buscarIdIcono();


    let index = memoriaUsuarios.findIndex(element => element.id === numeroIcono);



    const table = document.getElementById("usersTable");

    const fila = table.querySelectorAll("input");

    const userValuesArray = [];



    fila.forEach(element => {


        if (element.id == numeroIcono) {

            if (element.type === "checkbox")
                userValuesArray.push(element.checked);

            else
                userValuesArray.push(element.value);


        }

    });
    memoriaUsuarios[index].admin = userValuesArray[0];
    memoriaUsuarios[index].name = userValuesArray[1];
    memoriaUsuarios[index].lastName = userValuesArray[2];
    memoriaUsuarios[index].user = userValuesArray[3];
    console.log(userValuesArray[1]);


    enableInput(numeroIcono, true, "usersTable");
    localStorage.setItem("usuarios", JSON.stringify(memoriaUsuarios));




}

function editarArticulo() {



    let numeroIcono = buscarIdIcono();



    enableInput(numeroIcono, false, "catalogTable");


}
function editar() {



    let numeroIcono = buscarIdIcono();



    enableInput(numeroIcono, false, "usersTable");


}
function borrarArticulo() {
    const divPadre = document.getElementById("mensajes");

    let numeroIcono = buscarIdIcono();



    let newMemoria = JSON.parse(localStorage.getItem("catalogo"));



    let index = newMemoria.findIndex(element => element.id === numeroIcono);

    memoriaCatalogo.splice(index, 1);

    mostrarMensajeFormUsuario("alert alert-success", "Articulo eliminado");
    divPadre.appendChild(mensaje);

    localStorage.setItem("catalogo", JSON.stringify(memoriaCatalogo));



}

function borrar() {
    const divPadre = document.getElementById("mensajes");

    let numeroIcono = buscarIdIcono();



    let newMemoria = JSON.parse(localStorage.getItem("usuarios"));



    let index = newMemoria.findIndex(element => element.id === numeroIcono);

    if (memoriaUsuarios[index].admin == true && contadorAdmins == 1) {
        mostrarMensajeFormUsuario("alert alert-warning", "Designa un usuario como admin antes de eliminar");

    }
    else {
        if (memoriaUsuarios[index].admin === true)
            contadorAdmins--;

        memoriaUsuarios.splice(index, 1);
        mostrarMensajeFormUsuario("alert alert-success", "Usuario eliminado");

    }


    divPadre.appendChild(mensaje);

    localStorage.setItem("usuarios", JSON.stringify(memoriaUsuarios));



    generarListadoUsuarios();


}

function generarListadoUsuarios() {

    const div = document.createElement("div");
    div.id = "tablaUsuarios";

    const divPadre = document.getElementById("listado");
    const crearNuevo = document.getElementById("divsd");





    div.innerHTML = `
    
    <table class="table" id="usersTable">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Accion</th>
                <th scope="col">ID</th>
                <th scope="col">ADMIN</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Usuario</th>
            </tr>
        </thead>
    </table>
    `;
    divPadre.appendChild(div);

    const userTable = document.getElementById("usersTable");
    const checkbox = userTable.querySelectorAll("input");
    memoriaUsuarios.forEach((item) => {
        let checked = "";


        if (item.admin == true) {
            checked = "checked";
            contadorAdmins++;
        }


        const fila = document.createElement("tbody");
        fila.innerHTML = `
        <td><a href="#"><i class="fa-solid fa-trash"  id="${item.id}" onclick="borrar()" ></i></a>
        <a href="#"><i class="fa-solid fa-pencil"  onclick="editar()" id="${item.id}"></i></a>
        <a href="#" ><i class="fa-solid fa-floppy-disk" id="${item.id}" onclick="guardar()" ></i> </a>
        </td>

        
        <td id="id" >${item.id}</td>
       
        <td><input id="${item.id}" type="checkBox" ${checked} disabled  ></td>
        <td><input id="${item.id}" type="text" disabled value=${item.name}></td> 
        <td><input id="${item.id}" type="text" disabled value=${item.lastName}></td>
        <td><input id="${item.id}" type="text" disabled value=${item.user}></td>
         
        `;


        userTable.appendChild(fila);


    });

}


function logout() {
    alert("Sesion terminada");
    localStorage.removeItem("uActivo");
    location.assign("index.html");
}