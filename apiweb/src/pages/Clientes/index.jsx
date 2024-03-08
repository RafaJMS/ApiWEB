import { useEffect, useState } from "react"
import axios from "axios"
import {IMaskInput} from "react-imask";
import Form from "react-bootstrap/Form";

  export default function Cliente(){
    const [cliente, setCliente] = useState()

    async function readClientes(){
      let response = await axios.get("https://localhost:7232/api/Clientes")
      console.log(response.data[1].veiculos[0])  
      setCliente(response.data)
    }

    useEffect(() => {
        readClientes()
        console.log(cliente)
    }, [])
    
        
      
 return (
  <>
        
  <div className="table-box">
  <br></br>
  <h2>Tabela Clientes</h2>
  <br></br>
  <table class="table">
        <thead>
           <tr>
             <th scope="col">Id</th>
             <th scope="col">Nome</th>
             <th scope="col">CPF</th>
             <th scope="col">Placa do Veiculo</th>
           </tr>
        </thead>
  {
      cliente && cliente.map((data) => (
        
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
             <td>{data.veiculos[0].placa}</td>
           </tr>
          </tbody>
         
              
      ))
  }
   </table>
  </div>
  </>
 )

  }