import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RoopLogo from "./navbar-comps/roop-logo";

import navdata from '@/json_files/nav-data.json';
import { useRouter } from "next/router";
import { MdOutlineArrowDropUp } from "react-icons/md";
import MobileNavButton from "./navbar-comps/mobile-nav-button";
import NavDropdown from "./navbar-comps/nav-dropdown";
import NavItem from "./navbar-comps/nav-item";









const Navbar = ({onClick}) => {
    
    const router = useRouter()


    return (
        <div className="w-full h-12
        relative 
        flex flex-col
        
        sm:px-0
        md:px-10
        lg:px-32
        xl:px-52
        "
        >
            
            <div className="flex flex-1 px-3"
            >

                <div className="w-1/4 mr-auto"
                >
                    <RoopLogo />
                </div>

                
                <div className="flex flex-1 justify-end items-center
                
                sm:hidden
                md:hidden
                lg:flex
                xl:flex
                "
                >

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

                    
                    <NavDropdown 
                    items = {navdata.default.more}
                    />
                
                </div>


                <MobileNavButton 
                onClick={onClick}
                />
                
            </div>



            

            <div className="w-full h-[2px]
            rounded-full bg-goldfade
            top-[105%]" 
            />

        </div>  
    );
}
 
export default Navbar;