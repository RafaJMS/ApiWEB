import React from 'react';
import axios from 'axios';

export default class PostClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '' // Para exibir mensagens de sucesso ou erro
    };
  }

  async addClienteToAPI(nome, cpf, telefone) {
    try {
      const apiUrl = 'https://localhost:7232/api/Clientes'; // Endpoint da API para adicionar cliente

      const data = { nome, cpf,telefone };

      const response = await axios.post(apiUrl, data);

      if (response.status === 201) {
        console.log(data)
        console.log(response.data)
        this.setState({ message: 'Cliente adicionado com sucesso!' });
      } else {
        throw new Error('Erro ao adicionar cliente à API.');
      }
    } catch (error) {
      console.error('Erro:', error);
      this.setState({ message: 'Erro ao adicionar cliente à API. Por favor, tente novamente.' });
    }
  }

  render() {
    return (
        <>
        <br></br>
        <h2>Adicionar Cliente</h2>
        <div className='input-group mt-2 d-flex w-50 gap-3'>
        <input className="form-control w-100" type="text" placeholder="Nome do cliente" ref={(input) => this.nomeCliente = input} />
        <input className="form-control w-100" type="text" placeholder="CPF do cliente" ref={(input) => this.cpfCliente = input} />
        <input className="form-control w-100" type="text" placeholder="Telefone do cliente" ref={(input) => this.telefoneCliente = input} />
        <button className='btn btn-info' onClick={() => this.addClienteToAPI(this.nomeCliente.value, this.cpfCliente.value, this.telefoneCliente.value)}>Adicionar Cliente</button>
        <p>{this.state.message}</p>
      </div>
      </>
    );
  }
}

 
