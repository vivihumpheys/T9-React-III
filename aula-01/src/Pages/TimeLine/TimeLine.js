import React from 'react';
import Comentario from '../../Components/Comentario/Comentario';

const TimeLine = () => {
    return (
        <Comentario 
        data={comentario.data}
        comentario={comentario.comentario}
        autora={comentario.autora}
        />
    )
};


const comentario = {
    data: new Date(),
    comentario: 'Tengo hambre',
    autora: {
      nome: "Viviane",
      hobbie: 'cozinhar',
      fotoUrl: "https://media.giphy.com/media/2UIfiAnWMxR5PcqB50/giphy.gif",
      fotoNome: 'foto viviane'
    }  
  };
  

export default TimeLine;
