



import DrinkMenu from '@/components/drink/drink-menu';
import drinkmenu from '@/json_files/drink-menu.json';
import { motion } from 'framer-motion';
import { useState } from 'react';










const Drink = () => {
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


            <div className=" mb-20
            h-[70vh] flex flex-col
            left-0 overflow-hidden
            
            sm:rounded-none
            md:rounded-2xl
            lg:rounded-2xl
            xl:rounded-2xl

            sm:w-screen
            md:w-full
            lg:w-full
            xl:w-full

            sm:absolute
            md:relative
            lg:relative
            xl:relative
            "
            >

                <div className="flex-1 p-4
                bg-[#ffffff38] 
                bg-left bg-cover
                flex flex-col
                "

                style={{
                    background:'url(/images/wine-bottles-1.png)',
                    backgroundPosition:'right',
                    backgroundSize:'cover',
                    backgroundAttachment: 'fixed'
                }}
                
                
                >
                
                    <div className=" w-5/6
                    mx-auto my-6 py-6 
                    text-5xl text-white
                    font-display"
                    >
                        <div className='w-fit h-fit bg-[#13274188]
                        px-2 py-1'
                        >
                            Drink
                        </div>
                    </div>

                    <div className="w-5/6 mx-auto py-1 mt-auto mb-12
                    flex items-center justify-center
                    bg-light
                    text-lg
                    font-display"
                    >
                        Reservations
                    </div>

                </div>

            </div>




            

            

            

            <DrinkMenu 
            drinkmenu={drinkmenu}
            />

            
            <div className='w-full h-24'
            >

            </div>

        </motion.div>
    );
}
 
export default Drink;