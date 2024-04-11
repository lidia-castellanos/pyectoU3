document.addEventListener("DOMContentLoaded", function () {


    const usuarios = [{user:"admin",password: "12345",userLvl:1}];
    
    localStorage.setItem("usuarios",JSON.stringify(usuarios));

    const memoria=JSON.parse(localStorage.getItem("usuarios"));
    


});