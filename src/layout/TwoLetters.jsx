import React, { useState, useEffect } from 'react';
import { ProgressBar } from '../components/ProgressBar/ProgressBar';
import { Image } from '../components/Images/Images';

function TwoLetters() {

/* смена цвета активной кнопки*/
const [selectedButton, setSelectedButton] = useState("все буквы");

  const [isSonorSounds, selectIsSounds] = useState(false);
  const [arrConsonant, selectArrConsonant] = useState(["Б", "В", "Г", "Д", "Ж", "З", "К", "Л", "М", "Н", "П", "Р", "С", "Т", "Ф", "Х", "Ц", "Ч", "Ш", "Щ"]);
  const [consonant, selectConsonant] = useState('Л');
  const [arrVowel] = useState(["О",  "Е", "Ë", "Э","А", "Я", "У", "Ю", "И", "Ы", "Ь"])
  const [vowel, selectVowel] = useState('О');

  function getRandomConsonant() {
    const prohibitedSyllables = ["чя", "щя", "цю", "чю", "щю", "ця", "жы", "шы", "чы", "шя"];
    let randomC = Math.floor(Math.random() * arrConsonant.length);
    let newConsonant = arrConsonant[randomC];

    while (prohibitedSyllables.some(syllable => (newConsonant.toLowerCase() + vowel.toLowerCase()).includes(syllable))) {
      randomC = Math.floor(Math.random() * arrConsonant.length);
        newConsonant = arrConsonant[randomC];
    }

    selectConsonant(newConsonant);
  }

  function getRandomVowel() {
    const prohibitedSyllables = ["чя","цю", "щя", "чю", "щю", "ця", "жы", "шы", "чы", "шя"];
    let randomV = Math.floor(Math.random() * arrVowel.length);
    let newVowel = arrVowel[randomV];

    while (prohibitedSyllables.some(syllable => (consonant.toLowerCase() + newVowel.toLowerCase()).includes(syllable))) {
      randomV = Math.floor(Math.random() * arrVowel.length);
      newVowel = arrVowel[randomV];
    }
    selectVowel(newVowel);
  }

  useEffect(() => {
    const prohibitedSyllables = ["ЧЯ", "цю", "ЩЯ", "ЧЮ", "ЩЮ", "ЦЯ", "ЖЫ", "ШЫ", "ЧЫ", "ШЯ"];
    if ((consonant.toString() + vowel.toString()).indexOf(prohibitedSyllables.join("|")) !== -1) {
      getRandomConsonant();
      getRandomVowel();
    }
  }, [consonant, vowel])

  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
  setIsFlipped(!isFlipped);
  };
  
  const [count, setCount] = useState(0);
  
  const Counter = () => {
  if (count < 20) {
  setCount(count + 1);
  }
  };
  
  useEffect(() => {
  if (count < 20) {
  const timeoutId = setTimeout(() => {
  setCount(count => Math.max(count - 1, 0));
  }, 5000);
  return () => clearTimeout(timeoutId);
  }
  }, [count]);



  const click = () => {
  handleFlip();
  Counter();
  if (count < 20) {
    setTimeout(() => {
      getRandomConsonant();
      getRandomVowel();
      }, 300);
  }
  };

  

  const [title, setTitle] = useState("Все буквы");

  const handleButtonTitle = (newTitle) => {
    setTitle(newTitle);
  }

  const [description, setDescription] = useState("Б, В, Г, Д, Ж, З, К, Л, М, Н, П, Р, С, Т, Ф, Х, Ц, Ч, Ш, Щ")
  const handleButtonDescription = (newDescription) => {
    setDescription(newDescription);
  }
  /* массивы согласных */
    /* все буквы */
  const handleArrConsonant5Click = () => {
    selectIsSounds(false);
    selectArrConsonant(["Б", "В", "Г", "Д", "Ж", "З", "К", "Л", "М", "Н", "П", "Р", "С", "Т", "Ф", "Х", "Ц", "Ч", "Ш", "Щ"]);
    setTimeout(() => {
      getRandomConsonant();
      getRandomVowel();
      }, 300);
    handleFlip();
  };
  /* сонорные согласные */

  const handleArrConsonant1Click = () => {
  selectIsSounds(false);
  selectArrConsonant(["м", "н", "в", "л", "р"]);
  handleFlip();
  setTimeout(() => {
    getRandomConsonant();
    getRandomVowel();
    }, 300);


  };
  /* шипящие согласные */
  const handleArrConsonant2Click = () => {
  selectIsSounds(false);
  selectArrConsonant(["ш", "щ", "ж", "з"]);
  getRandomConsonant();
  setTimeout(() => {
    getRandomConsonant();
    getRandomVowel();
    }, 300);

  };
  /* свистящие согласные */
  const handleArrConsonant3Click = () => {
  selectIsSounds(false);
  selectArrConsonant(["с", "ш", "щ", "з"]);
  setTimeout(() => {
    getRandomConsonant();
    getRandomVowel();
    }, 300);
  handleFlip();

  };
  /* шумные согласные */
  const handleArrConsonant4Click = () => {
  selectIsSounds(false);
  selectArrConsonant(["б", "г", "д", "ж", "з", "п", "к", "т"]);
  setTimeout(() => {
    getRandomConsonant();
    getRandomVowel();
    }, 300);
  handleFlip();
  };

    

