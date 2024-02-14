import styles from './NavBar.module.css';   
import LogoBranca from '../../assets/Logo+&Lublogo.png';
function NavBar(){
    return(
     
        <div className={styles.Container}>

            <img src={LogoBranca} alt="Logo da empresa" className='ImgLogo'/>
            
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