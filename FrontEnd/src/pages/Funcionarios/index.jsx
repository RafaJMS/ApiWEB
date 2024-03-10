import { useEffect, useState } from "react"
import "./index.css"
import axios from "axios"
import {IMaskInput} from "react-imask";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom"
import PostFuncionario from "../../services/PostFuncionario";


export default function Funcionario(){
    const [funcionario, setFuncionario] = useState()
    const [option, setOption] = useState(false)

    async function readFuncionarios(){
      let response = await axios.get("https://localhost:7232/api/Funcionarios")
        setFuncionario(response.data)
  }
    async function postFuncionarios(){
      let response = await axios.get("https://localhost:7232/api/Funcionarios")
        setFuncionario(response.data)
    }
    function postFuncionarios(){
      setOption(true)
    }
    function removePostFuncionarios(){
      setOption(false)
    }
    useEffect(()=>{
      readFuncionarios()
      console.log(funcionario)
      }, [[],postFuncionarios,removePostFuncionarios,<postFuncionarios/>])


      return (
        <div className="bigbox">
        
        <div className="table-box">
        <br></br>
        <h2>Tabela Funcionarios</h2>
        <Link id="section-link" onClick={postFuncionarios}><span className="section-item">Adicionar Funcionario</span></Link>
        {option && 
        <>
        <PostFuncionario/>
        <Link id="section-link" onClick={removePostFuncionarios}>
          <span className="section-item">Sair</span></Link>
        </>
        }
        <br></br>
        <div className="content-box">
        <table class="table">
              <thead>
                 <tr>
                   <th scope="col">Id</th>
                   <th scope="col">Nome</th>
                   <th scope="col">CPF</th>
                   <th scope="col">Telefone</th>
                   <th scope="col">Email</th>
                   <th scope="col">Salário</th>
                 </tr>
              </thead>
        {
            funcionario && funcionario.map((data) => (
              
              <tbody>
                 <tr>
                   <th scope="row">{data.id}</th>
                   <td>{data.nome}</td>
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
                   
                   <td>{data.email}</td>
                   <td ><Form.Control
                      as={IMaskInput}
                      mask="0.000,00"
                      defaultValue={data.salario}
                      className="mask-input"
                      disabled/></td>
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