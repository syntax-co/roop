import PageHero from "@/components/misc/page-hero";
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

            

            <PageHero 
            label="Tasting Menu"
            image="hand-and-bowl.webp"
            />

            <BlerbTwo />

            <MeetTheChef />

            
        </motion.div>
    );
}
 
export default TastingMenu;