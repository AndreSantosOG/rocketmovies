import {Input} from "../../components/Input"
import { Link } from 'react-router-dom';
import { MdMailOutline } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { Container,Background } from "./styles.js"

export function SignIn () {
    return(
        <Container>
            <div className="login">
                <h5>RocketMovies</h5>
                <p className="description">Aplicação para acompanhar tudo que assistir.</p>
                <p className="textLogin">Faça seu login</p>
                <Input placeholder="E-mail" icon={MdMailOutline}/>
                <Input placeholder="Senha" icon={FiLock}/>
                <button>Entrar</button>
                <Link to="/register">Criar conta</Link>

            </div>
            <Background/>
            
        </Container>
    )
}