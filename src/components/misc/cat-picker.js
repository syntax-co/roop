import { motion } from "framer-motion";
import { useState } from "react";



const CatTile = ({cat, section, onClick}) => {

    return(
        <motion.div className="flex-1 min-w-fit max-h-fit bg-[#ffffff88] 
        rounded-full mx-2 my-3 px-3 py-1 text-royal
        text-sm flex items-center justify-center
        font-primary cursor-pointer"
        
        onClick={onClick}

        animate={{
            backgroundColor:section===cat?'#ffffee':'#ffffff88',
        }}

        whileHover={{
            backgroundColor:'#ffffeec6'
        }}

        >
            {cat&&cat}
        </motion.div>
    )
}


const CatPicker = ({menu,section,setSection}) => {

    return (
        <div
        className="flex flex-wrap justify-center
        
        mt-12 px-3"
        >
            {
                menu&&
                Object.keys(menu).map((cat, index) => {

                    return(
                        <CatTile 
                        key={index}
                        cat={cat}
                        section={section}
                        onClick={() => setSection(cat)}
                        />
                    )
                })
            }
        </div>
    );
}
 
export default CatPicker;