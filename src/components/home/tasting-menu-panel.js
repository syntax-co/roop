import { motion } from "framer-motion";



const TasingMenUPanel = () => {
    return (
        <div className="w-full h-[75vh]
        my-32
        flex"
        >


            <div className="w-2/5 h-full
            rounded-2xl 
            bg-center bg-cover"

            style={{
                backgroundImage:'url(/images/white-bowl-1.png)',
            }}
            >

            </div>


            <div className="flex-1
            ml-20 flex flex-col justify-center
            font-primary"
            >

                <div className=" mt-20
                text-4xl  text-light
                font-display leading-[150%]"
                >
                    Experience our 
                    <br />
                    Tasting Menu
                </div>

                <div className=" mt-10
                text-greyish font-light"
                >
                    Our new tasting menu, aptly named ROOP, which means beauty, 
                    truly embodies the word. Try our 8 course menu, using innovative 
                    cooking techniques with the rich, authentic flavors of Indian 
                    cuisine combined with fresh local ingredients. Inspired by an 
                    in-depth exploration of Indian culture, this menu promises an 
                    unparalleled gastronomic experience.
                </div>

                <motion.div className="w-fit
                mt-auto mb-20  px-6 py-2
                text-light cursor-pointer
                border border-gold rounded-sm
                "

                whileHover={{
                    backgroundColor:'#ffffff39',
                }}
                >
                
                    View Menu
                </motion.div>


            </div>


        </div>
    );
}
 
export default TasingMenUPanel;