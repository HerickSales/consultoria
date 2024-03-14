import styles from './NavBar.module.css';   
import LogoBranca from '../../assets/Logo+&Sublogo.png';
import {motion} from 'framer-motion';
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





function NavBar({nav}){
    const [clicked, setClicked] = useState(false);
    const isMobile = window.innerWidth <= 768;
  
    function MenuControl(){
        if(clicked){
            closeMenu()
            setClicked(false)
        }else{
            showMenu()
            setClicked(true)
        }
    }

    function scrollToRef(ref){
    
        ref.current.scrollIntoView({behavior: 'smooth'})
        if(isMobile){
            closeMenu()
            setClicked(false)
        }
    }
   return(
     
            <motion.div className={styles.Container}
               
                >
    
                <img src={LogoBranca} alt="Logo da empresa"/>
                <RxHamburgerMenu onClick={()=> MenuControl()} className={styles.ImgMenu} />
                <nav className={styles.NavBar}>
                    {
                        nav.map((ref, index)=>{
                            
                            return(
                                <button key={index} onClick={()=> scrollToRef(ref)} className={styles.NavButton}>{ref.current.className}</button>
                            )
                        })
                    }
                    
                </nav>
            </motion.div>
        )

    }

export default NavBar;