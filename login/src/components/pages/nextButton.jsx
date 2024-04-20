import React from 'react';
import Move2 from "./CardHolder";

export default function nextButton({ setShowCardHolder , setShowNextButton }) {
  const handleButtonClick = () => {
    setShowCardHolder(true);
    setShowNextButton(false);
  };

  return (
    <div className="flex justify-center items-center">
      <button onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
        Login
      </button>
    </div>
  );
}
