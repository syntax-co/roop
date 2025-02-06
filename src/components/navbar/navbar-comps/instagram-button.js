import { useRouter } from "next/router";
import { FaInstagram } from "react-icons/fa";


const InstagramButton = () => {
    const router = useRouter();
    
    return (
        <div className="mx-4"
        
        onClick={() => {
            router.push('https://www.instagram.com/roopchicago/')
        }}
        >
            <FaInstagram 
            size={40}
            color="white"
            />
        </div>
    );
}
 
export default InstagramButton;