import styles from './CardPrecos.module.css';


function CardPrecos ({preco, plano, promocao, onclick}){


 
    


    return(
    
        <div className={styles.Container} onClick={onclick}>
            <div className={styles.CardPrecos}>
                <h3 className={styles.Plano}>{plano}</h3>
               
                <div className={styles.la}>
                {promocao &&
                 <p className={styles.Promocao}>
                 {promocao}
               </p>}

                <p className={styles.Preco}>{preco}</p>
                </div>
            </div>
        </div>

    );
}

export default CardPrecos;  