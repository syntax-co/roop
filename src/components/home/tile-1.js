


const Tile1 = () => {
    return (
        <div className="w-full h-full
        rounded-3xl relative overflow-hidden
        flex flex-col justify-center
        bg-center bg-cover 
        " 
        style={{
            backgroundImage:'url(images/roop-image-1.png)'
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
            innovative indian cuisine in a vibrant atmosphere
            </div>

        </div>
        );
}
 
export default Tile1;