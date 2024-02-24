import styles from './BlocoTexto.module.css';
import {motion} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';


function BlocoTexto({txt, titulo}){
    const Container= useRef();
    const [position, setPosition] = useState();

    return (
        <div ref={Container} className={styles.Container}

        >
            <motion.div className={styles.Textos}
                    initial={{opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{duration: 0.5}}>
            <h1 className={styles.Titulo}>{titulo}</h1>
            <p className={styles.Txt}>{txt}</p>

            </motion.div>
        </div>
    )
}
export default BlocoTexto;