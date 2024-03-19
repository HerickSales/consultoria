import styles from './BlocoTexto.module.css';
import {motion} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';


function BlocoTexto({txt, titulo, icon}){
    const Container= useRef();
    const [position, setPosition] = useState();

   

    return (
        <div ref={Container} className={styles.Container}
        >
            <motion.div className={styles.Textos}
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1 } }
                transition={{ duration: 1 }}
                >


            <div className={styles.DivTitulo}>
               {icon}
                <h1 className={styles.Titulo}>{titulo}</h1>
            </div>
          
            <p className={styles.Txt} dangerouslySetInnerHTML={{__html:txt}}></p>

            </motion.div>
        </div>
    )
}
export default BlocoTexto;