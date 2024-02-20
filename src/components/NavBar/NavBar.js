import styles from './NavBar.module.css';   
import LogoBranca from '../../assets/Logo+&Lublogo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';


function showMenu(){
    const nav = document.querySelector('nav');
    nav.style.display = 'flex';
}

function closeMenu(){
    const nav = document.querySelector('nav');
    nav.style.display = 'none';

}




function NavBar(){
    const [clicked, setClicked] = useState(false);

    function MenuControl(){
        if(clicked){
            closeMenu()
            setClicked(false)
        }else{
            showMenu()
            setClicked(true)
        }
    }
   return(
     
            <div className={styles.Container}>
    
                <img src={LogoBranca} alt="Logo da empresa"/>
                <RxHamburgerMenu onClick={()=> MenuControl()} className={styles.ImgMenu} />
                <nav className={styles.NavBar}>
                    <a href="">Home</a>
                    <a href="">Sobre</a>
                    <a href="">Consultoria</a>
                    <a href="">Contato</a>
                </nav>
            </div>
        )

    }

export default NavBar;