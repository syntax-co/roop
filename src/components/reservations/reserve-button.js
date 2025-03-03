import { useRouter } from "next/router";


const ReserveButton = ({label='Reserve',_type='ala-carte',onClick,bgColor='#3b3b3b',className}) => {
    const router = useRouter()

    const res_redirect = {
        'ala-carte':'https://www.opentable.com/restref/client/?restref=1051237&lang=en-US&ot_source=Restaurant%20website&corrid=94847de0-5467-4396-beaf-9661335bf13b',
        'tasting-menu':'/tasting-menu',
        'private-events':'/private-events'
    }

    return (
        <div 
        className={
            "flex-1 h-fit mt-auto py-1 "+
            "bg-[#3b3b3b rounded-md cursor-pointer "+
            className
        }

        style={{
            backgroundColor:bgColor
        }}

        onClick={() => {
            router.push(res_redirect[_type])
            // console.log(_type)
        }}
        >
            <div className="text-light text-center
            text-lg h-fit
            font-display"
            >
                {label}
            </div>
        </div>
    );
}
 
export default ReserveButton;