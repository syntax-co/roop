import { useEffect, useState } from "react";
import InputField from "./input-field";
import PhoneNumberInput from "./phone-input";
import TextArea from "./text-area";
import { animate, AnimatePresence, motion } from "framer-motion";
import MirageLoader from "../misc/mirage-loader";
import RequestSent from "./request-sent";




const EventForm = () => {


    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [headcount, setHeadcount] = useState(1);
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [natureOfEvent, setNatureOfEvent] = useState('');

    const [phoneError, setPhoneError] = useState('');
    const [loading,setLoading] = useState(false);
    const [resMade,setResMade] = useState(false);



    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }


    const handleHeadcountChange = (e) => {

        if (e.target.value>1) {
            setHeadcount(e.target.value);
        } else {
            setHeadcount(1);
        }


    }


    const handleEventNameChange = (e) => {
        setEventName(e.target.value);
    }

    const hanleEventDateChange = (e) => {
        setEventDate(e.target.value);
    }

    const handleNatureOfEventChange = (e) => {
        setNatureOfEvent(e.target.value);
    }


    const handleFormSubmit =async (e) => {
        
        if (phone.length>=10) {
            setPhoneError('')
            setLoading(true);

            // make sure to encrypt the data before sending it to the server
            const datapack = {
                firstName,
                lastName,
                phone,
                email,
                headcount,
                eventName,
                eventDate,
                natureOfEvent
            }
            
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datapack)
            }


           setTimeout(() => {
                setResMade(true);
                setLoading(false);
                setFirstName('')
                setLastName('')
                setPhone('')
                setEmail('')
                setHeadcount(1)
                setEventName('')
                setEventDate('')
                setNatureOfEvent('')
            }, 3000);

            
            // const result = await fetch('/api/private-events', options)
            // result = await result.json()
            // console.log(result)


        } else {
            setPhoneError('Please enter a valid phone number')
        }
        


    }


    useEffect(() => {
        
        if (resMade) {
            setTimeout(() => {
                setResMade(false);
            }, 3000);
        }

    }, [resMade]);
    


    return (
        <motion.div className="w-full h-[65vh] 
        mx-auto mb-8
        flex
        


        sm:flex-col
        md:flex-col
        lg:flex-row
        xl:flex-row
        
        sm:h-fit
        md:h-fit
        lg:h-[65vh]
        xl:h-[65vh]

        sm:w-screen
        md:w-[85%]
        lg:w-[85%]
        xl:w-[85%]
        "
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
            
            <div className="w-2/5 h-full
            px-6 py-10 flex flex-col 
            bg-dutch rounded-xl text-royal
                        
            
            sm:mx-auto
            md:mx-auto
            lg:mx-0
            xl:mx-0
            

            sm:h-[65vh]
            md:h-[65vh]
            lg:h-full
            xl:h-full


            sm:w-11/12
            md:w-5/6
            lg:w-2/5
            xl:w-2/50
            "
            >
                
                <div className="
                text-6xl my-10
                font-display"
                >
                    Thank 
                    <br />
                    You!
                </div>

                <div className="px-2 mt-5
                text-lg
                font-primary"
                >

                    Thank you for considering ROOP for your next gathering. 
                    <br />
                    <br />
                    It is our goal to provide you and your guests an excellent dining experience with lasting memories. We look forward to working with you to customize your event

                </div>


            </div>

            <AnimatePresence mode="wait">

                {
                    resMade?
                    <RequestSent key={'request-sent'} />:
                    loading?
                    <motion.div key={'loader'} 
                    className="flex-1"

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    >
                        <MirageLoader />
                    </motion.div>:

                    <motion.form key={'event-form'} 
                    className="flex-1 pl-6
                    flex flex-col

                    sm:mt-10
                    md:mt-10
                    lg:mt-0
                    xl:mt-0

                    sm:pl-0
                    md:pl-0
                    lg:pl-6
                    xl:pl-6
                    "
                    
                    action={handleFormSubmit}

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    >

                        <div className="flex
                        px-4
                        "
                        >
                            <InputField
                            label={'First Name'}
                            type={'text'}
                            bodyClass='mx-auto w-[48%]'
                            value={firstName}
                            onChange={handleFirstNameChange}

                            required
                            />

                            <InputField
                            label={'Last Name'}
                            type={'text'}
                            bodyClass='mx-auto w-[48%]'
                            value={lastName}
                            onChange={handleLastNameChange}

                            required
                            />
                        </div>

                        <div className="
                        w-full h-[1px] bg-lightfade my-4" 
                        />
                                
                            <PhoneNumberInput
                            setValue={setPhone}
                            error={phoneError}
                            />
                            
                        <div className="
                        w-full h-[1px] bg-lightfade my-4" 
                        />
                        


                        <div className="flex"
                        >
                            <InputField 
                            label={'Email'}
                            type={'email'}
                            bodyClass={'mx-auto w-3/6'}
                            value={email}
                            onChange={handleEmailChange}

                            required
                            />


                            <InputField 
                            label={'Headcount'}
                            type={'number'}
                            bodyClass={'mx-auto w-2/6'}
                            value={headcount}
                            onChange={handleHeadcountChange}

                            required
                            />

                        </div>

                        <div className="flex mt-5"
                        >

                            <InputField 
                            label={'Event Name'}
                            type={'text'}
                            bodyClass={'mx-auto w-3/6'}
                            value={eventName}
                            onChange={handleEventNameChange}

                            required
                            />

                            <InputField 
                            label={'Event Date'}
                            type={'date'}
                            bodyClass={'mx-auto w-2/6'}
                            value={eventDate}
                            onChange={hanleEventDateChange}

                            required
                            />



                        </div>


                        <TextArea 
                        label={'Nature of Event'}
                        bodyClass={'mt-5 mx-auto flex-1 w-11/12 '}
                        value={natureOfEvent}
                        onChange={handleNatureOfEventChange}
                        />


                        <div className="w-full h-24
                        flex items-center"
                        >
                            
                            <input className="px-3 py-2
                            ml-auto mr-12 cursor-pointer
                            border border-gold
                            rounded-md text-light"

                            type="submit"
                            />

                        </div>

                    </motion.form>
                }
            </AnimatePresence>



        </motion.div>
    );
}
 
export default EventForm;