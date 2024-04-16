document.addEventListener("DOMContentLoaded", function () {
    let total = 0;
    const memoriaCarrito = JSON.parse(localStorage.getItem("compras"));

    const divContainer = document.getElementById("container");

    if (memoriaCarrito == null) {
        const carritoVacio = document.createElement("div");

        carritoVacio.innerHTML = `

        <h5>Carrito Vacio</h5>
        <button type="button" class="btn btn-primary btn-lg w-25" id="btnCarrito" >Volver a catalogo</button>
        
        `;
        divContainer.appendChild(carritoVacio);
        const btnCarrito1 = document.getElementById("btnCarrito");
        btnCarrito1.addEventListener("click", function () {
            location.assign("index.html#catalogo");
        });




    }
    else {
        const carritoLleno = document.createElement("div");
        carritoLleno.innerHTML =
            `
        <table class="table w-25" id="tabla">
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

        <button class="btn btn-outline-secondary">Seguir comprando</button>
        `;

        tablaCarrito.appendChild(pieTabla);

        const tablaTotal = document.createElement("div");
        tablaTotal.innerHTML =
            `
        <table class="table" id="tablaTotal">
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
            
            
            <td> Subtotal </td>
            <td> d </td>
            </tr>


            `;
        
        bodyTablaTotal.appendChild(fila);





    }


})