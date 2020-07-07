import React from 'react';
import InformacaoGerais from '../InformacoesGerais/InformacoesGerais';
import {formatarData} from '../../Utils/formatar';

const Comentario = (props) => {
    return (
      <div className="comentario__wrapper">
        <InformacaoGerais pessoa = {props.autora} />
        <div>{props.comentario}</div>
        {formatarData(props.data)}
      </div>
    );
  };

  export default Comentario;