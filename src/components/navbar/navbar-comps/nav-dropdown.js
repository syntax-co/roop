import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"
import { useState } from "react"
import { MdOutlineArrowDropUp } from "react-icons/md"



const NavDropdown = ({items}) => {
    const router = useRouter()
    const [open,setOpen] = useState(false)

    return(
        <div className=" h-fit
        text-xl text-light mx-4 
        flex items-center 
        relative z-10
        cursor-pointer
        font-primary"

        onClick={() => setOpen(!open)}
        >

            More
            <motion.div className="w-fit h-fit"

            initial={{rotateX:180}}
            animate={{
                rotateX:open?0:180,
                transition:{
                    duration:0.5
                }
            }}
            >
                <MdOutlineArrowDropUp 
                // className="text-light"
                size={30}
                />
            </motion.div>

            <AnimatePresence mode="wait">
            {
                open&&
                <div className="w-full h-full
                absolute top-[100%] 
                "
                >
                        {
                            Object.keys(items).map((key,index) => {
                                return(
                                    <motion.div className="w-full h-fit my-3
                                    flex justify-center items-center
                                    rounded-md 
                                    hover:text-royal
                                    "
                                    key={index}
                                    onClick={() => {
                                        router.push(items[key])
                                        setOpen(false)
                                    }}

                                    initial={{
                                        opacity:0,
                                        backgroundColor:'#e1e1e122'
                                    }}
                                    animate={{
                                        opacity:1,
                                        transition:{
                                            duration:0.5,
                                            delay:.1+(index*0.1)
                                        }
                                    }}
                                    exit={{
                                        opacity:0
                                    }}

                                    whileHover={{
                                        backgroundColor:'#E1E1E1ff',
                                        transition:{
                                            duration:0.5
                                        }
                                    }}


                                    >
                                        {
                                            key&&
                                            key.slice(0,1).toUpperCase() + key.slice(1)  
                                        }
                                    </motion.div>
                                )
                            })
                        }
                </div>
            }
            </AnimatePresence>


        </div>
    )
}


export default NavDropdown;