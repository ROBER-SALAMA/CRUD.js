/**
 * TODO: este archivo se encarca de hacer la comunicacion con el seridor recivir la respuesta y
 * TODO: despues generarala en un JSON
 */
//! fetch API, // abre una conexion a la bd, va a geneerar una promesa, //respuesta recive la promesa 
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json()) //.json vuelve la respuesta en un objeto


//! funcion que recive los datos de formulario()
const crearCliente = (nombre, email) =>{
  return fetch("http://localhost:3000/perfil",{
    method: "POST", //?definimos con que metodo vamos a trabajar
    headers: {
      "Content-Type": "application/json" //?definimos el contenido
    },
    body: JSON.stringify({ //?JSON.stringify lo transforma a texto
      nombre, email, //?definimos el cuerpo
      id: uuid.v4() //? el id lo va a generar la funtion uuid.v4
    })
  })
};

//! funcion para eliminar un cliene
const eliminarCliente = (id) =>{
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE" //? definimos el metodo con que se va a trabajar
  })
} 


export const clienteServices = {
  listaClientes,
  crearCliente,
  eliminarCliente
}
