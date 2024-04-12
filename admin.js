const div = document.createElement("div");
div.id = "divsd"
const warning = document.createElement("div");
const memoria = JSON.parse(localStorage.getItem("usuarios"));
const usuarios = [];

function crearFormulario() {

    const divPadre = document.getElementById("listado");

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
</form>
    `;
        divPadre.appendChild(div);
    }



}

function mostrarWarning() {
    
    warning.classList.add("alert", "alert-warning");
    warning.role = "alert";
    warning.innerHTML = "Usuario ya existe en sistema";
    div.appendChild(warning);
}
function generarID(){
    return memoria[memoria.length-1].id+1;
}
function crear() {
    const nombre = document.getElementById("inputNombre").value.toUpperCase();
    const apellido = document.getElementById("inputApellido").value.toUpperCase();
    const usuario = document.getElementById("inputUsuario").value.toUpperCase();
    const contrasena= document.getElementById("inputContraseña").value.toUpperCase();
    

    memoria.forEach(element => {
        if (element.user === usuario) {
            mostrarWarning();
        }
        if (element.name === nombre && element.lastName === apellido ) {
            console.log("warning");
            mostrarWarning();

        }
        else{
            nuevo={name: usuario,user: usuario, lastName: apellido, password: contrasena }; 
            usuarios.push(nuevo);
        }

    });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    console.log(nuevo);


}