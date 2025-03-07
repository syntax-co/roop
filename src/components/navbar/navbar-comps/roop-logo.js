import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";



const RoopLogo = () => {
    const router = useRouter();
    const [expand,setExpand] = useState(false);

    return (
        <div className="w-fit h-fit flex 
        relative cursor-pointer
        text-[48px] leading-10
        font-logo "

        onMouseEnter={() => {setExpand(true)}}
        onMouseLeave={() => {setExpand(false)}}

        onClick={() => {
            router.push('/')
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


            <motion.div className="text-secondary

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


            <motion.div className="text-secondary
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