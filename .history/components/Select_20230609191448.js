import React from 'react'

export default function Select() {
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
      <div className="flex">
        <select className="border border-gray-300 px-4 py-2 rounded">
          <option className="bg-gray-100" value="option1">Option 1</option>
          <option className="bg-gray-100" value="option2">Option 2</option>
          <option className="bg-gray-100" value="option3">Option 3</option>
        </select>
        <select className="border border-gray-300 px-4 py-2 rounded ml-4">
          <option className="bg-gray-100" value="option1">Option A</option>
          <option className="bg-gray-100" value="option2">Option B</option>
          <option className="bg-gray-100" value="option3">Option C</option>
        </select>
      </div>
    </div>
 </div>
     );
}

