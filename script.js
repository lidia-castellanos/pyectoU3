document.addEventListener("DOMContentLoaded", function () {

    const memoria = JSON.parse(localStorage.getItem("usuarios"));

    const usuarios = [{ id: 100, user: "ADMIN", name: "LIDIA", lastName: "CASTELLANOS", password: "12345", userLvl: 1 }];




    localStorage.setItem("usuarios", JSON.stringify(usuarios));



});

