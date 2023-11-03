import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import ik from './img/ik.png'

//функция для выбора и отображения варианта в кнопке на главной странице
function CustomDropdownButton({name}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <DropdownButton
        id="dropdown-basic-button"
        title={selectedOption || <><div className='button-text'><span>{name}</span><img className='ik' src={ik}/></div></>}
      >
        <Dropdown.Item onClick={() => handleOptionSelect('Вариант 1')}>Вариант 1</Dropdown.Item>
        <Dropdown.Item onClick={() => handleOptionSelect('Вариант 2')}>Вариант 2</Dropdown.Item>
        <Dropdown.Item onClick={() => handleOptionSelect('Вариант 3')}>Вариант 3</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default CustomDropdownButton;