
const formulario = document.getElementById("formulario");
const listadoIncidencias = document.getElementById("listadoIncidencias");

import { Incidencia } from './incidencia.js';
formulario.addEventListener("submit", (event)=> {
  // Previene el envío del formulario
  event.preventDefault();
let incidencias=[];
  // Obtiene los elementos del formulario
  const fecha = new Date( formulario.elements.fecha.value);
  const telefono = formulario.elements.telefono.value;
  const mail = formulario.elements.mail.value;
  const responsable= formulario.elements.responsable.value;
  const servicios= formulario.elements.servicios.value;
 const prioridad= formulario.elements.prioridad.value;
 const estado= formulario.elements.estado.value;
 const observaciones= formulario.elements.observaciones.value;


  // Crea el objeto con los valores del formulario
  const nuevaIncidencia = new Incidencia(fecha,telefono,mail,responsable,
    servicios,prioridad,estado,observaciones);
    incidencias.push(nuevaIncidencia);
    renderTable();
    


for (const incidencia of incidencias) {
    const fila = document.createElement('tr');

    listadoIncidencias.fila.innerHTML += 
    `
    <td>${incidencia.fecha.toDateString()}</td>
    <td>${incidencia.telefono}</td>
    <td>${incidencia.mail}</td>
    <td>${incidencia.responsable}</td>
    <td>${incidencia.servicios}</td>
    <td>${incidencia.prioridad}</td>
    <td>${incidencia.estado}</td>
    <td>${incidencia.observaciones}</td>
  `;
  if (incidencia.estado === 'resuelta') {
    fila.style.backgroundColor = 'blue';
  } else if (incidencia.prioridad === 'Baja') {
    fila.style.backgroundColor = 'green';
  } else if (incidencia.prioridad === 'Media') {
    fila.style.backgroundColor = 'orange';
  } else if (incidencia.prioridad ==='Alta'){
    fila.style.backgroundColor ='red';
    
  }
}
    
  
});
function renderTable() {
    listadoIncidencias.innerHTML = `
      <tr>
        <th>Fecha de creación</th>
        <th>Usuario</th>
        <th>Teléfono de contacto</th>
        <th>Correo electrónico de contacto</th>
        <th>Tipo de incidencia</th>
        <th>Prioridad</th>
        <th>Estado</th>
        <th>Observaciones</th>
      </tr>
`;
}