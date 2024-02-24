import style from './Carrossel.module.css';
import {motion} from 'framer-motion';
import {useState, useEffect, useRef} from 'react';
import  anterior from '../../assets/left-arrow.png';
import  proximo from '../../assets/right-arrow.png';
import { useAnimation } from 'framer-motion';


function Carrossel({imgs}){
    
    const [current, setCurrent] = useState(0);
    const [scroll, setScroll] = useState(0);
    const Inner = useRef();
    const btnProx = useRef();
    const btnAnt = useRef();
    const img= useRef();
    const imgAnimation= useAnimation();
    
    useEffect(() => {
        setScroll(Inner.current.offsetWidth - Inner.current.scrollWidth);   
    },[]);

 

    function next(){
        if(current === imgs.length - 1){
            setCurrent(0);
        }else{
            setCurrent(current + 1);
        }

        imgAnimation.set({x: 400, opacity: 0});

        imgAnimation.start({
            opacity: 1,
            x: 0,   
            transition: {duration: 1}
        });
        

    }

    function prev(){
        if(current === 0){
            setCurrent(imgs.length - 1);
        }else{
            setCurrent(current - 1);
        }  

        imgAnimation.set({x: -400, opacity: 0});
        imgAnimation.start({
            opacity: 1,
            x: -0,   
            transition: {duration: 1}
        })
    }

 
return(
    <div  className={style.Container}>
        <img src={anterior} ref={btnProx} alt="anterior" className={style.Anterior} onClick={()=>prev()}/> 

    <div ref={Inner} className={style.Inner}>
        <motion.div className={style.Imagens}
          dragConstraints={{ left: scroll, right: 0 }}>
           
                    <motion.div className={style.Imagem}

                    >
                            <motion.img src={imgs[current]} alt="Imagem" ref={img} 
                            animate={imgAnimation}

                            />
                        
                    </motion.div>
        </motion.div>

    </div>
    <img src={proximo} ref={btnAnt} alt="Proximo" className={style.Proximo} onClick={()=>next() }/> 
</div>
)
}

export default Carrossel;