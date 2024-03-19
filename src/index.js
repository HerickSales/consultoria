import React, {useEffect, useRef,useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { motion } from 'framer-motion';
import NavBar from './components/NavBar/NavBar';
import BlocoTexto from './components/BlocoTexto';
import { txtHome,txtHome2,txtHome3, txtTop1,txtTop2,txtTop3 } from './texts'
import foto from './assets/ImgPrincipal.png'
import Wpp from './assets/wppIcon.png'
import CardPrecos from './components/CardPrecos';
import { BiSupport,BiCustomize } from "react-icons/bi";
import { FaClipboardList,FaMobileAlt } from "react-icons/fa";
import { SlTarget, SlGraph  } from "react-icons/sl";









const App = () => {

  const [nav, setNav]= useState([]);
  const home= useRef();
  const servicos = useRef();
  const planos = useRef();
 const homeText= useRef()
 


 
  
  async function carregaComponentes(){

    await setNav([home, servicos, planos])
  }

  useEffect(()=>{
    carregaComponentes()
  },[]);
function navWpp(){
  window.open('https://wa.me/message/WOTG2BNYUS7OI1');
} 

function navPlanoMensal(){

    window.open('https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=63767&page=63767')
}
function navPlanoTrimestral(){
    window.open('https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=63768&page=63767')
  }

  return (

    <React.StrictMode>
    <div className="Home" ref={home}>
      <NavBar
        nav={nav}
      />
      <div className="HomeContainer"> 

        <motion.img src={foto} alt="Foto de perfil" className="ImgPrincipal"
          initial={{  x: -100, opacity: 0}}animate={{  x: 0, opacity: 1}}
          transition={{ duration: 2 }}
         
        />  

        < h1 className='FrasePrincipal'>MINHA CONSULTORIA É PARA VOCÊ!!</h1>
          
        <div className="HomeText">
            <BlocoTexto titulo='OBJETIVO' txt={txtHome} icon={<SlTarget className='Icon' />}/>
            <BlocoTexto titulo="PERSONALIZADO" txt={txtHome2} icon={<BiCustomize className='Icon' />} />
            <BlocoTexto titulo="VARIAÇÕES" txt={txtHome3} icon={<SlGraph className='Icon'/>}/>
        </div>
      </div>  
    </div>

    <div className='suspiro'>

    </div>

    <div className='Consultoria' ref={servicos}>

      <h1 className='Titulo'>CONSULTORIA</h1>

      <div className='Textos'>
        <BlocoTexto titulo="ANAMNESE" txt={txtTop1} icon={<FaClipboardList className="Icon"/>} />
        <BlocoTexto titulo="SUPORTE" txt={txtTop2} icon={ <BiSupport className="Icon" />} />
        <BlocoTexto titulo="APLICATIVO" txt={txtTop3} icon={<FaMobileAlt className="Icon" />} />
      </div>
    </div>
    <div className='Planos' ref={planos}>  
      <h1  className='Titulo'>PLANOS</h1>
        <div className='Cards'>
          
        <CardPrecos preco='R$170,00' plano= 'mensal' descricao='3 fichas, 5 dietas 2 elefantes' onclick={navPlanoMensal}/>
        <CardPrecos preco='R$300,00' promocao='R$510,00' plano= 'Trimestral' descricao='3 fichas, 5 dietas 2 elefantes' onclick={navPlanoTrimestral}/>
        </div>
         </div>
         <div className='Contato'>
          <img src={Wpp} alt='IconWpp' onClick={()=> navWpp()}/>
          
         </div>

      <footer className='footer'>
        <p> Desenvolvido por: Herick Sales </p>
        <p>contato: (22)999679064</p>
      </footer>
  </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
