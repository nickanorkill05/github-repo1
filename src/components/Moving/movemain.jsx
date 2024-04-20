'use client'
import React, { useState } from 'react';
import Move1 from './move1';
import Move2 from './move2';

export default function useMoveMain() {
    const [showCardHolder, setShowCardHolder] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);
  
    const handleBackButtonClick = () => {
      setShowCardHolder(false);
      setShowNextButton(true);
    };
  
    return (
      <div>
        {showNextButton && <Move1 setShowCardHolder={setShowCardHolder} setShowNextButton={setShowNextButton} />}
        {showCardHolder && <Move2 showCardHolder={showCardHolder} handleBackButtonClick={handleBackButtonClick} setShowNextButton={setShowNextButton} />}
      </div>
  );
}
