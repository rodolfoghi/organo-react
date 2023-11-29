import './Time.css'

const Time = (props) => {
    const sectionStyle = { backgroundColor: props.corSecundaria }
    const h3Style = { borderColor: props.corPrimaria }
    return (
        <section className='time' style={sectionStyle}>
            <h3 style={h3Style}>{props.nome}</h3>
        </section>
    );
}

export default Time