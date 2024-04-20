'use client'
import React, { useState } from 'react';
import NextButton from './nextButton';
import CardHolder from './CardHolder';

export default function HolderButton() {
    const [showCardHolder, setShowCardHolder] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);
  
    const handleBackButtonClick = () => {
      setShowCardHolder(false);
      setShowNextButton(true);
    };
  
    return (
      <div>
        {showNextButton && <NextButton setShowCardHolder={setShowCardHolder} setShowNextButton={setShowNextButton} />}
        {showCardHolder && <CardHolder showCardHolder={showCardHolder} handleBackButtonClick={handleBackButtonClick} setShowNextButton={setShowNextButton} />}
      </div>
  );
}
