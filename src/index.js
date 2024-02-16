import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import BlocoTexto from './components/BlocoTexto';
import { txtHome, txtConsultoria } from './texts'
import foto from './assets/FotoSemFundoPronta.png'
import test from './assets/ImgAgachamento.jpg'
import Wpp from './assets/wppIcon.png'
import CardPrecos from './components/CardPrecos';
import { motion } from 'framer-motion';
import Carrosel from './components/Carrossel';



const root = ReactDOM.createRoot(document.getElementById('root'));
const imgs= [test, test, test, test]
root.render(
  <React.StrictMode>
    <NavBar />
    <div class="Content">
      <div className="HomeContainer">

q        <div className="HomeText">
          <img src={foto} alt="Foto de perfil" class="ImgPrincipal"/>
          <BlocoTexto titulo="Sobre mim" txt={txtHome} />
        </div>
      </div>
    </div>

    <div className='Consultoria'>
      <div className='BackgroundImageLogo'></div>

      <h1 className='Titulo'>Quer saber mais sobre a meus serviços?</h1>

      <div className='CarrosselImg'>
        <Carrosel imgs={imgs} />
      </div>
      <div className='Textos'>
        <BlocoTexto titulo="Consultoria" txt={txtConsultoria} />
      </div>
    </div>
    <div className='Precos'>
      <h1  className='Titulo'>PLANOS</h1>
        <div className='Cards'>
        <CardPrecos preco='R$50,98' plano= 'mensal' descricao='3 fichas, 5 dietas 2 elefantes'/>
        <CardPrecos preco='R$50,98' plano= 'Trimestral' descricao='3 fichas, 5 dietas 2 elefantes'/>
        </div>
         </div>

         <div className='Contato'>
          <img src={Wpp}/>
         </div>

  </React.StrictMode>
);
