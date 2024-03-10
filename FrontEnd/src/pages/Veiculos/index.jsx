import { useEffect, useState } from "react"
import axios from "axios"
import { IMaskInput } from "react-imask"
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom"
import PostVeiculo from "../../services/PostVeiculo";



export default function Veiculo(){
    const [veiculo, setVeiculo] = useState()
    const [option, setOption] = useState(false)

async function readVeiculo(){
        let response = await axios.get("https://localhost:7232/api/Veiculos")
        setVeiculo(response.data)
    }
  function postVeiculos(){
    setOption(true)
  
  }
  function removePostVeiculos(){
    setOption(false)
  }

    useEffect(() => {
        readVeiculo()
    }, [[],postVeiculos,removePostVeiculos,<postVeiculos/>])
   
    return (
        <div className="bigbox">
        
        <div className="table-box">
        <br></br>
        <h2>Tabela Veiculos</h2>
        <Link id="section-link" onClick={postVeiculos}><span className="section-item">Adicionar Veiculo</span></Link>
        {option &&
        <>
        <PostVeiculo/>
        <Link id="section-link" onClick={removePostVeiculos}>
          <span className="section-item">Sair</span></Link>
        </>
        }
        <br></br>
        <div className="content-box">
        <table class="table">
          
              <thead>
                 <tr>
                   <th scope="col">Id</th>
                   <th scope="col">Tipo</th>
                   <th scope="col">Modelo</th>
                   <th scope="col">Placa</th>
                   <th scope="col">Preço do Serviço</th>
                   <th scope="col">Dono do Veiculo</th>
                   <th scope="col">Numero do Dono do Veiculo</th>
                 </tr>
              </thead>
        {
            veiculo && veiculo.map((data) => (
              
              <tbody key={data.id}>
                 <tr>
                   <th scope="row">{data.id}</th>
                   <td>{data.tipo}</td>
                   <td>{data.modelo}</td>
                   <td>{data.placa}</td>
                   <td ><Form.Control
                      as={IMaskInput}
                      mask="0.000,00"
                      defaultValue={data.preco}
                      className="mask-input"
                      disabled/></td>
                    {data.idClienteNavigation && (
                      <><td>{data.idClienteNavigation.nome}</td>
                      <td className="mask-td"><Form.Control
                      as={IMaskInput}
                      mask="(00) 00000-0000"
                      defaultValue={data.idClienteNavigation.telefone}
                      className="mask-input"
                      disabled
                    /></td>
                    </>
              )}
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