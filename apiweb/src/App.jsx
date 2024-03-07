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
      <div className="major-box">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path={'/cliente'} element={<Cliente/>}/>
        <Route path={'/funcionario'} element={<Funcionario/>}/>
        <Route path={'/veiculo'} element={<Veiculos/>}/> 
      </Routes>
      </div>

    </>
  )
}

export default App
