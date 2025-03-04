import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CatPicker from "../misc/cat-picker";
import MenuSection from "../misc/menu-section";





const DrinkMenu = ({ drinkmenu }) => {

    const [section, setSection] = useState('Coctails');
    const [showMenu, setShowMenu] = useState(true);
    
    const changeSection = (newSection) => {
        setShowMenu(false);
        
        setTimeout(() => {
            setSection(newSection);
        }, 1000);
    };

    useEffect(() => {
        if (!showMenu) {
            setShowMenu(true);
        }
    }, [section]);

    return (
        <div className="content-padding">
            
            <CatPicker 
            menu={drinkmenu} 
            section={section}
            setSection={changeSection} 
            />


            
                <motion.div key={'menu-display'} 
                className="px-12"
                
                initial={{opacity:0}}
                animate={{opacity:showMenu?1:0}}
                >
                        <div 
                        className="text-3xl font-bold mt-24 mb-16
                        text-white
                        font-display"
                        
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        >
                            {section} 
                            {
                                (section ==='Restaurant Week Lunch' || section === 'Restaurant Week Dinner') && 
                                <div className="text-xl font-light my-8 mx-3"
                                >
                                    {drinkmenu[section].price}

                                    <div className="font-primary font-light text-greyish text-sm"
                                    >
                                        {drinkmenu[section].availability}
                                    </div>
                                </div>
                            }
                        </div>
                    

                    {
                        Array.isArray(drinkmenu[section]) ? (
                            <MenuSection title={section} items={drinkmenu[section]} />
                        ) : (
                            <>
                                {
                                    Object.keys(drinkmenu).length>0&&   
                                    Object.keys(drinkmenu[section]).map((subSection, idx) => (
                                        <div key={idx} className="">
                                            {
                                                Array.isArray(drinkmenu[section][subSection]) ? (
                                                    <MenuSection title={subSection} items={drinkmenu[section][subSection]} />
                                                ) : (
                                                    <div className="menu-item my-2">
                                                        <h3 className="text-xl font-semibold">{drinkmenu[section][subSection].name}</h3>
                                                        <p>{drinkmenu[section][subSection].description}</p>
                                                        {drinkmenu[section][subSection].price && (
                                                            <p className="font-bold">${drinkmenu[section][subSection].price}</p>
                                                        )}
                                                        {drinkmenu[section][subSection].dietary_info && drinkmenu[section][subSection].dietary_info.length > 0 && (
                                                            <p className="text-sm text-gray-600">Dietary Info: {drinkmenu[section][subSection].dietary_info.join(', ')}</p>
                                                        )}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))
                                }
                            </>
                        )
                    }
                </motion.div>
                
                
            
        </div>
    );
};




export default DrinkMenu
;