import { motion } from "framer-motion";
import { useRouter } from "next/router";


const fileNames = [
    "38-essential-rest.jpg",
    "bar.jpg",
    "crab-plate.jpg",
    "drinks-1.jpg",
    "eat-hero.jpg",
    // "bowl-and-hand-2.jpg",
    "food-item-1.jpg",
    "food-item-2.jpg",
    "food-item-3.jpg",
    "food-item-4.jpg",
    "food-item-5.jpg",
    "food-item-6.jpg",
    "food-item-7.jpg",
    "food-item-8.jpg",
    "food-item-9.jpg",
    "hand-and-bowl.jpg",
    "hex-food.jpg",
    "honey-comb.jpg",
    "purplish-flowers.jpg",
    "room-1.jpg",
    "room-2.jpg",
    "room-3.jpg",
    "roop-image-1.jpg",
    "tea-1.jpg",
    "tea-kettle.jpg",
    "tea-sets.jpg",
    "tm-item-1.jpg"
];



const GalleryItem = ({fileName,dex}) => {

    const {basePath} = useRouter();

    return(
        <motion.div className=" aspect-square
        "
        style={{
            backgroundImage: `url(${basePath? `/${basePath}`:''}/images/gallery/${fileName})`,
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