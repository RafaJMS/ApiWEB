
import "./index.css"
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
            <div className="home-box">
            <h1 className="title">Site de controle Lava Bolhas do Bob</h1>
            
            <span className="cardapio"> Vizualizar planilhas: </span>
            <div className="section-box">

                <Link id="section-link" to={"/cliente"}><span className="section-item">Clientes</span></Link>
                <Link id="section-link" to={"/funcionario"}><span className="section-item">Funcionarios</span></Link>
                <Link id="section-link" to={"/veiculo"}><span className="section-item">Veiculos</span></Link> 

            </div>
        
            </div>
            
                
            
        </>
    )
}