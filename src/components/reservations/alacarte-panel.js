import { motion } from "framer-motion";
import ReserveButton from "./reserve-button";






const AlaCartePanel = ({showForm,handleClick}) => {


    return (
        <motion.div className="w-[48%] h-full
        rounded-lg bg-light 
        px-10 py-5 
        flex flex-col bg-top bg-cover
        "

        style={{
            backgroundImage:'url(/images/lady.png)',
            // boxShadow:'inset 0px 0px 10px 0px rgba(0,0,0,0.5)',
        }}

        initial={{width:'48%'}}
        
        >

            <div className="mt-4 px-3 py-2
            text-2xl text-light bg-[#13274173]
            rounded-md
            font-display"
            >
                Ala Carte / 
                <br />
                Tasting Menu
            </div>


            <div className="w-full h-fit
            flex mt-auto"
            >
                <ReserveButton 
                label={'Ala Carte'}
                _type="ala-carte"
                bgColor="#13274198"
                className="mr-2"
                onClick={handleClick}
                />
                <ReserveButton 
                label={'Tasting Menu'}
                _type="tasting-menu"
                onClick={handleClick}
                />
            </div>

        </motion.div>
    );
}
 
export default AlaCartePanel;