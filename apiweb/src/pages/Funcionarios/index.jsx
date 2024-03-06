import { useEffect, useState } from "react"
import "./index.css"

export default function Funcionario(){
    const [funcionario, setFuncionario] = useState()


    useEffect(()=>{
    
        let response =  axios.get("https://localhost:7055/api/Funcionarios")
        setFuncionario(response.data)
      }, [])


      return (
        <>
        <div className="funcionarios">
        {
            funcionario && funcionario.map((func) => (
                <div className="funcionario"> 
                                <h1>{func.nome}</h1>

                    </div>
            ))
        }
         </div>
        </>
      )
  }