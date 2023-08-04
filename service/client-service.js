/**
 * TODO: este archivo se encarca de hacer la comunicacion con el seridor recivir la respuesta y
 * TODO: despues generarala en un JSON
 */
// fetch API, // abre una conexion a la bd, va a geneerar una promesa, //respuesta recive la promesa 
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json()) //.json vuelve la respuesta en un objeto


export const clienteServices = {
  listaClientes,
}
