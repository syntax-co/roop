import { useEffect, useState } from "react";
import CatPicker from "../misc/cat-picker";
import MenuSection from "../misc/menu-section";
import { AnimatePresence, motion } from "framer-motion";






const EatMenu = ({eatmenu}) => {

    const [section,setSection] = useState('Dinner')
    const [showMenu, setShowMenu] = useState(true)
    
    const changeSection = (newSection) => {
        setShowMenu(false)
        
        setTimeout(() => {
            setSection(newSection)
        }, 1000);
    }

    useEffect(() => {

        if (!showMenu) {
            setShowMenu(true)
        }
    }, [section]);

    return (
        <div className="content-padding">
            
            <CatPicker 
            menu={eatmenu} 
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
                                    {eatmenu[section].price}

                                    <div className="font-primary font-light text-greyish text-sm"
                                    >
                                        {eatmenu[section].availability}
                                    </div>
                                </div>
                            }
                        </div>
                    

                    {
                        Array.isArray(eatmenu[section]) ? (
                            <MenuSection title={section} items={eatmenu[section]} />
                        ) : (
                            <>
                                {
                                    Object.keys(eatmenu[section]).map((subSection, idx) => (
                                        <div key={idx} className="">
                                            {
                                                Array.isArray(eatmenu[section][subSection]) ? (
                                                    <MenuSection title={subSection} items={eatmenu[section][subSection]} />
                                                ) : (
                                                    <div className="menu-item my-2">
                                                        <h3 className="text-xl font-semibold">{eatmenu[section][subSection].name}</h3>
                                                        <p>{eatmenu[section][subSection].description}</p>
                                                        {eatmenu[section][subSection].price && (
                                                            <p className="font-bold">${eatmenu[section][subSection].price}</p>
                                                        )}
                                                        {eatmenu[section][subSection].dietary_info && eatmenu[section][subSection].dietary_info.length > 0 && (
                                                            <p className="text-sm text-gray-600">Dietary Info: {eatmenu[section][subSection].dietary_info.join(', ')}</p>
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




export default EatMenu;