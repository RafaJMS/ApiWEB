import { useEffect, useState } from "react"
import "./index.css"
import axios from "axios"
import {IMaskInput} from "react-imask";
import Form from "react-bootstrap/Form";


export default function Funcionario(){
    const [funcionario, setFuncionario] = useState()

    async function readFuncionarios(){
      let response = await axios.get("https://localhost:7232/api/Funcionarios")
        setFuncionario(response.data)
  }
    async function postFuncionarios(){
      let response = await axios.get("https://localhost:7232/api/Funcionarios")
        setFuncionario(response.data)
    }

    useEffect(()=>{
      readFuncionarios()
      console.log(funcionario)
      }, [])


      return (
        <>
        
        <div className="funcionarios">
        <br></br>
        <h2>Tabela Funcionarios</h2>
        <br></br>
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
                   <td><Form.Control
                      as = {IMaskInput}
                      mask="000.000.000-00"
                      defaultValue={data.cpf}/></td>
                    <td> <Form.Control
                      as={IMaskInput}
                      mask="(00) 00000-0000"
                      defaultValue={data.telefone}
                      width={10}
                    /></td>
                   
                   <td>{data.email}</td>
                   <td data-mask='0.000'>{data.salario}</td>
                 </tr> 
                </tbody>
               
                    
            ))
        }
         </table>
        </div>
        </>
      )
  }