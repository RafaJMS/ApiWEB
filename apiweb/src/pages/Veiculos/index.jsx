import { useEffect, useState } from "react"




export default function Veiculo(){
    const [veiculo, setVeiculo] = useState()

    useEffect(() => {
        let response =  axios.get("https://localhost:7055/api/Veiculos")
        setVeiculo(response.data)
    }, [])
   
    return (
        <>
         <ul className='lista-veiculo' >
    {veiculo && veiculo.map((data)=>(
        <div className='grupo-lista' key={data.id}>
        <li className='campo-lista'>Tipo: {data.tipo}</li>
        <li className='campo-lista'>Modelo: {data.modelo}</li>
        <li className='campo-lista'>Placa: {data.placa}</li>
        <li className='campo-lista'>Preco: {data.preco}</li>
        </div>
    ))}
    </ul> 
        </>
    )
   
  }