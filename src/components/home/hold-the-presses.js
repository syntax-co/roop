import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState } from "react";


const PressTile = ({title,image,path}) => {
    
    const router = useRouter();
    const [hovering,setHovering] = useState(false);

    return (
        <motion.div
            className=" aspect-square m-6 
            flex flex-col text-white
            font-primary 
            
            sm:w-[82vw]
            md:w-[82vw]
            lg:w-[450px]
            xl:w-[450px]

            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="w-full h-10 px-2
                bg-[#ffffff39] rounded-md
                flex items-center"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {title ? title : 'Top 10 Restaurants in the Chicago Area'}
            </motion.div>

            <motion.div
            className="flex-1 my-3
            bg-[#ffffff49] rounded-md
            overflow-hidden
            cursor-pointer
            flex"
            
            onClick={() => {
                router.push(path);
            }}
            >
                <div className="w-full h-full
                bg-center bg-cover"
                
                style={{
                    backgroundImage: `url(${image})`,
                }}

                whileHover={{
                    scale: 1.02,
                    transition:{
                        duration: 0.5
                    }
                }}
                />
            </motion.div>
        </motion.div>
    );
}



const HoldThePresses = () => {
    return (
        <div className="my-32 mx-auto
        flex flex-col justify-center
        font-primary
        
        sm:w-[95vw]
        md:w-[95vw]
        lg:w-full
        xl:w-full
        "

        
        >


            <div className="text-light text-4xl
            font-display"
            >
                Hold The Presses
            </div>

            
            <div className="flex-1
            rounded-md
            flex

            sm:min-h-[80vh]
            md:min-h-[80vh]
            lg:min-h-[40vh]
            xl:min-h-[40vh]

            sm:mt-0
            md:mt-0
            lg:mt-10
            xl:mt-10

            sm:flex-col
            md:flex-col
            lg:flex-row
            xl:flex-row
            "
            >


                

                <PressTile 
                title={'The 38 Essential Chicago Restaurants'}
                image={'images/38-essential-rest.jpg'}
                path={'https://chicago.eater.com/maps/38-best-restaurants-in-chicago'}
                />

                <PressTile 
                title={'EATER Awards Restaurant of the Year'}
                image={'images/eater-awards.jpg'}
                path={'https://chicago.eater.com/2019/11/18/20970432/eater-awards-2019-finalists-best-design-restaurant-chef'}
                />

            </div>

            <div className="min-h-[50vh]
            flex-1
            rounded-md 
            flex

            sm:min-h-[80vh]
            md:min-h-[80vh]
            lg:min-h-[50vh]
            xl:min-h-[50vh]

            sm:mt-0
            md:mt-0
            lg:mt-10
            xl:mt-10

            sm:flex-col
            md:flex-col
            lg:flex-row
            xl:flex-row
            "
            >

                
                <PressTile 
                title={'Embracing and Defying Tradition'}
                image={'images/phil-vettel-review.jpg'}
                path={'https://www.chicagotribune.com/2019/10/03/review-roohs-progressive-indian-cooking-embraces-tradition-while-defying-it/'}
                /> 

                <PressTile 
                title={'A Michelin Guide Restaurant in Chicago'}
                image={'images/michelin-guide.jpg'}
                path={'https://guide.michelin.com/us/en/illinois/chicago/restaurant/roop-chicago'}
                />


            </div>

        </div>
    );
}
 
export default HoldThePresses;