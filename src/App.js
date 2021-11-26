import React, {Fragment, useState} from "react";
import Formulario from "./Components/Formulario";
import Header from "./Components/Header";

function App() {

  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState(0);

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
        />
      </div>

    </Fragment>
  );
}

export default App;
