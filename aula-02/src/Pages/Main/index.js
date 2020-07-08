import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Api from "../../Services/Api";

class Main extends Component {
  //o estado inicia vazio, fazemos em compartimentos a requisição, para evitar quebras
  state = {
    biographies: [],
  };

  //aqui no didmount, indica que quando ele terminar de carregar o componente, podemos chamar a api
  componentDidMount() {
    this.loadBiographies();
  }
  //essa função é para carregar os dados da api
  loadBiographies = async () => {
    //resposta da api
    const response = await Api.get(`/biographies`);
    console.log("resposta da requisição api", response);

    //o docs é um objeto que está dentro dessa api, por isso chamamos entre chaves
    const { docs } = response.data;
    console.log("retorno dos dados da api pelo metodo get", docs);

    this.setState({ biographies: docs });
  };

  render() {
    const { biographies } = this.state;
    console.log("o que vem do state", biographies);

    return (
      <div className="biography-list">
        {biographies.map((biography) => (
          <article key={biography._id}>
            <strong className="name-woman">{biography.nome}</strong>
            <p className="biography-description">{biography.description}</p>
            <Link to={`/biographies/${biography._id}`}>Acessar</Link>
          </article>
        ))}
      </div>
    );
  }
}

export default Main;
