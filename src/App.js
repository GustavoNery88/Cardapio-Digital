import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ImgRestaurante from './assets/restaurante-1.webp';
import Navegacao from './components/Navegacao';
import { ItemCardapio } from './components/ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';
import Navbar from './components/Navbar';
import PaginaDetalhes from './components/PaginaDetalhes';
import Footer from './components/Footer';

function App() {
  const [paginaSelecionada, setPagina] = useState(0);
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];

  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <div>
                <div className='capa'>
                  <img src={ImgRestaurante} alt="Restaurante" />
                </div>
                <Navegacao setPagina={setPagina} />
                <div className="menu">
                  {paginasMenu[paginaSelecionada].map(item => (
                    <ItemCardapio
                      key={item.nome}
                      nome={item.nome}
                      preco={item.preco}
                      descricao={item.descricao}
                      imagem={item.imagem}
                    />
                  ))}
                </div>
              </div>
            } />
            <Route path='/:nomeUrl' element={<PaginaDetalhes />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
