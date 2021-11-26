import React, {Fragment, useState} from "react";
import Formulario from "./Components/Formulario";
import Header from "./Components/Header";
import Mensaje from "./Components/Mensaje";
import Resultado from "./Components/Resultado";

function App() {

  const [cantidad, setCantidad] = useState('');
  const [plazo, setPlazo] = useState(0)
  const [error, setError] = useState(false)
  const [total, setTotal] = useState(0);

  let componente;

  if(total === 0){
    componente = <Mensaje/>
  }
  else{
    componente = <Resultado/>
  }



  return (
    <Fragment>

      <div className="">
        <Header titulo="Cotizador de prestamos" />
      </div>

      <div className="container">
        <Formulario 
          cantidad = { cantidad }
          setCantidad = { setCantidad }
          plazo = { plazo }
          setPlazo = { setPlazo }
          total = {total}
          setTotal = {setTotal}
        />

        <div className="mensajes">
            { componente }
        </div>

      </div>

    </Fragment>
  );
}

export default App;
