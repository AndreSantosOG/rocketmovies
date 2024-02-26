import {Input} from "../../components/Input/index.jsx"
import { Link } from 'react-router-dom';
import { MdMailOutline } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { FiLock } from "react-icons/fi";
import { Container,Background } from "./styles.js"

export function SignUp () {
    return(
        <Container>
            <div className="login">
                <h5>RocketMovies</h5>
                <p className="description">Aplicação para acompanhar tudo que assistir.</p>
                <p className="textLogin">Crie sua conta</p>
                <Input placeholder="Nome" icon={FaRegUser}/>
                <Input placeholder="E-mail" icon={MdMailOutline}/>
                <Input placeholder="Senha" icon={FiLock}/>
                <button>Cadastrar</button>
                <Link to="/"><FaArrowLeft/>Voltar para o login</Link>

            </div>
            <Background/>
            
        </Container>
    )
}