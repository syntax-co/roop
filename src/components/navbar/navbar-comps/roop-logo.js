import { motion } from "framer-motion";
import { useState } from "react";



const RoopLogo = () => {

    const [expand,setExpand] = useState(false);

    return (
        <div className="w-fit h-fit flex 
        relative cursor-pointer
        text-[48px] leading-10
        font-display "

        onMouseEnter={() => {setExpand(true)}}
        onMouseLeave={() => {setExpand(false)}}

        onClick={() => {
            
        }}
        >
            <div className="text-gold
            "
            
            style={{
                transform: 'rotateY(180deg)',
            }}
            >
                R
            </div>


            <motion.div className="text-light

            absolute left-[100%]"

            initial={{ opacity: 0 }}
            animate={{ 
                opacity:expand? 1:0,
                transition:{
                    deylay:.7,
                    duration:.5
                } 
            }}
            >
            
                oo
            </motion.div>


            <motion.div className="text-light
            absolute left-[325%] 
            translate-x-[-12px]"

            initial={{ left:'100%' }}
            animate={{
                left:expand?'325%':'100%',
                transition:{
                    delay:expand?0:.70,
                    duration:.5
                }
            }}
            
            >
                p
            </motion.div>
        </div>
    );
}
 
export default RoopLogo;