import BlerbTwo from "@/components/tasting-menu/blerbTwo";
import MeetTheChef from "@/components/tasting-menu/meet-the-chef";
import { motion } from "framer-motion";




const TastingMenu = () => {
    return (
        <motion.div className="
        page-body 
        flex flex-col 
        h-fit
        relative left-0"

        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >

            

            <div className="min-h-[70vh]
            flex-1 p-4 mb-20 
            left-0
            bg-[#ffffff38] 
            
            flex flex-col

            sm:rounded-none
            md:rounded-2xl
            lg:rounded-2xl
            xl:rounded-2xl

            

            sm:w-screen
            md:w-full
            lg:w-full
            xl:w-full

            sm:absolute 
            md:relative
            lg:relative
            xl:relative
            "

            style={{
                background:'url(/images/honey-comb.png)',
                backgroundPosition:'center',
                backgroundSize:'conver',
                backgroundAttachment: 'fixed'
            }}
            
            
            >
            
                <div className=" w-5/6
                mx-auto my-6 py-6 
                text-5xl text-white
                font-display"
                >
                    <div className='w-fit h-fit bg-[#13274188]
                    px-2 py-1'
                    >
                        Tasting Menu
                    </div>
                </div>

                

            </div>

            <BlerbTwo />

            <MeetTheChef />

            
        </motion.div>
    );
}
 
export default TastingMenu;