import ReserveButton from "../reservations/reserve-button";




const BlerbTwo = () => {
    return (
        <div className="my-20 mx-auto py-10
        flex flex-col justify-center rounded-xl
        relative left-0 bg-secondary
        font-primary
        
        w-[85%]

        sm:h-[90vh]
        md:h-[90vh]
        lg:h-[70vh]
        xl:h-[70vh]

        sm:px-6
        md:px-6
        lg:px-10
        xl:px-24
        "
        >

            <div className="text-royal 
            font-bold my-6
            
            sm:text-2xl
            md:text-2xl
            lg:text-3xl
            xl:text-3xl

            font-display"
            >
                An innovative indian tasting menu experience
            </div>

            <div className="font-bold
            my-2

            sm:text-sm
            md:text-sm
            lg:text-base
            xl:text-base
            "
            >
                Experience Chicago's Best-Kept Culinary Secret – Available in Veg and Non Veg options
                <br/>
                An 8 course Innovative Indian Tasting Menu $115 
                <br/>
                6 Course menu available for $85
            </div>

            <div className="font-light my-2
            
            sm:text-sm
            md:text-sm
            lg:text-base
            xl:text-base
            "
            >
                Our tasting menu, aptly named ROOP, which means beauty, truly embodies the word. Michelin-Star Executive Chef Mike Cornelissen from the Netherlands combines innovative cooking techniques with the rich, authentic flavors of Indian cuisine. Inspired by an in-depth exploration of Indian culture, this menu promises an unparalleled gastronomic experience.
                <br/>
                <br/>
                Whether it's a romantic night out, a celebration, or simply an evening of indulgence, our tasting menu is the perfect way to savor Indian cuisine in an intimate, welcoming setting.
                <br/>
                <br/>
                Optional Wine Pairing and Cocktail Pairing available
            </div>

            <div className="mt-auto"
            >
                <ReserveButton 
                _type="tasting-menu-booking"
                />
            </div>

        </div>
        );
}
 
export default BlerbTwo;