return (
  <div className="wrapper">
  {count === 20 && 
    <Image />
  }

  <div className="buttons">
  

  <div >

    <div className="randomLetters_item">

      <div className="myButtonGroup">
        <button  
          style={{ backgroundColor: selectedButton === "все буквы" ? "#6bccf9": null }} 
          onClick={() => {
            setSelectedButton("все буквы"); 
            handleButtonTitle("все буквы"); 
            handleButtonDescription("Б, В, Г, Д, Ж, З, К, Л, М, Н, П, Р, С, Т, Ф, Х, Ц, Ч, Ш, Щ"); 
            handleArrConsonant5Click(); 
          }}> 
            все буквы
        </button>

        <button  
          style={{ backgroundColor: selectedButton === "сонорные звуки" ? "#6bccf9": null }} 
          onClick={() => {
            setSelectedButton("сонорные звуки"); 
            handleButtonTitle("сонорные звуки"); 
            handleButtonDescription("м, н, в, л, р"); 
            handleArrConsonant1Click(); 
            }}>
              сонорные звуки
          </button>

          <button  
          style={{ backgroundColor: selectedButton === "шипящие звуки" ? "#6bccf9": null }} 
          onClick={() => {
            setSelectedButton("шипящие звуки"); 
            handleButtonTitle("шипящие звуки"); 
            handleButtonDescription("ш, щ, ж, з"); 
            handleArrConsonant2Click(); 
            }}>
              шипящие звуки
          </button>

          <button  
            style={{ backgroundColor: selectedButton === "свистящие звуки" ? "#6bccf9": null }} 
            onClick={() => {
              setSelectedButton("свистящие звуки"); 
              handleButtonTitle("свистящие звуки"); 
              handleButtonDescription("с, ш, щ, з"); 
              handleArrConsonant3Click(); }}>
                свистящие звуки
          </button>

          <button  
          style={{ backgroundColor: selectedButton === "шумные звуки" ? "#6bccf9": null }} 
          onClick={() => {
            setSelectedButton("шумные звуки"); 
            handleButtonTitle("шумные звуки"); 
            handleButtonDescription("б, г, д, ж, з, п, к, т"); 
            handleArrConsonant4Click(); 
            }}>
              шумные звуки
          </button>
      </div>

    </div>

  </div>


  </div>


    <div className="cards">
      <div>

        <div className="randomLetters">
          <div className="randomLetters_item">
            <div className="description_sounds">
              Автоматизируем согласные:&nbsp;<br></br>
              <span>
              {description}

                </span>
            </div>
          </div>

          <div className="randomLetters_item">
            <div className="progress_counter">
              <div className="counter_flex">
                <div className="counter_item">
                  <ProgressBar percentage={count * 5} />
                  <div className="count">{count}</div>
                </div>                      
              </div>
            </div>
          </div>

          <div className="randomLetters_item">
            <div className="title_sounds">
              {title}
            </div>
          </div>
    
          <div className="randomLetters_item">
            <div className="letters">
              <div className="consonant">
                <div className={`card ${isFlipped ? "flipped" : ""}`}>
                    <div className="front">
                        <div className="letter">{consonant}</div>
                    </div>
                    <div className="back">
                        <div className="letter">{consonant}</div>
                    </div>
                </div>
              </div>
              <div className="plus">+</div>
                <div className="vowels">
                  <div className={`card ${isFlipped ? "flipped" : ""}`}>
                      <div className="front">
                          <div className="letter">{vowel}</div>
                      </div>
                      <div className="back">
                          <div className="letter">{vowel}</div>
                      </div>
                  </div>
                </div>
              </div>
            </div>    
            
            <button className='btn' onClick={click}>Еще</button>

    
        </div>
 
    </div>
  </div>
</div>
);
}
  

  export { TwoLetters };

