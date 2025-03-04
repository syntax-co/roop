


const MeetTheChef = () => {
    return (
        <div className=" 
        my-20 mx-auto relative
        flex 
        
        sm:h-[70vh]
        md:h-[70vh]
        lg:h-[60vh]
        xl:h-[60vh]

        
        sm:w-screen
        md:w-[85%]
        lg:w-[85%]
        xl:w-[85%]
        "
        >

            <div className="rounded-xl
            h-full
            flex items-center
            mx-auto
            
            sm:w-[85%]
            md:w-[85%]
            lg:w-1/3
            xl:w-1/3

            "

            style={{
                background:'url(images/chef.jpg)',
                backgroundPosition:'center',
                backgroundSize:'cover',
            }}
            >

                <div className="text-white relative
                flex-col justify-center
                font-primary rounded-md
                
                h-5/6 w-11/12
                mx-auto

                sm:px-6
                md:px-6
                lg:10
                xl:16

                sm:flex
                md:flex
                lg:hidden
                xl:hidden

                sm:bg-royalfade
                md:bg-royalfade
                lg:bg-transparent
                xl:bg-transparent            
                "
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

                

                


            <div className="flex-1 text-light relative
            px-16 flex-col justify-center
            font-primary
            
            sm:hidden
            md:hidden
            lg:flex
            xl:flex

            sm:bg-royalfade
            md:bg-royalfade
            lg:bg-transparent
            xl:bg-transparent            
            "
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