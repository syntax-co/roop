import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

import navdata from '@/json_files/nav-data.json'
import InstagramButton from "./navbar-comps/instagram-button";
import FacebookButton from "./navbar-comps/facebook-button";
import { useRouter } from "next/router";

// used to display the side menu
// on a mobile device view



const NavItem = ({title,onClick}) => {


    return (
        <div className=" 
        text-white text-2xl
        my-4 px-4 py-2 relative
        font-primary
        "

        onClick={onClick}
        >
            {
                title.slice(0,1).toUpperCase() + title.slice(1)
            }

            <motion.div 
            className="w-full h-[2px] bg-gold
            absolute left-0
            mt-1"
            
            
            />
        </div>
    )
}



const SideMenu = ({showSide,close}) => {

    const router = useRouter()
    

    const handleClick = (path) => {

        close()
        setTimeout(() => {
            router.push(path)
        }, 1000);
    }


    return (
        <motion.div 
        className="h-screen w-[100vw]
        absolute bg-[#14316a62]
        rounded-l-md
        top-0 z-10
        px-12 py-8
        flex flex-col
        backdrop-blur-lg
        
        sm:w-screen
        md:w-[60vw]
        lg:w-[40vw]
        xl:w-[20vw]
        " // Added backdrop-blur-sm class

        initial={{
            right:'-100vw'
        }}
        animate={{
            right:showSide ? '0vw' : '-100vw'
        }}
        >
            
            <div className="h-fit w-full
            flex items-center 
            border-b"
            >

                <div className="w-10 h-10
                ml-auto my-4"
                
                onClick={() => {close()}}
                >
                    <IoClose 
                    size={45}
                    color="white"
                    />
                </div>

            </div>

            <div className="h-fit
            px-4 pt-0"
            >

                {
                    Object.keys(navdata.default).map((key,dex) => {

                        if (key!='more') {
                            return(
                                <NavItem key={key}
                                title={key}
                                onClick={() => {handleClick(navdata.default[key])}}
                                />
                            )
                        }

                    })
                }

                <div 
                className="h-4
                "
                />
                <div className="text-white text-2xl
                font-display"
                >
                    More
                    <div 
                    className=""
                    />
                </div>
                {
                    Object.keys(navdata.default.more).map((key,dex) => {
                        return (
                            <NavItem key={key}
                            title={key}
                            onClick={() => {handleClick(navdata.default.more[key])}}
                            />
                        )
                    })
                }

            </div>
                
            

            <div className="max-h-20 flex-1 mt-10
            border-t
            flex justify-end items-center
            "
            >   
                
                <div className="text-white text-xl mr-auto
                px-3
                font-primary"
                >
                    Visit us on our Socials
                </div>

                <InstagramButton />

                {/* <FacebookButton /> */}
            </div>

        </motion.div>
    );
}
 
export default SideMenu;