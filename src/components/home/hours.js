import { motion, useInView } from "framer-motion";
import { useRef } from "react";







const HoursTile = () => {
    const ref = useRef(null);
    const isInView = useInView(ref,{
        once: true,
        amount:.8
    });

    return (
        <div ref={ref} className="w-full h-[65vh] my-40 px-4
        flex flex-col px-auto
        text-secondary
        font-primary
        "
        >


            <div className="text-secondary
            text-4xl mb-16
            font-display "
            >
                Hours
            </div>

                
            <motion.div className=" h-20
            border border-light rounded-lg
            flex items-center justify-center
            

            sm:w-[85%]
            md:w-[85%]
            lg:w-[40%]
            xl:w-[40%]"

            initial={{opacity:0}}
            animate={{
                opacity: isInView ? 1 : 0,
                transition:{
                    delay:.2,
                }
            }}
            >

                <div className="ml-4 flex-1 flex items-center justify-center
                font-display text-2xl mx-auto 
                
                sm:text-lg
                md:text-xl
                lg:text-2xl
                xl:text-2xl
                "
                >
                    Monday - Thursday 
                </div>
                <div className="h-full w-[1px] bg-goldfade" 
                />
                <div
                className="mx-auto flex-1
                flex justify-center"
                >
                    12:00 pm - 
                    <br />
                    10:00 pm
                </div>

            </motion.div>

            <motion.div className="h-20 w-[40%] mx-auto my-8
            border border-light rounded-lg
            flex items-center justify-center
            
            

            sm:my-auto
            md:my-auto
            lg:my-8
            xl:my-8

            sm:mx-auto
            md:mx-auto
            lg:mx-none
            xl:mx-none

            

            sm:w-[85%]
            md:w-[85%]
            lg:w-[40%]
            xl:w-[40%]
            "

            initial={{opacity:0}}
            animate={{
                opacity: isInView ? 1 : 0,
                transition:{
                    delay:.4,
                }
            }}
            >

                <div className="ml-4 flex-1 flex items-center justify-center
                font-display text-2xl mx-auto 
                
                sm:text-lg
                md:text-xl
                lg:text-2xl
                xl:text-2xl
                "
                >
                    Friday - Saturday
                </div>
                <div className="h-full w-[1px] bg-goldfade" 
                />
                <div
                className="mx-auto flex-1
                flex justify-center
                "
                >
                    12:00 pm - 
                    <br />
                    10:30 pm
                </div>

            </motion.div>

            <motion.div className="h-20 w-[40%] ml-auto
            border border-light rounded-lg
            flex items-center justify-center
            

            sm:w-[85%]
            md:w-[85%]
            lg:w-[40%]
            xl:w-[40%]"

            initial={{opacity:0}}
            animate={{
                opacity: isInView ? 1 : 0,
                transition:{
                    delay:.6,
                }
            }}
            >

                <div className="ml-4 flex-1 flex items-center justify-center
                font-display text-2xl mx-auto 
                
                sm:text-xl
                md:text-xl
                lg:text-2xl
                xl:text-2xl
                "
                >
                    Sunday 
                </div>
                <div className="h-full w-[1px] bg-goldfade" 
                />
                <div
                className="mx-auto flex-1
                flex justify-center"
                >
                    12:00 pm - 
                    <br />
                    10:00 pm
                </div>

            </motion.div>
            
            {/* <div>
                Monday - Thursday: 12:00 pm - 10:00 pm
                Friday - Saturday: 12:00 pm - 10:30 pm
                Sunday: 12:00 pm - 10:00 pm
            </div> */}

        </div>
    );
}
 
export default HoursTile;