import React, { useState } from "react";

function MyButton() {
    const [buttons, setButtons] = useState([
      { id: 1, label: 'сонорные ', active: false },
      { id: 2, label: 'шипящие звуки', active: false },
      { id: 3, label: 'свистящие звуки', active: false },
      { id: 4, label: 'шумные звуки', active: false },
      { id: 5, label: 'все буквы', active: false }
    ]);
  
    const handleButtonClick = (label) => {
      const updatedButtons = buttons.map(button =>
        button.label === label
          ? { ...button, active: true }
          : { ...button, active: false }
      );
      setButtons(updatedButtons);
  
      // Здесь вы можете вызвать вашу обработчик события onClick для выбранной кнопки.
    };
  
    return (
      <div className="myButtonGroup">
        {buttons.map(button => (
          <button
            key={button.id}
            onClick={() => handleButtonClick(button.label)}
            className={button.active ? 'active' : ''}
            disabled={button.active && buttons.filter(b => b.active).length > 1}
          >
            {button.label}
          </button>
        ))}
      </div>
    );
  }

export { MyButton };
