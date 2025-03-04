



import DrinkMenu from '@/components/drink/drink-menu';
import PageHero from '@/components/misc/page-hero';
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


            <PageHero 
            label={'Drink'}
            image='wine-bottles-1.png'
            />

            

            

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