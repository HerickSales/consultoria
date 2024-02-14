import styles from './BlocoTexto.module.css';


function BlocoTexto({txt, titulo}){
 
    return (
        <div className={styles.Container}>

            <div className={styles.Textos}>
            <h1 className={styles.Titulo}>{titulo}</h1>
            <p className={styles.Txt}>{txt}</p>

            </div>
        </div>
    )
}
export default BlocoTexto;