import ReservationForm from "@/components/reservation-manager/reservation-form";
import AlaCartePanel from "@/components/reservations/alacarte-panel";
import EventsPanel from "@/components/reservations/events-panel";
import TastingPanel from "@/components/reservations/tasting-panel";
import { motion } from "framer-motion";
import { useState } from "react";




const Reservations = () => {

    const [showForm,setShowForm] = useState('none')

    return (
        <motion.div 
        className="page-body "
        
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <div className="text-light
            text-4xl my-4 px-4
            font-display"
            >
                Reservations
            </div>

            <div className="w-full h-[2px] bg-gold
            rounded-full
            mb-4" 
            />

            <motion.div key={'reservations'}
            className="w-full h-[65vh]
            flex items-center"
            
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
                
                <AlaCartePanel 
                showForm={showForm}
                handleClick={() => setShowForm('ala-carte')}
                />
                    
                <EventsPanel 
                showForm={showForm}
                handleClick={() => setShowForm('events')}
                />

            </motion.div>

            

        </motion.div>
    );
}
 
export default Reservations;