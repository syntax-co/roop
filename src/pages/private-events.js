import PageHero from "@/components/misc/page-hero";
import EventGallary from "@/components/private-events/event-space-gallery";
import EventForm from "@/components/private-events/private-event-form";
import { motion } from "framer-motion";





const PrivateEvents = () => {
    return (
        <motion.div className="
        page-body 
        flex flex-col 
        h-fit
        relative left-0"

        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >

            <PageHero
            label={'Private Events'}
            image='tea-kettle.jpg'
            />



            <EventForm />


            <EventGallary />


        </motion.div>
    );
}
 
export default PrivateEvents;