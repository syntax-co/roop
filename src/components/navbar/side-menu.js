import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";



// used to display the side menu
// on a mobile device view

const SideMenu = ({showSide,close}) => {
    return (
        <motion.div 
        className="h-screen w-[100vw]
        absolute bg-[#14316a]
        rounded-l-md
        top-0 z-10
        px-12 py-14
        "

        initial={{
            right:'-100vw'
        }}
        animate={{
            right:showSide ? '0vw' : '-100vw'
        }}
        >
            
            <div className="h-10 w-full
            flex items-center"
            >

                <div className="w-10 h-10
                ml-auto"
                
                onClick={() => {close()}}
                >
                    <IoClose 
                    size={45}
                    color="white"
                    />
                </div>

            </div>

            <div className="w-full h-full "
            >

            </div>


        </motion.div>
    );
}
 
export default SideMenu;