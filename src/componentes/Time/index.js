import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    const sectionStyle = { backgroundColor: props.corSecundaria }
    const h3Style = { borderColor: props.corPrimaria }

    return (
        (props.colaboradores.length > 0) &&
        <section className='time' style={sectionStyle}>
            <h3 style={h3Style}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(
                    colaborador => 
                    <Colaborador 
                        key={colaborador.nome} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                        corDeFundo={props.corPrimaria}
                    />)
                }
            </div>
        </section>
    );
}

export default Time