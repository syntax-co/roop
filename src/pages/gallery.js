import { motion } from "framer-motion";


const fileNames = [
    "38-essential-rest.png",
    "bar.png",
    "crab-plate.png",
    "drinks-1.png",
    "eat-hero.png",
    // "bowl-and-hand-2.png",
    "food-item-1.png",
    "food-item-2.png",
    "food-item-3.png",
    "food-item-4.png",
    "food-item-5.png",
    "food-item-6.png",
    "food-item-7.png",
    "food-item-8.png",
    "food-item-9.png",
    "hand-and-bowl.png",
    "hex-food.png",
    "honey-comb.png",
    "purplish-flowers.png",
    "room-1.png",
    "room-2.png",
    "room-3.png",
    "roop-image-1.png",
    "tea-1.png",
    "tea-kettle.png",
    "tea-sets.png",
    "tm-item-1.png"
];



const GalleryItem = ({fileName,dex}) => {

    return(
        <motion.div className=" aspect-square
        "
        style={{
            backgroundImage: `url(/images/gallery/${fileName})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}

        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: .75 + (dex * 0.1)
            }
        
        }}

        whileHover={{
            scale: 1.1,
            borderRadius: "10px",
        }}

        >

        </motion.div>
    )
}


const Gallery = () => {
    return (
        <motion.div className="w-full h-fit   mt-14
        grid grid-cols-4 
        
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        "

        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >

            <div className="h-24 
            col-span-4 row-span-1"
            >
                <div className="text-4xl text-white font-bold
                px-2
                font-display"
                >
                    Gallery
                </div>

                <div className="w-full h-[2px] bg-gold rounded-full
                my-3" 
                />
            </div>

            {
                fileNames.map((fileName, index) => {
                    return(
                        <GalleryItem 
                        key={'gallery-item'+index}
                        fileName={fileName}
                        dex={index}
                        />
                    )
                })
            }
            

            <div
            className="h-24 col-span-4 row-span-1"
            />

        </motion.div>
    );
}
 
export default Gallery;