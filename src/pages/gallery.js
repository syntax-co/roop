import { motion } from "framer-motion";
import { useRouter } from "next/router";


const fileNames = [
    "38-essential-rest.webp",
    "bar.webp",
    "crab-plate.webp",
    "drinks-1.webp",
    "eat-hero.webp",
    // "bowl-and-hand-2.webp",
    "food-item-1.webp",
    "food-item-2.webp",
    "food-item-3.webp",
    "food-item-4.webp",
    "food-item-5.webp",
    "food-item-6.webp",
    "food-item-7.webp",
    "food-item-8.webp",
    "food-item-9.webp",
    "hand-and-bowl.webp",
    "hex-food.webp",
    "honey-comb.webp",
    "purplish-flowers.webp",
    "room-1.webp",
    "room-2.webp",
    "room-3.webp",
    "roop-image-1.webp",
    "tea-1.webp",
    "tea-kettle.webp",
    "tea-sets.webp",
    "tm-item-1.webp"
];



const GalleryItem = ({fileName,dex}) => {

    const {basePath} = useRouter();

    return(
        <motion.div className=" aspect-square
        "
        style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}/images/webp-images/gallery/${fileName})`,
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