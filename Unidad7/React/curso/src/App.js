

import './ficherocss.css';
import imagen from './img/pexels.jpg';
function App() {
  let nombre = 'Jab';
  let caja=<div>Nombre</div>;
  return (
    <div className="fondo">
     <h1>Curso de React</h1>
     <img src={imagen} className='im'></img>
     <div>{nombre}</div>
     <div>{caja}</div>
     <input value={nombre}></input>
     <br></br>
    </div>
  );
}

export default App;
