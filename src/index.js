import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import BlocoTexto from './components/BlocoTexto';
import { txtHome } from './texts'
import foto from './assets/FotoSemFundoPronta.png'
import CardPrecos from './components/CardPrecos';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <div class="Content">
      <div className="HomeContainer">
  
        <div className="HomeText">
          <img src={foto} alt="Foto de perfil" class="ImgPrincipal"/>
          <BlocoTexto titulo="Sobre mim" txt={txtHome} />
        </div>
      </div>
    </div>
    <div className='Consultoria'>
      <h1>PLANOS</h1>
        <div className='precos'>
        <CardPrecos preco='R$50,98' plano= 'mensal' descricao='3 fichas, 5 dietas 2 elefantes'/>
        <CardPrecos preco='R$50,98' plano= 'Trimestral' descricao='3 fichas, 5 dietas 2 elefantes'/>
        </div>
         </div>


  </React.StrictMode>
);
