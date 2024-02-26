import { Container,Profile } from "./styles"
import { Link } from 'react-router-dom';

export function Header() {
    return(
    <Container>
        <h1>RocketMovies</h1>
        <input type="text" placeholder="Pesquisar pelo título"/>

        <Profile>
        <div>
            <span>André Santos</span>
            <Link to="/">sair</Link>
          </div>
        <Link to="/profile">
        <img className="picture"
          src="https://github.com/andresantosog.png"
          alt="Foto do usuário"
        />
        </Link>
        </Profile>

    </Container>
    )
}