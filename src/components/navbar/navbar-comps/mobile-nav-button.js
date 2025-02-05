
import { TbMenuDeep } from "react-icons/tb";



const MobileNavButton = ({onClick}) => {


    return (
        <div
        className="
        
        sm:block
        md:block
        lg:hidden
        xl:hidden
        "
        
        onClick={onClick}
        >
            <TbMenuDeep 
            size={35}
            color="white"
            />
        </div>
    );
}
 
export default MobileNavButton;