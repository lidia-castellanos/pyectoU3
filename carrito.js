document.addEventListener("DOMContentLoaded", function () {



  const activo = JSON.parse(localStorage.getItem("uActivo"));

  const uActivoNombre = document.getElementById("uActivo");
  const loginIcono = document.getElementById("login");
  const liga = document.getElementById("loginRef");

  if (activo != null) {
    uActivoNombre.innerHTML = "Bienvenido(a), " + activo[0].name;



    loginIcono.className = "fa-solid fa-power-off";

    console.log(loginIcono);

    liga.href = "javascript:logout()";
  }

  else {


    liga.href = "login.html";
    loginIcono.className = "fa-solid fa-user fa-xl fa-stack";

  }


  let total = 0;
  const memoriaCarrito = JSON.parse(localStorage.getItem("compras"));

  const divContainer = document.getElementById("container");

  if (memoriaCarrito == null) {
    const carritoVacio = document.createElement("div");
    carritoVacio.className = "d-flex flex-column";
    carritoVacio.id = "carritoVacio";
    carritoVacio.innerHTML = `

        <h5>Carrito Vacio</h5>
        <button type="button" class="btn btn-primary btn-lg" id="btnCarrito" >Volver a catalogo</button>
        
        `;
    divContainer.appendChild(carritoVacio);
    const btnCarrito1 = document.getElementById("btnCarrito");
    btnCarrito1.addEventListener("click", function () {
      location.assign("index.html#catalogo");
    });




  }
  else {
    const carritoLleno = document.createElement("div");
    carritoLleno.classList = "";
    carritoLleno.innerHTML =
      `
        <table class="table" id="tabla">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>

        <tbody id="tablaCarritos" >
        </tbody>
        <tfoot id="tablaPie">
        </tfoot>
       </table>

        

        `;
    divContainer.appendChild(carritoLleno);

    const tablaCarrito = document.getElementById("tablaCarritos");


    memoriaCarrito.forEach(element => {
      const fila = document.createElement("tr")
      fila.innerHTML = `
            
            <td><img src="${element.producto.imagen}" style=width:80px></td> 
            <td>$ ${element.producto.precio}</td>
            <td> ${element.cantidad}</td>
            <td> ${element.producto.precio * element.cantidad}</td>
           
            </tr>

            
            `;
      total += element.producto.precio * element.cantidad;

      tablaCarrito.appendChild(fila);
    });

    const pieTabla = document.getElementById("tablaPie");
    pieTabla.innerHTML = `

        <button class="btn btn-outline-secondary" id="btnCarrito2" >Seguir comprando</button>
        `;
    const btnCarrito2 = document.getElementById("btnCarrito2");
    btnCarrito2.addEventListener("click", function () {
      location.assign("index.html#catalogo");
    });
    tablaCarrito.appendChild(pieTabla);

    const tablaTotal = document.createElement("div");
    tablaTotal.classList = "";
    tablaTotal.innerHTML =
      `
        <table class="table " id="tablaTotal">
        <thead> 
          <tr>
            <th scope="col">Total en carrito</th>
            <th scope="col"></th>
            
          </tr>
        </thead>

        
        
       </table>

        

        `;
    divContainer.appendChild(tablaTotal);


    const tablaTotalFilas = document.getElementById("tablaTotal");
    const fila = document.createElement("tbody");
    fila.innerHTML = `
            <tr>
            
            <td> Subtotal </td>
            <td> ${total} </td>
            </tr>

            <tr>
            
            <td> Envio </td>
            <td> GRATIS </td>
            </tr>

            <tfoot>
            <button class="btn btn-outline-secondary">Finalizar Compra</button>
            </tfoot>

            `;

    tablaTotalFilas.appendChild(fila);





  }


});
function logout() {
  alert("Sesion terminada");
  localStorage.removeItem("uActivo");
  location.assign("carrito.html");
}