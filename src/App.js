import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const [colaboradores, setColaboradores] = useState([])  

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }
  return (
    <div className="App">
      <Banner />
      
      <Formulario 
        aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />
      
      <Time nome="Programação" />
      <Time nome="Front-End" />
      <Time nome="Data Science" />
      <Time nome="Devops" />
    </div>
  );
}

export default App;
