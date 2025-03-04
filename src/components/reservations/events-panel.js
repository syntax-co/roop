import { motion } from "framer-motion";
import ReserveButton from "./reserve-button";



const EventsPanel = ({showForm,handleClick}) => {


    return (
        <motion.div className="
        ml-auto rounded-lg overflow-hidden
        bg-center bg-cover 

        
        sm:ml-0
        md:ml-0
        lg:ml-auto
        xl:ml-auto

        sm:h-[35vh]
        md:h-[35vh]
        lg:h-full
        xl:h-full

        sm:w-[95vw]
        md:w-[85%]
        lg:w-[48%]
        xl:w-[48%]
        "

        style={{
            backgroundImage:'url(images/tea-sets.jpg)',
        }}


        
        >

            <div className="w-full h-full
            px-10 py-5 flex flex-col
            bg-[#2828285a]"
            >

                <div className="mt-4 px-3 py-2
                text-2xl text-light bg-[#13274173]
                rounded-md
                font-display"
                >
                    Private Events
                </div>

                <div className="w-full h-fit
                flex mt-auto"
                >

                    <ReserveButton 
                    _type="private-events"
                    className={'h-10'}
                    onClick={handleClick}
                    />
                </div>
                
            </div>
            
           

        </motion.div>
    );
}
 
export default EventsPanel;