document.addEventListener("DOMContentLoaded", function () {
    const memoriaCarrito = JSON.parse(localStorage.getItem("compras"));
    console.log(memoriaCarrito);

    if (memoriaCarrito == null) {
        const carritoVacioDiv = document.getElementById("container");
        carritoVacioDiv.innerHTML = `

        <h5>Carrito Vacio</h5>
        <button type="button" class="btn btn-primary btn-lg w-25" id="btnCarrito" >Volver a catalogo</button>
        
        `;

        const btnCarrito = document.getElementById("btnCarrito");
        btnCarrito.addEventListener("click", function () {
            window.open("index.html#catalogo");
            console.log("d");
        });




    }
    else{
        
    }


})