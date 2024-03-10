import "../Header/index.css"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <>
        <div className="header-box">
            <Link to={'/'}>
            <div className="titleheader-box">
            <img className="title-img" src="https://www.svgrepo.com/show/30553/bubbles.svg"></img> 
            <span className="title-header">Lava Bolhas do Bob</span>
           </div></Link>
           
           <div className="headertype-box">
            <Link to={"/cliente"}><span className="type-header">Clientes</span></Link>
            <Link to={"/funcionario"}><span className="type-header">Funcionarios</span></Link>
            <Link to={"/veiculo"}><span className="type-header">Veiculos</span></Link>        
           </div>
           
        </div>
        </>
    )
}