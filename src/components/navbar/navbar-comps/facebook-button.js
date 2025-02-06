import { useRouter } from "next/router";
import { FaFacebookF } from "react-icons/fa";



const FacebookButton = () => {
    const router = useRouter();
    
    return (
        <div className="mx-4"
        
        onClick={() => {
            // router.push('')
        }}
        >
            <FaFacebookF
            size={35}
            color="white"
            />
        </div>
    );
}
 
export default FacebookButton;