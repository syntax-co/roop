


const Tile1 = () => {
    return (
        <div className="mx-auto
        rounded-3xl relative overflow-hidden
        flex flex-col justify-center
        bg-center bg-cover 

        sm:h-[85vh]
        md:h-[85vh]
        lg:h-[70vh]
        xl:h-[70vh]

        sm:w-[95vw]
        md:w-[95vw]
        lg:w-full
        xl:w-full

        " 
        style={{
            backgroundImage:'url(images/webp-images/roop-image-1.webp)'
        }}
        >

            <div className="w-full h-full
            absolute
            bg-[#27272756]" 
            
            />


            <div className=" relative
            text-white font-bold  
            mx-auto px-3 text-center
            
            font-display

            sm:text-2xl
            md:text-2xl
            lg:text-3xl
            xl:text-3xl
            "
            >
            INNOVATIVE INDIAN CUISINE IN A VIBRANT ATMOSPHERE
            </div>

        </div>
        );
}
 
export default Tile1;