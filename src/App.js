import React, {Fragment, useState} from "react";
import Formulario from "./Components/Formulario";
import Header from "./Components/Header";
import Mensaje from "./Components/Mensaje";
import Resultado from "./Components/Resultado";
import Spinner from "../src/Components/Spinner"

function App() {

  const [cantidad, setCantidad] = useState('');
  const [plazo, setPlazo] = useState(0)
  const [total, setTotal] = useState(0);
  const [cargando, setCargando] = useState(false)

  let componente;

  if(cargando){
    componente = <Spinner/>
  }

  else if(total === 0){
    componente = <Mensaje/>
  }
  else{
    componente = <Resultado
      total = { total }
      plazo = { plazo }
      cantidad = { cantidad }
    />
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
          setCargando = { setCargando }
        />

        <div className="mensajes">
            { componente }
        </div>

      </div>

    </Fragment>
  );
}

export default App;
