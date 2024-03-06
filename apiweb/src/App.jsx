import './App.css'
import Home from './pages/Home'
import Cliente from './pages/Clientes'
import Funcionario from './pages/Funcionarios'
import Veiculos from './pages/Veiculos'
import Header from './components/Header'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
    
      <h1>Bem vindo ao Lava Bolhas do Bob</h1>
      <div className="major-box">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path={'/clientes'} element={<Cliente/>}/>
        <Route path={'/funcionarios'} element={<Funcionario/>}/>
    <Route path={'/veiculos'} element={<Veiculos/>}/> 
      </Routes>
      </div>

    </>
  )
}

export default App
