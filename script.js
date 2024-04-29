const carrito = [];

document.addEventListener("DOMContentLoaded", function () {

    

    const usuarios = [{ id: 100, user: "lidia.castellanos", name: "LIDIA", lastName: "CASTELLANOS", password: "12345", admin: true }];

    const memoriaUsuarios = localStorage.setItem("usuarios", JSON.stringify(usuarios));

    const activo = JSON.parse(localStorage.getItem("uActivo"));

    const uActivoNombre = document.getElementById("uActivo");

    const memoria = JSON.parse(localStorage.getItem("usuarios"));

    const loginIcono = document.getElementById("login");
    const liga = document.getElementById("loginRef");
    const hrefUactivo = document.getElementById("hrefUactivo");

    if (activo != null) {

      

        uActivoNombre.innerHTML = "Bienvenido(a), " + activo[0].name;



        loginIcono.className = "fa-solid fa-power-off";


        liga.href = "javascript:logout()";
        console.log(activo[0].admin);

        if (activo[0].admin == true) {
            hrefUactivo.href = "admin.html";
            console.log("yesss");
        }

    }


    else {

       

        liga.href = "login.html";
        loginIcono.className = "fa-solid fa-user fa-xl fa-stack";

    }


    cargarCatalogo();

});
let subtotalTotal = 0;

function cargarCatalogo() {
    const catalogo = [
        { id: 1, imagen: "https://images.pexels.com/photos/5501282/pexels-photo-5501282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", precio: 600, nombre: "Centro de mesa elegante" },
        { id: 2, imagen: "https://images.pexels.com/photos/1563650/pexels-photo-1563650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", precio: 400, nombre: "Centro de mesa sencillo" },
        { id: 3, imagen: "https://images.pexels.com/photos/759668/pexels-photo-759668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", precio: 890, nombre: "Ramo de novia playero" },
        { id: 4, imagen: "https://images.pexels.com/photos/540522/pexels-photo-540522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", precio: 1000, nombre: "Ramo de novia ligero" },
        { id: 5, imagen: "https://images.pexels.com/photos/169186/pexels-photo-169186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", precio: 3000, nombre: "Centro de mesa para evento " },
        { id: 6, imagen: "https://images.pexels.com/photos/97074/pexels-photo-97074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", precio: 2900, nombre: "Arreglo de piso" },
        { id: 7, imagen: "https://images.pexels.com/photos/2788494/pexels-photo-2788494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", precio: 9000, nombre: "Arco florar para evento" },
        { id: 8, imagen: "https://images.pexels.com/photos/3972697/pexels-photo-3972697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", precio: 200, nombre: "Ramo de rosas sencillo" },
        { id: 9, imagen: "https://images.pexels.com/photos/1883380/pexels-photo-1883380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", precio: 400, nombre: "Centro de mesa tulipanes" },
    ];
    localStorage.setItem("catalogo", JSON.stringify(catalogo));
    const catalogoContainer = document.getElementById("catalogo");
    const resumenCompra = document.getElementById("resumen Compra");
    const total = document.getElementById("total");
    const totalArticulos = 0;
    // Genera las tarjetas de productos en el catálogo
    catalogo.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");
        card.innerHTML = `
    <div class="card">
    <img src="${producto.imagen}" class="card-img-top " alt="${producto.nombre}" title="${producto.nombre}">
    <div class="card-body ">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">$${producto.precio}</p>
    <label for="cantidadProducto${producto.id}">Cantidad:</label>
    <input type="number" id="cantidadProducto${producto.id}" class="form-control">
    <button class="btn btn-primary mt-2" data-id="${producto.id}">Agregar al Carrito</button>
    
    </div>
    </div>
    `;
        try {
            catalogoContainer.appendChild(card);

        } catch (error) {

        }

        const botonAgregar = card.querySelector("button");

        botonAgregar.addEventListener("click", function () {

            const cantidad = parseInt(document.getElementById(`cantidadProducto${producto.id}`).value);
            if (cantidad > 0) {

                agregarProductoAlCarrito(producto, cantidad);
            }
        });




    });



    function agregarProductoAlCarrito(producto, cantidad) {
        // Busca si el producto ya está en el carrito
        const productoEnCarrito = carrito.find((item) => item.producto.id === producto.id);
        if (productoEnCarrito) {
            // Si ya está en el carrito, actualiza la cantidad
            productoEnCarrito.cantidad += cantidad;

        } else {

            // Si no está en el carrito, agrega un nuevo elemento al carrito
            carrito.push({ producto, cantidad, totalArticulos });



        }

        carrito.forEach((item) => {



            subtotalTotal += item.producto.precio * item.cantidad;


        });
        console.log(carrito);



        const botonComprar = document.getElementById("finalizarCompra");


        localStorage.setItem("compras", JSON.stringify(carrito));
    }






}



function logout() {
    alert("Sesion terminada");
    localStorage.removeItem("uActivo");
    location.assign("index.html");
}