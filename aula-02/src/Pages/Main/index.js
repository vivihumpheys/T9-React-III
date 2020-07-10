import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Api from "../../Services/Api";

class Main extends Component {
  //o estado inicia vazio, fazemos em compartimentos a requisição, para evitar quebras
  state = {
    biographies: [],
    biographyInfo: {},
    page: 1
  
  };

   //aqui no didmount, indica que quando ele terminar de carregar o componente, podemos chamar a api
  componentDidMount() {
    this.loadBiographies();
  }
  //essa função é para carregar os dados da api
  loadBiographies = async (page=1) => {
    //resposta da api
    const response = await Api.get(`/biographies?page=${page}`);
    console.log("resposta da requisição api", response);

    //o docs é um objeto que está dentro dessa api, por isso chamamos entre chaves
    const { docs, ...biographyInfo } = response.data;
    console.log("retorno dos dados da api pelo metodo get", docs);

    this.setState({ biographies: docs, page, biographyInfo });
  };

    prevPage = () => {
      const {page} = this.state;
      if (page === 1) return;

      const pageNumber = page - 1;
      this.loadBiographies(pageNumber);

    }

    nextPage = () => {
      const {page, biographyInfo} = this.state;
      if(page===biographyInfo.pages) return;

      const pageNumber = page + 1;
      this.loadBiographies(pageNumber);
      
    }

  render() {
    const { biographies, page, biographyInfo } = this.state;
    console.log("o que vem do state", biographies);

    return (
      <div className="biography-list">
        {biographies.map((biography) => (
          <article key={biography._id}>
            <strong className="name-woman">{biography.nome}</strong>
            <p className="biography-description">{biography.description}</p>
            <Link to={`/biography/${biography._id}`}>Acessar</Link>
          </article>
      
        ))}
        <div className='actions'>
          <button disabled={page===1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page===biographyInfo.pages} onClick={this.nextPage}>Próximo</button>
        </div>


      </div>
    );
  }
}

export default Main;
