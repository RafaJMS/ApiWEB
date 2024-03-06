import { useEffect, useState } from "react"

  export default function Cliente(){
    const [cliente, setCliente] = useState()
    useEffect(() => {
        let response = axios.get("https://localhost:7055/api/Clientes")
        setCliente(response.data)
        console.log(cliente)
    }, [])
    
        
      
 return (
    <>
     <ul className='lista-cliente' >
        {cliente && cliente.map((data)=>(
          <div className='grupo-lista' key={data.id}>
            <li className='campo-lista'>Nome: {data.nome}</li>
            <li className='campo-lista'>CPF: {data.cpf}</li>
            </div>
        ))}
        </ul> 
        </>
 )

  }