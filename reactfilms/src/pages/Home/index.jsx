import { GrAdd } from "react-icons/gr"; 
import { Header } from "../../components/Header"
import { Notes } from "../../components/Notes"
import { Container } from "./styles"

export function Home() {
    return(
      <Container>
          <Header/>
          <div className='homeNotes'>
          <div className="myFilms">
            <h2>Meus Filmes</h2>
            <button><GrAdd className='iconPlus'/> Adicionar filme</button>
          </div>  
          <Notes/>
          <Notes/>
          <Notes/>   
          </div>
        </Container>
    )
}