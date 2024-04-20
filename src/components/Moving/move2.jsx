import React from 'react';

export default function Move2({ showCardHolder, handleBackButtonClick, setShowNextButton }) {
    return (
      <div>
        {showCardHolder && (
          <div className="flex justify-center items-center">
            <button onClick={handleBackButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
              Back
            </button>
          </div>
        )}
        {!showCardHolder && (
          <div className="flex justify-center items-center">
            <button onClick={() => setShowNextButton(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
              Login
            </button>
          </div>
        )}
      </div>
  );
}
