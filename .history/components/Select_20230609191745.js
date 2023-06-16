import React from 'react'

export default function Select() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
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
        <option className="bg-black" value="option1">Option 1</option>
        <option className="bg-black" value="option2">Option 2</option>
        <option className="bg-black" value="option3">Option 3</option>
      </select> */}
    <div>
      <h2 className="text-xl font-bold mb-4">Select Bars Example</h2>
      <select
        className="border border-gray-300 px-4 py-2 rounded"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {info}
    </div>
 </div>
     );
}

