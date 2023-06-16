import React, { useState } from 'react';


export default function Select() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };
  
    let info = null;
    if (selectedOption === 'option1') {
      info = <p>Info for Option 1</p>;
    } else if (selectedOption === 'option2') {
      info = <p>Info for Option 2</p>;
    } else if (selectedOption === 'option3') {
      info = <p>Info for Option 3</p>;
    }

    return ( 
 <div  className='flex flex-col relative h-screen 
 text-center md:text-left md:flex-row xl:flex-row
 max-w-[2000px] xl:px-10 min-h-screen justify-center
 xl:space-y-0 mx-auto items-center'>
          {/* <h2 className="text-xl font-bold mb-4">Select Bars Example</h2>
      <select className="border bg-black px-4 py-2 rounded">
        <option className="bg-black" value="option1">web develop</option>
        <option className="bg-black" value="option2">RPA </option>
        <option className="bg-black" value="option3">Game develop</option>
      </select> */}
    <div>
      <h2 className="text-xl font-bold mb-4">Select Bars Example</h2>
      <div>
        <button
          className={`option-btn ${selectedOption === 'option1' ? 'active' : ''}`}
          onClick={() => handleOptionClick('option1')}
        >
          web develop
        </button>
        <button
          className={`option-btn ${selectedOption === 'option2' ? 'active' : ''}`}
          onClick={() => handleOptionClick('option2')}
        >
          Option 2
        </button>
        <button
          className={`option-btn ${selectedOption === 'option3' ? 'active' : ''}`}
          onClick={() => handleOptionClick('option3')}
        >
          Option 3
        </button>
      </div>
      {info}
    </div>



 </div>
     );
}

