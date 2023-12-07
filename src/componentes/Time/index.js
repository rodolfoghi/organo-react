import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    const sectionStyle = { backgroundColor: props.corSecundaria }
    const h3Style = { borderColor: props.corPrimaria }
    return (
        <section className='time' style={sectionStyle}>
            <h3 style={h3Style}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(
                    colaborador => 
                    <Colaborador 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                    />)
                }
            </div>
        </section>
    );
}

export default Time