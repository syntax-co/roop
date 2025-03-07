import { motion } from "framer-motion";



const NavItem = ({label,onClick}) => {

    return(
        <motion.div className="h-fit text-xl text-secondary
        mx-4 px-3 cursor-pointer rounded-md
        hover:text-royal
        flex items-center
        font-primary"

        initial={{
            backgroundColor:'#e1e1e100'
        }}
        
        whileHover={{
            backgroundColor:'#E1E1E1ff',
            transition:{
                duration:0.5
            }
        }}

        onClick={onClick}
        >
            {
              label&&label.slice(0,1).toUpperCase() + label.slice(1)  
            }
        </motion.div>
    )
}




export default NavItem;