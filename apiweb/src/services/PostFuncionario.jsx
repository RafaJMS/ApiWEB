import React from 'react';
import axios from 'axios';

export default class PostFuncionario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '' // Para exibir mensagens de sucesso ou erro
    };
  }

  async addFuncionarioToAPI(nome, cpf, telefone, email, salario) {
    try {
      const apiUrl = "https://localhost:7232/api/Funcionarios"; // Endpoint da API para adicionar funcionário

      const data = { nome, cpf, telefone, email, salario };

      const response = await axios.post(apiUrl, data);

      if (response.status === 201) {
        this.setState({ message: 'Funcionário adicionado com sucesso!' });
      } else {
        throw new Error('Erro ao adicionar funcionário à API.');
      }
    } catch (error) {
      console.error('Erro:', error);
      this.setState({ message: 'Erro ao adicionar funcionário à API. Por favor, tente novamente.' });
    }
  }

  render() {
    return (
      <div className='input-group mt-2 d-flex w-50 gap-3'>
        <input className="form-control w-100" type="text" placeholder="Nome do funcionário" ref={(input) => this.nomeFuncionario = input} />
        <input className="form-control w-100" type="text" placeholder="CPF do funcionário" ref={(input) => this.cpfFuncionario = input} />
        <input className="form-control w-100" type="text" placeholder="Telefone do funcionário" ref={(input) => this.telefoneFuncionario = input} />
        <input className="form-control w-100" type="text" placeholder="Email do funcionário" ref={(input) => this.emailFuncionario = input} />
        <input className="form-control w-100" type="text" placeholder="Salário do funcionário" ref={(input) => this.salarioFuncionario = input} />
        <button className='btn btn-info' onClick={() => this.addFuncionarioToAPI(
            this.nomeFuncionario.value, 
            this.cpfFuncionario.value,
            this.telefoneFuncionario.value,
            this.emailFuncionario.value,
            this.salarioFuncionario.value)}>
            Adicionar Funcionário
            </button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

