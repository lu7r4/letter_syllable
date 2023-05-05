import React, { useState, useEffect } from 'react';
import data from './data.json';
import { ProgressBar } from '../components/ProgressBar/ProgressBar';
import { Image } from '../components/Images/Images';

function RandomItem() {
  const [sword, setSword] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    const randomWordIndex = Math.floor(Math.random() * data.buttons[index].words.length);
    setSword(data.buttons[index].words[randomWordIndex]);
    setActiveButton(index);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const [count, setCount] = useState(0);
  
  const Counter = () => {
  if (count < 10) {
  setCount(count + 1);
  }
  };
  
  useEffect(() => {
  if (count < 10) {
  const timeoutId = setTimeout(() => {
  setCount(count => Math.max(count - 1, 0));
  }, 5000);
  return () => clearTimeout(timeoutId);
  }
  }, [count]);

  return (
<div>
{count === 10 && 
    <Image />
  }
  
    <div className="progress_counter">
    <div className="counter_flex">
      <div className="counter_item">
        <ProgressBar percentage={count * 10} />
        <div className="count">{count}</div>
      </div>                      
    </div>
  </div>

    <div className='btn_flex'>
      {data.buttons.map((button, index) => (
        <button key={button.id} className={`btn_syllable ${activeButton === index ? 'active' : ''}`} onClick={()=> {Counter(); handleFlip(); handleButtonClick(index)}}>
          {button.label}
        </button>
      ))}

  

      {sword && (
        <div className="letters_words">
          <div className='consonant_l'>
            <div className={`card_l ${isFlipped ? "flipped" : ""}`}>
              <div className="front">
                <div className="letter_word">{sword.one}</div>
              </div>
              <div className="back">
                <div className="letter_word">{sword.one}</div>
              </div>
            </div>
          </div>
          <div className="plus">+</div>
          <div className='consonant_l'>
            <div className={`card_l ${isFlipped ? "flipped" : ""}`}>
              <div className="front">
                <div className="letter_word">{sword.two}</div>
              </div>
              <div className="back">
                <div className="letter_word">{sword.two}</div>
              </div>
            </div>
          </div>
        </div>
      )}

</div>

    </div>
  );
}

export {RandomItem};
