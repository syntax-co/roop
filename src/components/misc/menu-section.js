import { useEffect } from "react";




const MenuSection = ({ title, items }) => {

   

    return(
        <div className="font-primary text-white
        px-3 mt-20">
            <h2 className="text-2xl my-4 px-2
            ">
                {title}
            </h2>


            <div 
            className='w-full h-[2px] bg-gold'
            />

            {
                items.map((item, index) => {

                    return (
                        <div key={index} className=" mt-12">
                            <h3 className="text-xl font-semibold px-3 mb-4
                            flex items-center">
                                
                                <div>
                                    {item.name} 
                                </div>
                                
                                <div className='flex-1 h-[1px] mx-3 bg-[#ffffff4b]
                                ' 
                                />
                                
                                {
                                    // Object.keys(item).length>0 &&
        
                                    typeof(item.price) !== 'object' ? 
                                    <p className="font-light">${item.price}</p>:
        
                                    typeof(item.price) === 'object' &&
                                    <div className="font-light
                                    relative "
                                    >
                                        
                                        {
                                            Object.keys(item.price).map((key,dex) => {

                                                return(
                                                    <div key={item.name+'_'+key} 
                                                    className="w-fit text-base "
                                                    >
                                                        {`${key} - ${item.price[key]}`}
                                                    </div>
                                                )
                                            })
                                        }
                                        
                                    </div>
                                    
                                }
                                
                            </h3>
                            
                            <p className='px-4 font-light'
                            >{item.description}</p>
                            
                            {item.dietary_info && item.dietary_info.length > 0 && (
                                <p className="text-sm text-gray-600 px-6 mt-3">Dietary Info: {item.dietary_info.join(', ')}</p>
                            )}
                            {
                                <div className='text-sm px-6 font-light text-greyish'
                                >
                                    {
                                        item.options && item.options.length > 0 && (item.options.join(','))
                                    }
                                </div>
                            }
                            {item.notes && item.notes.length > 0 && (
                                <p className="text-sm text-red-600
                                px-6">Notes: {item.notes.join(', ')}</p>
                            )}
                        </div>
                    )
                }
            )
            }
        </div>
    )
    
};




export default MenuSection;