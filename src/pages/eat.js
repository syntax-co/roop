

import EatMenu from '@/components/eat/eat-menu';
import MenuSection from '@/components/misc/menu-section';
import PageHero from '@/components/misc/page-hero';
import eatmenu from '@/json_files/eat-menu.json'
import { motion } from 'framer-motion';
import { useState } from 'react';









const Eat = () => {
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
            label={'Eat'}
            image={'food-variety.jpg'}
            />
            

            <EatMenu 
            eatmenu={eatmenu}
            />

            
            <div className='w-full h-24'
            >

            </div>

        </motion.div>
    );
}
 
export default Eat;