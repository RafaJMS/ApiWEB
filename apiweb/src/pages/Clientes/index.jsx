import { useEffect, useState } from "react"
import axios from "axios"
import {IMaskInput} from "react-imask";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom"
import PostClient from "../../services/PostClient";

  export default function Cliente(){
    const [cliente, setCliente] = useState()
    const [option, setOption] = useState(false)

    async function readClientes(){
      let response = await axios.get("https://localhost:7232/api/Clientes") 
      setCliente(response.data)
    }
    function postClientes(){
      setOption(true)
    }
    function removePostClientes(){
      setOption(false)
    }

    useEffect(() => {
        readClientes()
    }, [[],postClientes,removePostClientes,<postClientes/>])
    
        
      
 return (
  <div className="bigbox">      
  <div className="table-box">
  <br></br>
  <h2>Tabela Clientes</h2>
  <Link id="section-link" onClick={postClientes}><span className="section-item">Adicionar Cliente</span></Link>
  {option && 
  <><PostClient/>
  <Link id="section-link" onClick={removePostClientes}>
    <span className="section-item">
      Sair</span></Link></>
  }
  <div className="content-box">
  <table class="table">
        <thead>
           <tr>
             <th scope="col">Id</th>
             <th scope="col">Nome</th>
             <th scope="col">CPF</th>
             <th scope="col">Telefone</th>
             <th scope="col">Placa do Veiculo</th>
           </tr>
        </thead>
  {
      cliente && cliente.map((data) => (
        
        <tbody key={data.id}>
           <tr>
             <th  scope="row">{data.id}</th>
             <td  >{data.nome}</td>
             <td className="mask-td"><Form.Control
                      as = {IMaskInput}
                      mask="000.000.000-00"
                      defaultValue={data.cpf}
                      className="mask-input"
                      readOnly
                      disabled
                      /></td>
              <td className="mask-td"><Form.Control
                      as={IMaskInput}
                      mask="(00) 00000-0000"
                      defaultValue={data.telefone}
                      className="mask-input"
                      disabled
                    /></td>
            {data.veiculos[0]? 
            data.veiculos.map((veiculo) => (
              <td key={veiculo.id} >{veiculo.placa}</td>)): 
              <td key={data.id}>Não possui veiculo</td>}
             
           </tr>
          </tbody>
         
              
      ))
  }
   </table>
   </div>
   <Link id="section-link" to={"/"}><span className="section-item">Voltar</span></Link>
  </div>
  </div>
 )

  }