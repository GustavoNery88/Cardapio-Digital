import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { todasAsComidas } from '../cardapio';

function PaginaDetalhes() {
  const { nomeUrl } = useParams();

  const itemSelecionado = todasAsComidas.find(item => item.nome === nomeUrl);

  if (!itemSelecionado) {
    // Tratar o caso em que o item não foi encontrado
    return <div>Item não encontrado</div>;

  }

  console.log(todasAsComidas);
  return (
    <div className='card-conteiner'>
      <Card className="mb-3 card-item-selecionado">
        <Card.Img src={itemSelecionado.imagem} alt="Card image" />
        <Card.Body>
          <Card.Title>{itemSelecionado.nome}</Card.Title>
          <Card.Text>{itemSelecionado.descricao}</Card.Text>
          <Card.Text>
            <small className="text-muted">{itemSelecionado.preco}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PaginaDetalhes;
