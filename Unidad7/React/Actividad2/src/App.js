import imagen0 from './img/rey_atanagildo.png';
import imagen1 from './img/rey_sisebuto.png';
import imagen2 from './img/rey_leogivildo.png';
import imagen3 from './img/rey_incognito.png';

import './ficherocss.css';

function App() {

 const nombres=['Atanagildo','Leogivildo','Sisebuto'];

 const cambiar=(j)=> {
    if(j.target.src.includes('rey_incognito')){
      j.target.style.visibility="hidden";
    }else{
      j.target.src=imagen3;
    }
 }

const cambiarTexto=(e)=>{
  if(e.target.innerHTML=='Visto'){
    e.target.innerHTML='';
  }else{
    e.target.innerHTML='Visto';
  }
  
};

  return (
<>
    <div className='contenedor'>
      <div className='caja'>
        <img onClick={cambiar} src={imagen0} alt=""></img>
        <div onClick={cambiarTexto} className='nombre'>{nombres[0]}</div>
      </div>
      <div className='caja'>
        <img onClick={cambiar} src={imagen1} alt=""></img>
        <div onClick={cambiarTexto} className='nombre'>{nombres[1]}</div>
      </div>
      <div className='caja'>
        <img onClick={cambiar} src={imagen2} alt=""></img>
        <div onClick={cambiarTexto} className='nombre'>{nombres[2]}</div>
      </div>

    </div>
</>
   
  );
}

export default App;
