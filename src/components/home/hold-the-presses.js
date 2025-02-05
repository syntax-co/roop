import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState } from "react";



const PressTile = ({title,image,path}) => {
    
    const router = useRouter();
    const [hovering,setHovering] = useState(false);

    return (
        <motion.div
            className="flex-1 m-6 
            flex flex-col text-white
            font-primary"
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
            bg-light rounded-md
            overflow-hidden
            cursor-pointer"
            
            onClick={() => {
                router.push(path);
            }}
            >
                <motion.div className="w-full h-full"
                
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}

                whileHover={{
                    scale: 1.02,
                    transition:{
                        duration: 0.5
                    }
                }}
                >

                </motion.div>
            </motion.div>
        </motion.div>
    );
}



const HoldThePresses = () => {
    return (
        <div className="w-full h-fit my-20
        flex flex-col justify-center
        font-primary"
        >


            <div className="text-light text-4xl
            font-display"
            >
                Hold The Presses
            </div>

            
            <div className="min-h-[50vh] flex-1 mt-10
            rounded-md
            flex
            "
            >


                

                <PressTile 
                title={'The 38 Essential Chicago Restaurants'}
                image={'/images/38-essential-rest.png'}
                path={'https://chicago.eater.com/maps/38-best-restaurants-in-chicago'}
                />

                <PressTile 
                title={'EATER Awards Restaurant of the Year'}
                image={'/images/eater-awards.png'}
                path={'https://chicago.eater.com/2019/11/18/20970432/eater-awards-2019-finalists-best-design-restaurant-chef'}
                />

            </div>

            <div className="min-h-[50vh]
            flex-1 mt-10
            rounded-md 
            flex
            shadow-inner
            "
            >


                <PressTile 
                title={'Embracing and Defying Tradition'}
                image={'/images/phil-vettel-review.png'}
                path={'https://www.chicagotribune.com/2019/10/03/review-roohs-progressive-indian-cooking-embraces-tradition-while-defying-it/'}
                /> 
                <PressTile 
                title={'A Michelin Guide Restaurant in Chicago'}
                image={'/images/michelin-guide.png'}
                path={'https://guide.michelin.com/us/en/illinois/chicago/restaurant/roop-chicago'}
                />


            </div>

        </div>
    );
}
 
export default HoldThePresses;