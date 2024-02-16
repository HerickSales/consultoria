import style from './Carrossel.module.css';
import {motion} from 'framer-motion';

function Carrossel({imgs}){
   


    return(
        <div className={style.Carrossel}>
            <div className={style.Inner}>
                {imgs.map((img,index)=>(

                    <motion.div className={style.Img}
                    key={index}
                    >
                        <img src={img} alt='img' key={index}/>

                    </motion.div>

                ))};

                
            </div>
        </div>

    );
}



export default Carrossel;
