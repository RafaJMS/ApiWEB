import React from 'react';
import axios from 'axios';

class PostVeiculo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '' // Para exibir mensagens de sucesso ou erro
    };
  }

  async addVeiculoToAPI(tipo, modelo, placa, preco, idCliente, idFuncionario) {
    try {
      const apiUrl = "https://localhost:7232/api/Veiculos"; // Endpoint da API para adicionar veículo

      const data = {tipo, modelo, placa, preco, idCliente, idFuncionario};

      const response = await axios.post(apiUrl, data);
      
      if (response.status === 201) {
        console.log(data)
        console.log(response.data)
        this.setState({ message: 'Veículo adicionado com sucesso!' });
      } else {
        throw new Error('Erro ao adicionar veículo à API.');
      }
    } catch (error) {
      
      console.error('Erro:', error);
      this.setState({ message: 'Erro ao adicionar veículo à API.\n'+ 
      "Por favor, tente inserir primeiro um cliente e funcionario respectivo aos ID's." });
    }
  }

  render() {
    return (
        <div className='input-group mt-2 d-flex w-50 gap-3'>
        <input className="form-control w-100" type="text" placeholder="Tipo de veículo" ref={(input) => this.tipoVeiculo = input} />
        <input className="form-control w-100" type="text" placeholder="Modelo" ref={(input) => this.modeloVeiculo = input} />
        <input className="form-control w-100" type="text" placeholder="Placa" ref={(input) => this.placaVeiculo = input} />
        <input className="form-control w-100" type="text" placeholder="Preço" ref={(input) => this.precoVeiculo = input} />
        <input className="form-control w-100" type="text" placeholder="ID do cliente" ref={(input) => this.idCliente = input} />
        <input className="form-control w-100" type="text" placeholder="ID do funcionário" ref={(input) => this.idFuncionario = input} />
        <button className='btn btn-info' onClick={() => 
          this.addVeiculoToAPI(
            this.tipoVeiculo.value,
            this.modeloVeiculo.value,
            this.placaVeiculo.value,
            this.precoVeiculo.value,
            this.idCliente.value,
            this.idFuncionario.value
          )
          }>Adicionar Veiculo</button>
          <p>{this.state.message}</p>
        
        
      </div>
    );
  }
}

export default PostVeiculo;
