import React, { useState } from 'react';

function Navegacao(props) {
  const [paginaAtiva, setPaginaAtiva] = useState(0);

  const handleClick = (pagina) => {
    props.setPagina(pagina);
    setPaginaAtiva(pagina);
  };

  return (
    <div className="navegacao">
      <button
        className={paginaAtiva === 0 ? 'ativo' : ''}
        onClick={() => handleClick(0)}
      >
        Pratos Principais
      </button>
      <button
        className={paginaAtiva === 1 ? 'ativo' : ''}
        onClick={() => handleClick(1)}
      >
        Sobremesas
      </button>
      <button
        className={paginaAtiva === 2 ? 'ativo' : ''}
        onClick={() => handleClick(2)}
      >
        Bebidas
      </button>
    </div>
  );
}

export default Navegacao;
