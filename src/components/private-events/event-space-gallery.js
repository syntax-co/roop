import { motion, useInView } from "framer-motion";
import { useRef } from "react";




const EventGallary = () => {
    const ref1 = useRef(null);
    const inView= useInView(ref1,{
        once:true,
        threshold:1,
    })
    const ref2 = useRef(null);
    const inView2= useInView(ref2,{
        once:true,
        threshold:0.75
    })
    const ref3 = useRef(null);
    const inView3 = useInView(ref3,{
        once:true,
        threshold:0.75
    })
    const ref4 = useRef(null);
    const inView4 = useInView(ref4,{
        once:true,
        threshold:0.75
    })


    return (
        <div className="w-full h-fit mt-28
        mx-auto mb-20 
        flex flex-col
        
        
        sm:w-screen
        md:w-[85%]
        lg:w-[85%]
        xl:w-[85%]
        "

        >


            <div className="
            text-light text-4xl
            font-display"
            
            >
                Gallery
            </div>

            <div ref={ref1} 
            className="w-full h-[2px] bg-goldfade
            my-4"
            />


            <motion.div className="w-full h-[40vh] my-8
            flex
            
            
            "

            initial={{opacity:0}}
            animate={{
                opacity:inView ? 1 : 0,
                transition:{
                    delay:.5,
                    duration:.65
                }
            }}
            >

                <div
                className="flex-1
                rounded-md
                
                sm:mx-4
                md:mx-4
                lg:mx-0
                xl:mx-0"

                style={{
                    backgroundImage:'url(images/room-1.jpg)',
                    backgroundSize:'cover',
                    backgroundPosition:'center'
                }}
                />


                <div
                className="w-1/3 h-full ml-4
                rounded-md
                bg-light
                
                sm:hidden
                md:hidden
                lg:block
                xl:block

                sm:mx-4
                md:mx-4
                lg:mx-0
                xl:mx-0
                "

                
                />

            </motion.div>

            <motion.div ref={ref2} 
            className="w-full h-[40vh] my-8
            flex"

            initial={{opacity:0}}
            animate={{
                opacity:inView2 ? 1 : 0,
                transition:{
                    delay:.5,
                    duration:.65
                }
            }}
            >
                <div
                className="w-1/3 mr-4
                rounded-md bg-goldfade
                
                sm:hidden
                md:hidden
                lg:block
                xl:block"

                
                />


                <div
                className="flex-1
                rounded-md
                sm:mx-4
                md:mx-4
                lg:mx-0
                xl:mx-0
                "

                style={{
                    backgroundImage:'url(images/bar.jpg)',
                    backgroundSize:'cover',
                    backgroundPosition:'center'
                }}
                />
            </motion.div>

            <motion.div ref={ref3}  
            className="w-full h-[40vh] my-8
            flex"

            initial={{opacity:0}}
            animate={{
                opacity:inView3 ? 1 : 0,
                transition:{
                    delay:.5,
                    duration:.65
                }
            }}
            >
                <div
                className="flex-1
                rounded-md
                
                sm:mx-4
                md:mx-4
                lg:mx-0
                xl:mx-0"

                style={{
                    backgroundImage:'url(images/room-2.jpg)',
                    backgroundSize:'cover',
                    backgroundPosition:'center'
                }}
                />


                <div
                className="w-1/3 h-full bg-[#93A8AC]
                ml-4
                rounded-md
                
                sm:hidden
                md:hidden
                lg:block
                xl:block"
                />
            </motion.div>

            
            <motion.div ref={ref4} 
            className="w-full h-[40vh] my-8
            flex"

            initial={{opacity:0}}
            animate={{
                opacity:inView4 ? 1 : 0,
                transition:{
                    delay:.5,
                    duration:.65
                }
            }}
            >
                <div
                className="w-1/3 mr-4
                rounded-md bg-[#2A4849]
                
                sm:hidden
                md:hidden
                lg:block
                xl:block"

                />


                <div
                className="flex-1
                rounded-md
                
                sm:mx-4
                md:mx-4
                lg:mx-0
                xl:mx-0
                "

                style={{
                    backgroundImage:'url(images/room-3.jpg)',
                    backgroundSize:'cover',
                    backgroundPosition:'center'
                }}
                />
            </motion.div>


        </div>
    );
}
 
export default EventGallary;