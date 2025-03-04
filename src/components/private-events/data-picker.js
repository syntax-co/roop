

import React, { useState, useRef } from "react";

const EventDatePicker = () => {
  const [date, setDate] = useState(Array(8).fill("")); // Format: MMDDYYYY
  const inputsRef = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newDate = [...date];
    newDate[index] = value;
    setDate(newDate);

    if (value && index < 7) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !date[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <p className="text-lg font-semibold">Enter Event Date (MM/DD/YYYY)</p>
      <div className="flex space-x-2">
        {date.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-10 h-12 text-center text-xl border border-gray-400 rounded-md focus:ring focus:ring-blue-300"
          />
        ))}
      </div>
      <p className="mt-2 text-gray-600">
        Formatted Date: {date.slice(0, 2).join("")}/{date.slice(2, 4).join("")}/{date.slice(4, 8).join("")}
      </p>
    </div>
  );
};

export default EventDatePicker;
