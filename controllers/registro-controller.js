import { clienteServices } from "../service/client-service.js";

//! recorre el elemento del DON en busca del data
const formulario = document.querySelector("[data-form]");


//! funcion que recive los datos del formulario
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); //?quita el comportamiento por defecto
    //? .value obtiene el valor requerido
    const nombre = document.querySelector("[data-nombre]").value
    const email = document.querySelector("[data-email]").value

    //? accion para crear cliente
    clienteServices
    .crearCliente(nombre, email)
    .then(() => {
        window.location.href = "/screens/registro_completado.html"
    })
    .catch(error => console.log(error))
});