import styles from './CardPrecos.module.css';

function CardPrecos ({preco, plano, descricao}){
    return(
        <div className={styles.Container}>
            <div className={styles.CardPrecos}>
                <h3 className={styles.Plano}>{plano}</h3>
                <p className={styles.Descricao}> {descricao}</p>
                <p className={styles.Preco}>{preco}</p>
            </div>
        </div>


    );
}

export default CardPrecos;  