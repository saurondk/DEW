

import './ficherocss.css';
import imagen from './img/pexels.jpg';
function App() {
  let nombre = [{name:'Jab',edad:18},{name:'Paco',edad:120}];
  let caja=<div>Nombre</div>;
  return (
    <div className="fondo">
     <h1>{nombre[1].name}</h1>
     <img src={imagen} className="im" alt="Hola"/>
     <input value={nombre}></input>
     <div>{caja}</div>
     <br></br>
    </div>
  );
}

export default App;
