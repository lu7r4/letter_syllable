import React, { useState, useEffect } from 'react';
import data from './data.json';
import { ProgressBar } from '../components/ProgressBar/ProgressBar';
import { Image } from '../components/Images/Images';


function RandomItem() {
  // состояния при загрузке
  const [sword, setSword] = useState({ one: "СО", two: "Н"});
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeButton, setActiveButton] = useState(0);
  const [selectedLetter, setSelectedLetter] = useState(null); 
  const [selectedWords, setSelectedWords] = useState([]);
  
// переворот карточки
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

// выбор буквы по индексу из массива (в json-файле)
  const handleButtonClick = (index) => {
    const letter = data.buttons[index].id;
    setSelectedLetter(letter);
    
    // Проверяем, остались ли доступные слова для выбранной буквы
    const words = getWordsByLetter(letter);
    const availableWords = words.filter(word =>
      !selectedWords.some(selectedWord =>
        selectedWord.one === word.one && selectedWord.two === word.two
      )
    );
    
    if (availableWords.length > 0) {
      const randomWord = selectRandomWord(availableWords);
      setSword(randomWord);
      setActiveButton(index);
    } else {
      // Если не осталось доступных слов, сбрасываем состояния
      setSword(null);
      setActiveButton(null);
    }
  };

// счетчик баллов
  const [count, setCount] = useState(0);

  const Counter = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  
// уменьшение счетчика, если нет ответа (нажатия кнопки ЕЩЕ) 5 сек
  useEffect(() => {
    let timeoutId;
    if (count < 10) {
      timeoutId = setTimeout(() => {
        setCount(count => Math.max(count - 1, 0));
      }, 5000);
    }
    return () => clearTimeout(timeoutId);
  }, [count]);

  // функция для получения массива слов по выбранной букве
  const getWordsByLetter = (letter) => {
    const button = data.buttons.find((item) => item.id === letter);
    if (button) {
      const words = button.words;
      // перемешиваем массив слов случайным образом
      for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
      }
      return words;
    }
    return [];
  };

  const selectRandomWord = (words) => {
    // Извлекаем из массива только те слова, которые еще не были выбраны
    const availableWords = words.filter(word =>
      !selectedWords.some(selectedWord => 
        selectedWord.one === word.one && selectedWord.two === word.two
      )
    );
    if (availableWords.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableWords.length);
      const word = availableWords[randomIndex];
      setSelectedWords([...selectedWords, word]);
      return word;
    }
    return null;
  };

  /* обработчик нажатия на кнопку "Еще" */
  const handleMoreButtonClick = () => {
    handleFlip();
    setTimeout(() => {
      if (selectedLetter != null) {
        const words = getWordsByLetter(selectedLetter);
        const currentIndex = selectedWords.length;
        if (currentIndex < words.length) {
          const currentWord = words[currentIndex];
          setSword(currentWord);
        } else {
          // Если слова закончились, сбрасываем состояния
          setSword(null);
          setActiveButton(null);
        }
      }
      if (activeButton === 0) {
        handleButtonClick(0);
      }
    }, 300);
  };

  /* обработчик нажатия на кнопки букв */
  const handleLetterButtonClick = (letter) => {
    setSelectedLetter(letter);
    handleButtonClick(data.buttons.findIndex(button => button.id === letter));
  };

  return (

<div className="container-fluid">
  <div className="row">
    <div className="col-12">
    <div className="wrapper">
    {/* через 10 нажатий показывается анимация-картинка выйнграша */}
      {count === 10 && 
        <Image />
      }
{/* кнопки смены видов звуков - получаем из json-файла */}
      <div className='btn_syllable_flex'>
        {data.buttons.map((button, index) => (
          <button
            key={button.id}
            className={`btn_syllable ${activeButton === index ? 'active' : ''}`}
            onClick={() => {
              handleFlip(); 
              handleLetterButtonClick(button.id); 
            }}>
            {button.label}
          </button>
        ))}
      </div>
{/* карточки с буквами */}
      <div className="random_letters syl">
{/* прогресс бар со счетчиком */}
        <div className="progress_counter">
          <div className="counter_flex">
            <ProgressBar percentage={count * 10} />
            <div className="count">{count}</div>
          </div>
        </div>
{/* карточки слов */}        
        <div className='words'>
          <div>
            {sword && (
              <div className="syllables">
                <div className='syllable'>
                  <div className={`card_syllable ${isFlipped ? "flipped" : ""}`}>
                    <div className="front">
                      <div className="letter_word">{sword.one}</div>
                    </div>
                    <div className="back">
                      <div className="letter_word">{sword.one}</div>
                    </div>
                  </div>
                </div>
                <div className="plus">+</div>
                <div className='syllable'>
                  <div className={`card_syllable ${isFlipped ? "flipped" : ""}`}>
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
          <div>
            <button
              className="btn_syllable btn_els"
              onClick={() => {
                Counter(); 
                handleMoreButtonClick();
              }}
              disabled={selectedLetter === "null"}
            >
              Еще
            </button>
          </div>
        </div>        
      </div>
    </div>
    </div>
  </div>
</div>
  );
}

export {RandomItem};
