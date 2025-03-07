import { motion } from "framer-motion";
import ReserveButton from "./reserve-button";
import { useRouter } from "next/router";






const AlaCartePanel = ({showForm,handleClick}) => {

    const {basePath} = useRouter();

    return (
        <motion.div className="
        rounded-lg px-10 py-4 
        flex flex-col bg-top bg-cover

        my-5        

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
            backgroundImage:`url(${process.env.NEXT_PUBLIC_BASE_URL}/images/webp-images/lady.webp)`,
            // boxShadow:'inset 0px 0px 10px 0px rgba(0,0,0,0.5)',
        }}

        
        >

            <div className="mt-4 px-3 py-2
            text-2xl text-secondary bg-royalfade
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