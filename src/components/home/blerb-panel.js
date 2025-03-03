import { motion } from "framer-motion";




const BlerbPanel = () => {
    return (
        <div className="w-full h-[70vh] my-20
        flex flex-col justify-center rounded-xl
        relative left-0 bg-light
        font-primary
        
        sm:h-[90vh]
        md:h-[90vh]
        lg:h-[70vh]
        xl:h-[70vh]

        sm:px-6
        md:px-6
        lg:px-10
        xl:px-16
        "

        >
            
            <div className="text-royal text-4xl
            leading-[150%] font-bold
            font-display

            
            sm:text-2xl 
            md:text-2xl 
            lg:text-3xl 
            xl:text-3xl
            
            "
            >
                an amalgamation of regional indian flavors and modern gastronomic techniques
            </div>


            <div className="text-royal text-lg w-5/6
            my-14 font-light
            "
            >
                Roop, formerly known as rooh, embodies the beauty and soul of india through 
                its innovative dining experience. we aim to strike a modern and personal 
                twist on authentic indian flavors through traditional recipes and fresh 
                local ingredients, prepared with international techniques. 
            </div>


            <motion.div className="w-fit
            px-6 py-2  mt-16
            text-royal cursor-pointer
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