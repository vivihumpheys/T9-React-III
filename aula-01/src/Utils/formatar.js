
//como é auxiliador e nao componente, escrevemos a função com letra minúscula. A gente chama esse 'helper' para utilizar dentro de algum componente, nao precisa importar react, pois nao está usando jsx aqui
const formatarData = (data) => {
    return data.toLocaleDateString();
    //dd/mm/yyyy
  };

  export {
      formatarData
  }