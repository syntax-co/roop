import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RoopLogo from "./navbar-comps/roop-logo";

import navdata from '@/json_files/nav-data.json';
import { useRouter } from "next/router";
import { MdOutlineArrowDropUp } from "react-icons/md";



const NavItem = ({label,onClick}) => {

    return(
        <motion.div className="text-xl text-light
        mx-4 px-3 cursor-pointer rounded-md
        hover:text-royal
        font-primary"

        initial={{
            backgroundColor:'#e1e1e100'
        }}
        
        whileHover={{
            backgroundColor:'#E1E1E1ff',
            transition:{
                duration:0.5
            }
        }}

        onClick={onClick}
        >
            {
              label&&label.slice(0,1).toUpperCase() + label.slice(1)  
            }
        </motion.div>
    )
}


const NavDropdown = ({items}) => {

    const [open,setOpen] = useState(false)

    return(
        <div className="text-xl text-light
        mx-4 flex relative z-10
        cursor-pointer
        font-primary"

        onClick={() => setOpen(!open)}
        >

            More
            <motion.div className="w-fit h-fit"

            initial={{rotateX:180}}
            animate={{
                rotateX:open?0:180,
                transition:{
                    duration:0.5
                }
            }}
            >
                <MdOutlineArrowDropUp 
                // className="text-light"
                size={30}
                />
            </motion.div>

            <AnimatePresence mode="wait">
            {
                open&&
                <div className="w-full h-full
                absolute top-[100%] 
                "
                >
                        {
                            Object.keys(items).map((key,index) => {
                                return(
                                    <motion.div className="w-full h-fit my-3
                                    flex justify-center items-center
                                    rounded-md 
                                    hover:text-royal
                                    "
                                    key={index}
                                    onClick={() => {
                                        router.push(items[key])
                                        setOpen(false)
                                    }}

                                    initial={{
                                        opacity:0,
                                        backgroundColor:'#e1e1e122'
                                    }}
                                    animate={{
                                        opacity:1,
                                        transition:{
                                            duration:0.5,
                                            delay:.1+(index*0.1)
                                        }
                                    }}
                                    exit={{
                                        opacity:0
                                    }}

                                    whileHover={{
                                        backgroundColor:'#E1E1E1ff',
                                        transition:{
                                            duration:0.5
                                        }
                                    }}


                                    >
                                        {
                                            key&&
                                            key.slice(0,1).toUpperCase() + key.slice(1)  
                                        }
                                    </motion.div>
                                )
                            })
                        }
                </div>
            }
            </AnimatePresence>


        </div>
    )
}


const Navbar = () => {
    
    const router = useRouter()


    return (
        <div className="w-full h-12
        relative 
        flex flex-col"   
        
        

        >
            
            <div className="flex flex-1 px-3"
            >

                <div className="w-1/4 mr-auto"
                >
                    <RoopLogo />
                </div>

                
                {
                    Object.keys(navdata.default).map((key,index) => {
                        
                        if (key !='more') {
                            return(
                                <NavItem 
                                key={index} 
                                label={key}
                                onClick={() => {
                                    router.push(navdata.default[key])
                                }}
                                />
                            )
                        }
                    })
                }


                {
                    <NavDropdown 
                    items = {navdata.default.more}
                    />
                }
            </div>

            

            <div className="w-full h-[2px]
            rounded-full bg-goldfade
            top-[105%]" 
            />

        </div>  
    );
}
 
export default Navbar;