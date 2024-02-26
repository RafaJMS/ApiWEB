import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [cliente, setCliente] = useState()
  const [funcionario, setFuncionario] = useState()

async function readCliente(){
  let response = await axios.get("https://localhost:7232/api/Clientes")
  setCliente(response.data)
}

async function readFuncionario(){
  let response = await axios.get("https://localhost:7232/api/Funcionarios")
  setFuncionario(response.data)
}
useEffect(()=>{
  readCliente()
  readFuncionario()
},)

  return (
    <>
      <h1>Teste</h1>
      <div className="card">
      
      <ul className='lista-cliente' >
        {cliente && cliente.map((data)=>(
          <div className='grupo-lista' key={data.id}>

            <li className='campo-lista'>Nome: {data.nome}</li>
            <li className='campo-lista'>CPF: {data.cpf}</li>

            </div>
        ))}
        </ul>

        {/* <ul className='lista-cliente' >
        {funcionario && funcionario.map((data)=>(
          <div className='grupo-lista' key={data.id}>
            
            <li className='campo-lista'>Nome: {data.nome}</li>
            <li className='campo-lista'>CPF: {data.cpf}</li>

            </div>
        ))}
        
        </ul> */}

        {/* <ul className='lista-cliente' >
        {data && data.map((data)=>(
          <div className='grupo-lista' key={data.id}>

            <li className='campo-lista'>Nome: {data.nome}</li>
            <li className='campo-lista'>CPF: {data.cpf}</li>

            </div>
        ))}
        
        </ul> */}
      </div>
    </>
  )
}

export default App
