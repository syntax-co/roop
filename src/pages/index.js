
import Tile1 from "@/components/home/tile-1";
import TastingMenuPanel from "@/components/home/tasting-menu-panel";
import BlerbPanel from "@/components/home/blerb-panel";
import HoldThePresses from "@/components/home/hold-the-presses";
import { motion } from "framer-motion";
import Footer from "@/components/misc/footer";
import HoursTile from "@/components/home/hours";




export default function Home() {
  return (
    <motion.div className="page-body"
    
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >


      <Tile1 />

      <TastingMenuPanel />
      
      <HoursTile />

      <BlerbPanel />

      <HoldThePresses />

      

    </motion.div>
  );
}
