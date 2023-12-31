import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D83A56',
      corSecundaria: '#FEE2E2'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#DBAC2C',
      corSecundaria: '#FFEAEA'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#DBAC2C',
      corSecundaria: '#FFEAEA'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])  
  
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      
      <Formulario 
        aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
        times={times.map(time => time.nome)} />

      {times.map((time) => 
        <Time 
          key={time.nome} 
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
    </div>
  );
}

export default App;
