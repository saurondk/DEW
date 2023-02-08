

import './ficherocss.css';
import imagen1 from './img/rey_ataulfo.png' ;
import imagen2 from './img/rey_atanagildo.png';
import imagen3 from './img/rey_ervigio.png';

function App() {
  let nombres=['Atanagildo','Ataulfo','Ervigio'];
  return (
    <div className="fondo">

     <div class='card'>
      <img alt='' src={imagen1}></img>
      <p>{nombres[0]}</p>
     </div>
     <div class='card'>
     <img alt='' src={imagen2}></img>
     <p>{nombres[1]}</p>

     </div>
     <div class='card'>
     <img alt='' src={imagen3}></img>
     <p>{nombres[2]}</p>
     </div>
    </div>
  );
}

export default App;
