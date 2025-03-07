import { motion } from "framer-motion";
import React, { useState, useRef } from "react";



const countryCodes = [
  { code: "+1", label: "🇺🇸 US" },
  { code: "+44", label: "🇬🇧 UK" },
  { code: "+91", label: "🇮🇳 India" },
  { code: "+49", label: "🇩🇪 Germany" },
  { code: "+81", label: "🇯🇵 Japan" },
];



const PhoneNumberInput = ({ length = 10,setValue,error}) => {
  const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);
  const [digits, setDigits] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);
    setValue(selectedCode + newDigits.join(''))

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className=" w-full
    flex flex-col 
    items-center space-y-3
    ">
      {/* Country Code Selector */}
      <select
        value={selectedCode}
        onChange={(e) => setSelectedCode(e.target.value)}
        className="px-3 py-1 bg-lightfade appearance-none rounded-lg text-lg
        text-white
        "
      >
        {countryCodes.map(({ code, label }) => (
          <option key={code} value={code}
          className=" text-black "
          >
            {label} {code}
          </option>
        ))}
      </select>

      {/* Phone Number Input Boxes */}
      <motion.div className="flex p-2 border rounded-md
      w-fit ml-4
      sm:space-x-1.5
      md:space-x-1.5
      lg:space-x-2
      xl:space-x-2
      

      "
      
      initial={{ borderColor: "#f9f9f9a1" }}
      animate={{ borderColor: error ? "#ff3d3da1" : "#f9f9f9a1" }}
      >
        {digits.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="
            w-8 h-10 text-center
            rounded-md bg-dutch text-royal
            focus:outline-none
            focus:bg-secondary 

            font-primary

            sm:text-base
            md:text-lg
            lg:text-xl
            xl:text-xl

            sm:h-9
            md:h-9
            lg:h-10
            xl:h-10

            sm:w-6
            md:w-6
            lg:w-6
            xl:w-8


            "
          />
        ))}
      </motion.div>

      {/* Hidden full number output */}
      <p className="mt-2 text-secondary">Full Number: {selectedCode} {digits.join("")}</p>
    </div>
  );
};

export default PhoneNumberInput;
