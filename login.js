document.addEventListener("DOMContentLoaded", function () {

    const usuarioInput = document.getElementById("usuario");
    const passwordInput = document.getElementById("password");
    const div = document.getElementById("forms");
    const acceder = document.getElementById("submit");
    const memoriaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    const memoriaActivos = JSON.parse(localStorage.getItem("uActivo"));



    acceder.addEventListener("click", function () {
        memoriaUsuarios.forEach(element => {
            if (element.user === usuarioInput.value && element.password === passwordInput.value) {
                if (element.admin == true) {
                    location.assign("admin.html");
                    const usuarios = [{ id: element.id, user: element.user, name: element.name, lastName: element.lastName, admin: element.admin }];
                    localStorage.setItem("uActivo", JSON.stringify(usuarios));
                }
                else {
                    const usuarios = [{ id: element.id, user: element.user, name: element.name, lastName: element.lastName, admin: false }];
                    localStorage.setItem("uActivo", JSON.stringify(usuarios));
                    location.assign("index.html");

                }
            }

            else {
                const warning = document.createElement("div");
                warning.classList.add("alert", "alert-warning");
                warning.role = "alert";
                warning.innerHTML = "Usuario o contrasena incorrecta";
                div.appendChild(warning);
            }

        });

    });


});