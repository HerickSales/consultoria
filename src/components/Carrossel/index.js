import style from './Carrossel.module.css';
import {motion} from 'framer-motion';
import {useState, useEffect, useRef} from 'react';

function Carrossel({imgs}){
    const Carrossel= useRef()
    const [x, setX]= useState();


    useEffect(()=>{
        setX(Carrossel.current?.scrollWidth - Carrossel.current?.offsetWidth);
        console.log(x)
    },[])
    


    return(
        <motion.div ref={Carrossel} className={style.Carrossel}>
            <motion.div className={style.Inner}
                drag="x"
                dragConstraints={{left:0,right:-x}}
            >
                {imgs.map((img,index)=>(
                    <motion.div className={style.Img}
                    key={index}
                    >
                        <img src={img} alt='img' key={index}/>
                    </motion.div>

                ))};

                
            </motion.div>
        </motion.div>

    );
}
export default Carrossel;
