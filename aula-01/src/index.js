import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

//como é auxiliador e nao componente, escrevemos a função com letra minúscula. A gente chama esse 'helper' para utilizar dentro de algum componente
function formatarData(data) {
  return data.toLocaleDateString();
}

function FotoUsuario(props) {
  return (
    <div>
      <img
      src={props.usuario.fotoUrl} 
      alt={props.usuario.fotoNome} />
    </div>
  );
}

function DadosUsuario(props) {
  return(
   <div>
     <div>{props.usuario.nome}</div>    
    <div>{props.usuario.hobbie}</div>
  </div>
  );
}

function InformacaoGerais(props) {
  return (
    <div className="InformacaoUsuario">
      <FotoUsuario usuario={props.usuario} />
      <DadosUsuario usuario={props.usuario} />
    </div>
  );
}

function Comentarios(props) {
  return (
    <div className="Comentario">
      <InformacaoGerais usuario={props.autora} />
      <div>{props.comentario}</div>
      {formatarData(props.data)}
    </div>
  );
}

const comentario = {
  data: new Date(),
  comentario: 'Tengo hambre',
  autora: {
    nome: "Viviane",
    hobbie: 'cozinhar',
    fotoUrl: "../vivi.jpg",
    fotoNome: 'foto viviane'
  }  
};

ReactDOM.render(
  <React.StrictMode>
    <Comentarios
    data={comentario.data}
    comentario={comentario.comentario}
    autora={comentario.autora}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
