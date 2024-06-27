import React, { useState } from "react";

const TimeframeSelector = ({ onSelect }) => {
  const [activeButton, setActiveButton] = useState("daily");

  const handleButtonClick = (timeframe) => {
    setActiveButton(timeframe);
    onSelect(timeframe);
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="flex gap-4">
        <button
          onClick={() => handleButtonClick("daily")}
          className={`${
            activeButton === "daily"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } px-4 py-2 rounded-md`}
        >
          Daily
        </button>
        <button
          onClick={() => handleButtonClick("weekly")}
          className={`${
            activeButton === "weekly"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } px-4 py-2 rounded-md`}
        >
          Weekly
        </button>
        <button
          onClick={() => handleButtonClick("monthly")}
          className={`${
            activeButton === "monthly"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } px-4 py-2 rounded-md`}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default TimeframeSelector;
