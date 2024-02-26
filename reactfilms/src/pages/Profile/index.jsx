import { FaArrowLeft,FaRegUser } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FiLock,FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input"
import { Container,Back,Page,Avatar } from "./styles"

export function Profile() {
    return( 
        <Container>
            <Back>
                <Link to="/"> <FaArrowLeft/> Voltar</Link>
            </Back>
            <Page>
            <Avatar>
                <img src="https://github.com/andresantosog.png"
                alt="Foto do Usuário" /> 
                <label htmlFor="avatar">
                <FiCamera/>
                <input id="avatar" 
                type="file"/>  

                </label>
            </Avatar>
                <div className="inputsOne">
                <Input placeholder="Nome" icon={FaRegUser}/>
                <Input placeholder="E-mail" icon={MdMailOutline} />
                </div>
                <Input placeholder="Senha atual" icon={FiLock}/>
                <Input placeholder="Nova senha" className="inputNewpassword" icon={FiLock}/>

                <button className="profileSave">Salvar</button>
            </Page>

        </Container>
    )
}