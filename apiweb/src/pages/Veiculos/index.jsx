import { useEffect, useState } from "react"
import axios from "axios"




export default function Veiculo(){
    const [veiculo, setVeiculo] = useState()

async function readVeiculo(){
        let response = await axios.get("https://localhost:7232/api/Veiculos")
        console.log(response.data[0])
        setVeiculo(response.data)
    }

    useEffect(() => {
        readVeiculo()
    }, [])
   
    return (
        <>
        
        <div className="veiculos">
        <br></br>
        <h2>Tabela Veiculos</h2>
        <br></br>
        <table class="table">
              <thead>
                 <tr>
                   <th scope="col">Id</th>
                   <th scope="col">Tipo</th>
                   <th scope="col">Modelo</th>
                   <th scope="col">Placa</th>
                   <th scope="col">Preço do Serviço</th>
                 </tr>
              </thead>
        {
            veiculo && veiculo.map((data) => (
              
              <tbody>
                 <tr>
                   <th scope="row">{data.id}</th>
                   <td>{data.tipo}</td>
                   <td>{data.modelo}</td>
                   <td>{data.placa}</td>
                   <td>{data.preco}</td>
                 </tr>
                </tbody>
               
                    
            ))
        }
         </table>
        </div>
        </>
    )
   
  }