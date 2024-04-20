document.addEventListener("DOMContentLoaded", function () {
    const usuarioInput = document.getElementById("usuario");
    const passwordInput = document.getElementById("password");
    const div = document.getElementById("forms");
    const acceder = document.getElementById("submit");



    
    acceder.addEventListener("click", function () {
        const memoriaUsuarios = JSON.parse(localStorage.getItem("usuarios"));

        memoriaUsuarios.forEach(element => {
           
            if(element.user===usuarioInput.value && element.password===passwordInput.value){
               if(element.admin==true){
                window.open("admin.html");
               }else
               window.open("usuario.html")
            }
            else{
                const warning= document.createElement("div");
                warning.classList.add("alert", "alert-warning");
                warning.role= "alert";
                warning.innerHTML="Usuario o contrasena incorrecta";
                div.appendChild(warning);
            }
            
        });
       
    });


});