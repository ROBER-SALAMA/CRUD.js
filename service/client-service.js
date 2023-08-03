// funcion para crear la tablaa
const crearNuevaLista = (nombre, email) => {
  const linea = document.createElement("tr")
  const contenido = `
  <td class="td" data-td>${nombre}</td>
  <td>${email}</td>
  <td>
    <ul class="table__button-control">
      <li>
        <a href="../screens/editar_cliente.html" class="simple-button simple-button--edit">Editar</a>
      </li>
      <li>
        <button class="simple-button simple-button--delete" type="button">
          Eliminar
        </button>
      </li>
    </ul>
  </td>`
  // De esta manera, la fila se rellena con el contenido generado 
  linea.innerHTML = contenido
  return linea // devuelve el nodo tr correctamnte
}

// recorre todo el arbol del DOM(HTML) y obtiene data-table
const table = document.querySelector("[data-table]")

// fetch API, // abre una conexion a la bd, va a geneerar una promesa, //respuesta recive la promesa 
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json()) //.json vuelve la respuesta en un objeto
  

// Llamar a la función listaClientes para obtener los datos y trabajar con ellos
listaClientes()
  // La función then() se ejecutará cuando la promesa se resuelva correctamente
  .then((data) => {
    // se raliza un bucle atravex de cada elemeto dentro del array 'data'
    data.forEach(perfil => { //y cada objeto representa representa un perfil de usuario
      const nuevaLinea = crearNuevaLista(perfil.nombre, perfil.email);
      table.appendChild(nuevaLinea); //se agrega la nueva fila a la tabla
    });
  })
  .catch((error) => alert("Ocurrio un error"));



