import { motion } from "framer-motion";
import { useRouter } from "next/router";




const BlerbPanel = () => {
    const router = useRouter();

    return (
        <div className=" my-20 mx-auto
        flex flex-col justify-center rounded-xl
        relative left-0 bg-light
        font-primary
        


        sm:w-[95vw]
        md:w-[95vw]
        lg:w-full
        xl:w-full

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

            onClick={() => router.push('https://www.google.com/maps/place/ROOP+Chicago+Innovative+Indian+Restaurant+%26+Cocktail+Bar/@41.8846536,-87.6471423,880m/data=!3m2!1e3!4b1!4m6!3m5!1s0x880e2dae16991e07:0x9c8a0bc6efbdd0fa!8m2!3d41.8846536!4d-87.6471423!16s%2Fg%2F11gxxsdb5t?entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D')}


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