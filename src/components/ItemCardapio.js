import React from 'react';
import { Link } from 'react-router-dom';

export function ItemCardapio(props) {
    return (
        <Link className='link' to={`/${props.nome}`}>
            <div className="container-item-cardapio">
                <div>
                    <h2>{props.nome}</h2>
                    <p>{props.preco}</p>
                    <p>{props.descricao}</p>
                </div>
                <img src={props.imagem} alt='' />
            </div>
        </Link>
    )
}