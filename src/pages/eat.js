

import EatMenu from '@/components/eat/eat-menu';
import MenuSection from '@/components/eat/menu-section';
import eatmenu from '@/json_files/eat-menu.json'
import { useState } from 'react';









const Eat = () => {
    return (
        <div className="page-body 
        flex flex-col 
        absolute left-0"
        >


            


            <div className="w-screen h-[80vh] flex flex-col
            abslute left-0"
            >


                <div className="flex-1 mt-10 p-4
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
                    text-5xl text-light
                    font-display"
                    >
                        Eat
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

            

            

            <EatMenu 
            eatmenu={eatmenu}
            />

            
            <div className='w-full h-24'
            >

            </div>

        </div>
    );
}
 
export default Eat;