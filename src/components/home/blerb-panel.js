import { motion } from "framer-motion";




const BlerbPanel = () => {
    return (
        <div className="w-full h-[70vh] my-20
        flex flex-col justify-center
        font-primary"

        >
            
            <div className="text-light text-4xl
            px-16 leading-[150%]"
            >
                AN AMALGAMATION OF REGIONAL INDIAN FLAVORS AND MODERN GASTRONOMIC TECHNIQUES
            </div>


            <div className="text-greyish text-lg w-5/6
            px-16 my-14 font-light
            "
            >
                ROOP, formerly known as ROOH, embodies the beauty and soul of India through 
                its innovative dining experience. We aim to strike a modern and personal 
                twist on authentic Indian flavors through traditional recipes and fresh 
                local ingredients, prepared with international techniques. 
            </div>


            <motion.div className="w-fit
            px-6 py-2 mx-16 mt-16
            text-light cursor-pointer
            border border-gold rounded-sm
            "

            whileHover={{
                backgroundColor:'#ffffff39',
            }}
            >
                Directions
            </motion.div>


        </div>
    );
}
 
export default BlerbPanel;