import { motion } from "framer-motion";



const RequestSent = () => {
    return (
        <motion.div className="flex-1 ml-4
        rounded-md bg-[#0c356b7a]
        flex flex-col items-center justify-center
        font-primary text-white"

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >

            <div className="text-3xl my-4"
            >
                Thank you for your request!
            </div>

            <div>
                You will be notified if the request is accepted
            </div>


        </motion.div>
    );
}
 
export default RequestSent;