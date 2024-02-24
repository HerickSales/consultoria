import React, {useEffect, useRef,useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { motion } from 'framer-motion';
import NavBar from './components/NavBar/NavBar';
import BlocoTexto from './components/BlocoTexto';
import { txtHome, txtConsultoria } from './texts'
import foto from './assets/FotoSemFundoPronta.png'
import test from './assets/ImgAgachamento.jpg'
import Wpp from './assets/wppIcon.png'
import CardPrecos from './components/CardPrecos';
import Carrosel from './components/Carrossel';



const App = () => {
  const imgs= [test, foto, Wpp, test,foto,Wpp,test];


  const [nav, setNav]= useState([]);
  const home= useRef();
  const servicos = useRef();
  const planos = useRef();
  
  async function carregaComponentes(){

    await setNav([home, servicos, planos])
  }

  useEffect(()=>{
    carregaComponentes()
  },[]);

  return (

    <React.StrictMode>
    <div className="Home" ref={home}>
      <NavBar
        nav={nav}
      />
      <div className="HomeContainer">

        <div className="HomeText" >
          <motion.img src={foto} alt="Foto de perfil" className="ImgPrincipal"
            initial={{  x: -100 }}
            animate={{  x: 0 }}
            
            transition={{ duration: 1 }}
          />
          <BlocoTexto titulo="Sobre mim" txt={txtHome} />
        </div>
      </div>
    </div>

    <div className='Consultoria' ref={servicos}>

      <h1 className='Titulo'>Quer saber mais sobre a meus serviços?</h1>

      <div className='CarrosselImg'>
        <Carrosel imgs={imgs} />
      </div>
      <div className='BackgroundImageLogo'></div>
      <div className='Textos'>
        <BlocoTexto titulo="Consultoria" txt={txtConsultoria} />
      </div>
    </div>
    <div className='Planos' ref={planos}>  
      <h1  className='Titulo'>PLANOS</h1>
        <div className='Cards'>
        <CardPrecos preco='R$50,98' plano= 'mensal' descricao='3 fichas, 5 dietas 2 elefantes'/>
        <CardPrecos preco='R$50,98' plano= 'Trimestral' descricao='3 fichas, 5 dietas 2 elefantes'/>
        </div>
         </div>
         <div className='Contato'>
          <img src={Wpp} alt='IconWpp'/>
         </div>

  </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
