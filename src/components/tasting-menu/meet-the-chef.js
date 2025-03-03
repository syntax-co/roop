


const MeetTheChef = () => {
    return (
        <div className="w-full h-[60vh] my-20
        flex"
        >

            <div className="rounded-xl
            w-1/3 h-full
            "

            style={{
                background:'url(/images/chef.png)',
                backgroundPosition:'center',
                backgroundSize:'cover',
            }}
            >
                
            </div>


            <div className="flex-1 text-light
            px-16 flex flex-col justify-center
            font-primary"
            >

                <div className="text-3xl
                font-display my-4"
                >
                    Available Wednesday - Sunday
                </div>

                <div className="font-light
                my-4"
                >
                    Ready for a night of exceptional dining? 
                    <br />
                    Designed by Michelin-Star Chef Mike Cornelissen, this is an experience you won't want to miss—reserve your table now and prepare to be amazed.
                </div>

                <div className="h-16 " 
                />
            </div>


        </div>
    );
}
 
export default MeetTheChef;