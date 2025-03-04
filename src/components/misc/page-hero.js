





const PageHero = ({label,image}) => {
    return (
        <div className="min-h-[70vh]
            flex-1 left-0
            p-4 mb-20 mt-6 mx-auto 
            bg-[#ffffff38] 
            
            flex flex-col

            sm:rounded-none
            md:rounded-2xl
            lg:rounded-2xl
            xl:rounded-2xl

            

            sm:w-screen
            md:w-[85%]
            lg:w-[85%]
            xl:w-[85%]

            sm:relative 
            md:relative
            lg:relative
            xl:relative
            "

            style={{
                background:`url(images/${image&&image})`,
                backgroundPosition:'center',
                backgroundSize:'cover',
                backgroundAttachment: 'fixed'
            }}
            
            
            >
            
                <div className=" w-5/6
                mx-auto my-6 py-6 
                text-5xl text-white
                font-display"
                >
                    <div className='w-fit h-fit bg-[#13274188]
                    px-2 py-1'
                    >
                        {label&&label}
                    </div>
                </div>

                

            </div>
    );
}
 
export default PageHero;