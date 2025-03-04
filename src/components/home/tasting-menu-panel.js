import { motion } from "framer-motion";



const TasingMenUPanel = () => {
    return (
        <div className="w-full
        my-32 relative
        flex
        
        sm:relative left-0

        sm:h-fit
        md:h-fit
        lg:h-[75vh]
        xl:h-[75vh]

        sm:flex-col-reverse
        md:flex-col-reverse
        lg:flex-row
        xl:flex-row"
        >


            <div className="
            rounded-2xl overflow-hidden
            bg-center bg-cover
            
            sm:hidden
            md:hidden
            lg:block 
            xl:block

            sm:w-screen sm:h-[80vh]
            md:w-screen md:h-[70vh]
            lg:w-2/5 lg:h-full
            xl:w-2/5 xl:h-full
            
            "

            style={{
                backgroundImage:'url(/images/white-bowl-1.jpg)',
            }}
            ></div>

                



            <div className="flex-1
            flex flex-col justify-center
            relative
            font-primary 
            text-light


            sm:min-h-[80vh]

            sm:w-5/6
            md:w-5/6

            sm:ml-8
            md:ml-0
            lg:ml-20
            xl:ml-20"
            >

                <div className=" mt-20
                text-4xl  
                font-display leading-[150%]"
                >
                    Experience our 
                    <br />
                    Tasting Menu
                </div>

                <div className=" mt-10
                
                font-light"
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