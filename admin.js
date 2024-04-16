const filasTablas = [document.getElementsByTagName("input")];

const filasIconos = [document.getElementsByTagName("i")];
const userTable = document.getElementById("usersTable");
let mensaje = document.createElement("div");
let memoriaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
let memoriaCatalogo = JSON.parse(localStorage.getItem("catalogo"));
const usuarios = [];
let listadoId = [];
const div = document.createElement("div");


document.addEventListener("DOMContentLoaded", function () {


    // generarListadoUsuarios();
    const memoria = JSON.parse(localStorage.getItem("usuarios"));

    console.log(document.getElementsByTagName("div"));







});


function generarListadoCatalogo() {
    const div = document.createElement("div");
    div.id = "tablaCatalogo";

    const divPadre = document.getElementById("listado");
    const crearNuevo = document.getElementById("tablaCatalogo");


    if (divPadre.contains(crearNuevo))

        crearNuevo.remove();

    if (!divPadre.contains(div)) {
        div.innerHTML = `
    
    <table class="table" id="usersTable">
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
        const catalogTable = document.getElementById("usersTable");
        memoriaCatalogo.forEach((item) => {
            const fila = document.createElement("tbody");
            fila.innerHTML = `
        <td><a href="#"><i class="fa-solid fa-trash"  id="${item.id}" onclick="borrar()" ></i></a>
        <a href="#"><i class="fa-solid fa-pencil"  onclick="editar()" id="${item.id}"></i></a>
        <a href="#" ><i class="fa-solid fa-floppy-disk" id="${item.id}" onclick="guardar()" ></i> </a>
        </td>

        
        <td id="id" >${item.id}</td>
        
        <td><input id="${item.id}" type="text" disabled value=${item.imagen}></td> 
        <td><img src="${item.imagen}" style=width:100px></td> 
        <td><input id="${item.id}" type="text" disabled value=${item.precio}></td>
        <td><input id="${item.id}" type="text" disabled value=${item.nombre}></td>
         
        `;

            // fila.id = "filasTablas";
            catalogTable.appendChild(fila);


        });

    }
}


function crearFormulario() {
    div.id = "divsd";

    const divPadre = document.getElementById("listado");
    const tablaUsuarios = document.getElementById("tablaUsuarios");
    const tablaCatalogo = document.getElementById("tablaCatalogo");


    if (divPadre.contains(tablaUsuarios))

        tablaUsuarios.remove();



    if (!divPadre.contains(document.getElementById("divsd"))) {
        div.innerHTML = `
    <form>
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
    <input class="form-check-input" type="checkbox" id="lvladmin">
      <label class="form-check-label" for="gridCheck" >
        Admin
      </label>
  </div>

</div>
  
  <button type="submit" class="btn btn-primary" onClick="crear()">Crear</button>
  <button type="submit" class="btn btn-primary" onClick="limpiar()">Nuevo</button>
</form>
    `;
        divPadre.appendChild(div);
    }



}

function crearFormularioArticulo() {
    div.id = "divsd";

    const divPadre = document.getElementById("listado");
    const tablaUsuarios = document.getElementById("tablaUsuarios");
    const tablaCatalogo = document.getElementById("tablaCatalogo");


    if (divPadre.contains(tablaUsuarios))

        tablaUsuarios.remove();



    if (!divPadre.contains(document.getElementById("divsd"))) {
        div.innerHTML = `
    <form>
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

}

function mostrarWarning() {

    mensaje.classList.add("alert", "alert-warning");
    mensaje.role = "alert";
    mensaje.innerHTML = "Usuario ya existe en sistema";
    div.appendChild(mensaje);

}

function mostrarExito(cadena) {
    divPadre.appendChild(div);
    mensaje.classList.add("alert", "alert-success");
    mensaje.role = "alert";
    mensaje.innerHTML = "cadena";
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
    var id = memoriaUsuarios[memoriaUsuarios.length - 1].id + 1;
    let admin=false;
    let nuevo = [];
    const nombre = document.getElementById("inputNombre").value;
    const apellido = document.getElementById("inputApellido").value;
    const usuario = document.getElementById("inputUsuario").value;
    const contrasena = document.getElementById("inputContraseña").value;
    const lvl = document.getElementById("lvl");

    if (admin.checked==true)
    admin=true;


    nuevo = { id: id, user: usuario, name: nombre, lastName: apellido, password: contrasena, admin: admin };
    id++;
    const userExiste = memoriaUsuarios.find((item) => item.user === nuevo.user);



    // if (userExiste) {
    //     // mostrarWarning();
    // }

    // else {
        memoriaUsuarios.push(nuevo);
        // mostrarExito();

    // }

    localStorage.setItem("usuarios", JSON.stringify(memoriaUsuarios));


}

function buscarIdIcono() {
    const newMemoria = memoriaUsuarios;
    let numeroIcono = parseInt(event.currentTarget.id);
    


    return numeroIcono;
}
function enableInput(id, condicion) {




    const table = document.getElementById("usersTable");

    const fila = table.querySelectorAll("input");




    fila.forEach(element => {

        if (element.id == id) {

            element.disabled = condicion;

        }

    });

}

function guardar() {

    let numeroIcono = buscarIdIcono();
    enableInput(numeroIcono, true);

    let index = memoriaUsuarios.findIndex(element => element.id === numeroIcono);



    const table = document.getElementById("usersTable");

    const fila = table.querySelectorAll("input");

    const userValuesArray = [];



    fila.forEach(element => {


        if (element.id == numeroIcono) {
            userValuesArray.push(element.value);

        }

    });

    memoriaUsuarios[index].user = userValuesArray[1];
    memoriaUsuarios[index].name = userValuesArray[0];
    memoriaUsuarios[index].lastName = userValuesArray[2];
    localStorage.setItem("usuarios", JSON.stringify(memoriaUsuarios));

    generarListadoUsuarios();


}
function editar() {



    let numeroIcono = buscarIdIcono();



    enableInput(numeroIcono, false);


}


function borrar() {


    let numeroIcono = parseInt(event.currentTarget.id);



    let newMemoria = JSON.parse(localStorage.getItem("usuarios"));



    let index = newMemoria.findIndex(element => element.id === listadoId[(numeroIcono - 2)]);


    memoriaUsuarios.splice(index, 1);

    localStorage.setItem("usuarios", JSON.stringify(memoriaUsuarios));

    generarListadoUsuarios();

}

function generarListadoUsuarios() {
    const div = document.createElement("div");
    div.id = "tablaUsuarios";

    const divPadre = document.getElementById("listado");
    const crearNuevo = document.getElementById("divsd");


    if (divPadre.contains(crearNuevo))

        crearNuevo.remove();

    if (!divPadre.contains(document.getElementById("tablaUsuarios"))) {
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
        const checkbox=userTable.querySelectorAll("input");
        memoriaUsuarios.forEach((item) => {
            console.log(item.admin);
            const fila = document.createElement("tbody");
            fila.innerHTML = `
        <td><a href="#"><i class="fa-solid fa-trash"  id="${item.id}" onclick="borrar()" ></i></a>
        <a href="#"><i class="fa-solid fa-pencil"  onclick="editar()" id="${item.id}"></i></a>
        <a href="#" ><i class="fa-solid fa-floppy-disk" id="${item.id}" onclick="guardar()" ></i> </a>
        </td>

        
        <td id="id" >${item.id}</td>
        <td><input id="${item.id}" type="checkBox" checked="${item.admin}" disabled></input></td>
        <td><input id="${item.id}" type="text" disabled value=${item.name}></td> 
        <td><input id="${item.id}" type="text" disabled value=${item.lastName}></td>
        <td><input id="${item.id}" type="text" disabled value=${item.user}></td>
         
        `;
            
            
            userTable.appendChild(fila);


        });

    }
}