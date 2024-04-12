const filasTablas = document.getElementsByTagName("input");
const filasIconos = document.getElementsByTagName("i");
let mensaje = document.createElement("div");
let memoria = JSON.parse(localStorage.getItem("usuarios"));
const usuarios = [];

document.addEventListener("DOMContentLoaded", function () {
    generarListadoUsuarios();
});

function crearFormulario() {
    const div = document.createElement("div");
    div.id = "divsd";

    const divPadre = document.getElementById("listado");
    const tablaUsuarios = document.getElementById("tablaUsuarios");

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
    <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
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



function mostrarWarning() {

    mensaje.classList.add("alert", "alert-warning");
    mensaje.role = "alert";
    mensaje.innerHTML = "Usuario ya existe en sistema";
    div.appendChild(mensaje);

}

function mostrarExito() {

    mensaje.classList.add("alert", "alert-success");
    mensaje.role = "alert";
    mensaje.innerHTML = "Usuario añadido";
    div.appendChild(mensaje);

}


function crear() {
    var id = memoria[memoria.length - 1].id + 1;

    let nuevo = [];
    const nombre = document.getElementById("inputNombre").value.toUpperCase();
    const apellido = document.getElementById("inputApellido").value.toUpperCase();
    const usuario = document.getElementById("inputUsuario").value.toUpperCase();
    const contrasena = document.getElementById("inputContraseña").value.toUpperCase();




    nuevo = { id: id, user: usuario, name: nombre, lastName: apellido, password: contrasena, userLvl: 1 };
    id++;
    const userExiste = memoria.find((item) => item.user === nuevo.user);



    if (userExiste) {
        // mostrarWarning();
    }

    else {
        memoria.push(nuevo);
        // mostrarExito();

    }


    localStorage.setItem("usuarios", JSON.stringify(memoria));


}

function editar() {

    let numeroIcono = parseInt(event.currentTarget.id);


    for (let i = numeroIcono - 1; i < numeroIcono + 2; i++) {

        filasTablas[i].disabled = false;

    }




}
function borrar() {

    let numeroIcono = parseInt(event.currentTarget.id);
    
    
    console.log(memoria[numeroIcono-4]);

    memoria=memoria.splice(1,1);
    memoria.push(memoria);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    
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
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Usuario</th>
            </tr>
        </thead>
    </table>
    `;
        divPadre.appendChild(div);
        const userTable = document.getElementById("usersTable");
        memoria.forEach((item) => {
            const fila = document.createElement("tbody");
            fila.innerHTML = `
        <td><a href="#"><i class="fa-solid fa-trash " onclick="borrar()" ></i></a>
        <a href="#"><i class="fa-solid fa-pencil"  onclick="editar()" ></i></a>
        <a href="#" ><i class="fa-solid fa-floppy-disk"></i></a></td>


        <td> ${item.id}</td>
         
        <td><input id="filaEdit" type="text" disabled value=${item.name}></td> 
        <td><input id="filaEdit" type="text" disabled value=${item.lastName}></td>
        <td><input id="filaEdit" type="text" disabled value=${item.user}></td>
         
        `;

            fila.id = "filasTablas"
            userTable.appendChild(fila);


        });
        let n = 2;

        for (let i = 2; i < filasIconos.length; i++) {

            filasIconos[i].id = "" + (n - i);

            n += 2;
        }
    }
}