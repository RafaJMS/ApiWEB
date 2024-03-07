import { useEffect, useState } from "react"
import axios from "axios"

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
        
  <div className="clientes">
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
             <td>{data.cpf}</td>
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