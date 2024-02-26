import { FaStar,FaRegStar } from "react-icons/fa";
import { Tags } from "../Tags"
import { Container } from "./styles"

export function Notes() {
    return(
      <Container>
        <h3>Interestellar</h3>
        <div className="ranking">
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaRegStar/>        
        </div>
        <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. 
          Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela...
        </p>
        <Tags title="Ficção Cientifica"/>
        <Tags title="Drama"/>
        <Tags title="Familia"/>
      </Container>  
    )
}