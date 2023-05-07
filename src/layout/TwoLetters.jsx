import React, { useState, useEffect } from 'react';
import { ProgressBar } from '../components/ProgressBar/ProgressBar';
import { Image } from '../components/Images/Images';

function TwoLetters() {
// смена цвета активной кнопки
  const [selectedButton, setSelectedButton] = useState("все буквы");

// основной массив букв (все буквы, которые отрображаются первыми при загрузке)
  const [isSonorSounds, selectIsSounds] = useState(false);
  const [arrConsonant, selectArrConsonant] = useState(["Б", "В", "Г", "Д", "Ж", "З", "К", "Л", "М", "Н", "П", "Р", "С", "Т", "Ф", "Х", "Ц", "Ч", "Ш", "Щ"]);
  const [consonant, selectConsonant] = useState('Л');
  const [arrVowel] = useState(["О",  "Е", "Ë", "Э","А", "Я", "У", "Ю", "И", "Ы", "Ь"])
  const [vowel, selectVowel] = useState('О');

// слоги-исключения
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

// показываем буквы
useEffect(() => {
  const prohibitedSyllables = ["ЧЯ", "цю", "ЩЯ", "ЧЮ", "ЩЮ", "ЦЯ", "ЖЫ", "ШЫ", "ЧЫ", "ШЯ"];
  if ((consonant.toString() + vowel.toString()).indexOf(prohibitedSyllables.join("|")) !== -1) {
    getRandomConsonant();
    getRandomVowel();
  }
}, [consonant, vowel])

// переворот карточки
const [isFlipped, setIsFlipped] = useState(false);
const handleFlip = () => {
  setIsFlipped(!isFlipped);
};

// счетчик баллов
const [count, setCount] = useState(0);
  
const Counter = () => {
if (count < 20) {
setCount(count + 1);
}
};
  
// уменьшение счетчика, если нет ответа (нажатия кнопки ЕЩЕ) 5 сек
useEffect(() => {
  if (count < 20) {
    const timeoutId = setTimeout(() => {
      setCount(count => Math.max(count - 1, 0));
    }, 5000);
  return () => clearTimeout(timeoutId);
  }
}, [count]);

// Обработчик кнопки ЕЩЕ (в т.ч. задержка 0.3 сек появления букв, чтобы они "крутились" вместе с карточкой)
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


/* функция добавления заголовка в зависимости от того, какая кнопка вида звуков выбрана - на данный момент не спользуется. При необходимости в разметку довавляется {title}}

const [title, setTitle] = useState("Все буквы");

  const handleButtonTitle = (newTitle) => {
    setTitle(newTitle);
  }
*/

// кнопки слева заменяют массив согласных в зависимости от вида звуков + при нажатии на кнопки вида звуков новые согласные обновляются на карточках вместе с поворотом карточки
const [description, setDescription] = useState("Б, В, Г, Д, Ж, З, К, Л, М, Н, П, Р, С, Т, Ф, Х, Ц, Ч, Ш, Щ")
  const handleButtonDescription = (newDescription) => {
    setDescription(newDescription);
  }
  
  /* массивы согласных */
    /* все буквы */
const handleArrConsonant5Click = () => {
  selectIsSounds(false);
  handleFlip();
    
  if (count < 20) {
    setTimeout(() => {
      selectArrConsonant(["Б", "В", "Г", "Д", "Ж", "З", "К", "Л", "М", "Н", "П", "Р", "С", "Т", "Ф", "Х", "Ц", "Ч", "Ш", "Щ"]);
      selectConsonant('Л');
      selectVowel('О');
      }, 300);
  }
};
  /* сонорные согласные */
const handleArrConsonant1Click = () => {
  selectIsSounds(false);
  handleFlip();
    
  if (count < 20) {
    setTimeout(() => {
      selectArrConsonant(["м", "н", "в", "л", "р"]);
      selectConsonant('М');
      selectVowel('Ы');
    }, 300);
  }
};
  /* шипящие согласные */
  const handleArrConsonant2Click = () => {
  selectIsSounds(false);
  handleFlip();
    
  if (count < 20) {
    setTimeout(() => {
      selectArrConsonant(["ш", "щ", "ж", "з"]);
      selectConsonant('Ш');
      selectVowel('А');
    }, 300);
  }
};
  /* свистящие согласные */
const handleArrConsonant3Click = () => {
  selectIsSounds(false);
  handleFlip();
    
  if (count < 20) {
    setTimeout(() => {
      selectArrConsonant(["с", "ш", "щ", "з"]);
      selectConsonant('С');
      selectVowel('И');
    }, 300);
  }
};
  /* шумные согласные */
const handleArrConsonant4Click = () => {
  selectIsSounds(false);
  handleFlip();
    
  if (count < 20) {
    setTimeout(() => {
      selectArrConsonant(["б", "г", "д", "ж", "з", "п", "к", "т"]);
      selectConsonant('П');
      selectVowel('О');
    }, 300);
  }
};


return (
<div className="container-fluid">
  <div className="row">
    <div className="col-12">
      <div className="wrapper">
    {/* через 20 нажатий показывается анимация-картинка выйнграша */}
  {count === 20 && 
    <Image />
  }
{/* кнопки смены видов звуков */}
      <div className="buttons_letters">
        <button  
          style={{ backgroundColor: selectedButton === "все буквы" ? "rgb(246,157,67)": null }} 
          onClick={() => {
            setSelectedButton("все буквы"); 
            //handleButtonTitle("все буквы"); 
            handleButtonDescription("Б, В, Г, Д, Ж, З, К, Л, М, Н, П, Р, С, Т, Ф, Х, Ц, Ч, Ш, Щ"); 
            handleArrConsonant5Click(); 
          }}> 
            все буквы
        </button>

        <button  
          style={{ backgroundColor: selectedButton === "сонорные звуки" ? "rgb(246,157,67)": null }} 
          onClick={() => {
            setSelectedButton("сонорные звуки"); 
            //handleButtonTitle("сонорные звуки"); 
            handleButtonDescription("м, н, в, л, р"); 
            handleArrConsonant1Click(); 
            }}>
              сонорные звуки
          </button>

          <button  
          style={{ backgroundColor: selectedButton === "шипящие звуки" ? "rgb(246,157,67)": null }} 
          onClick={() => {
            setSelectedButton("шипящие звуки"); 
            //handleButtonTitle("шипящие звуки"); 
            handleButtonDescription("ш, щ, ж, з"); 
            handleArrConsonant2Click(); 
            }}>
              шипящие звуки
          </button>

          <button  
            style={{ backgroundColor: selectedButton === "свистящие звуки" ? "rgb(246,157,67)": null }} 
            onClick={() => {
              setSelectedButton("свистящие звуки"); 
              //handleButtonTitle("свистящие звуки"); 
              handleButtonDescription("с, ш, щ, з"); 
              handleArrConsonant3Click(); }}>
                свистящие звуки
          </button>

          <button  
          style={{ backgroundColor: selectedButton === "шумные звуки" ? "rgb(246,157,67)": null }} 
          onClick={() => {
            setSelectedButton("шумные звуки"); 
            //handleButtonTitle("шумные звуки"); 
            handleButtonDescription("б, г, д, ж, з, п, к, т"); 
            handleArrConsonant4Click(); 
            }}>
              шумные звуки
          </button>
      </div>
{/* карточки с буквами */}
        <div className="random_letters">
{/* описание - какие звуки сейчас изучаем */}
            <div className="description_sounds">
              Автоматизируем согласные:&nbsp;<br></br>
                <span>{description}</span>
            </div>
{/* прогресс бар со счетчиком */}
            <div className="progress_counter">
              <div className="counter_flex">
                  <ProgressBar percentage={count * 5} />
                  <div className="count">{count}</div>
              </div>
            </div>
{/* карточки слогов */}
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
{/* основная кнопка ЕЩЕ */}
            <button className='btn' 
            onClick={click}>
              Еще
            </button>
        </div>
      </div>
    </div>
  </div>
</div>
);
}

export { TwoLetters };

