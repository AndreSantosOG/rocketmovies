import { FaArrowLeft } from "react-icons/fa";
import { Header } from "../../components/Header"
import { Link } from 'react-router-dom';
import { Input } from "../../components/Input"
import { Textarea } from '../../components/Textarea'
import { Noteitem } from '../../components/Noteitem'
import { Section } from '../../components/Section'
import { Container } from "./styles"


export function New() {
    return(
        <Container>
        <Header/>
            <div className="page">
            <div className="title">
            <Link to="/" className="back"> <FaArrowLeft className="arrow"/> Voltar</Link>
            <h4>Novo Filme</h4>
            </div>
            <div className="firstsInput">
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)"/>
            </div>
            <Textarea placeholder="Observações"/> 
            <div className="markers">
                <Section title="Marcadores">
                <div className='tags'>
                <Noteitem value="react"/>
                <Noteitem isNew placeholder="Novo Marcador" />
                </div>
                </Section>
            </div>
            <div className="buttonAction">
                <button className="buttonRemove">Excluir Filme</button>
                <button className="buttonUptate">Salvar Alterações</button>
            </div>
            </div>
        </Container>
    )
}