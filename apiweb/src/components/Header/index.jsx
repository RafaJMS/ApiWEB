import "../Header/index.css"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <div className="header-box">
           <div className="titleheader-box">
         {/* <img className="title-img" src="./src/assets/svgrepo.svg"></img> */}
            <span className="title-header">Lava Bolhas do Bob</span>
           
           </div>
           
           <div className="headertype-box">
            <Link to={"/cliente"}><span className="type-header">Cliente</span></Link>
            <Link to={"/funcionario"}><span className="type-header">Funcionario</span></Link>
            <Link to={"/veiculo"}><span className="type-header">Veiculo</span></Link>        
           </div>
           
        </div>
    )
}