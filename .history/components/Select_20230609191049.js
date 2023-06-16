import React from 'react'

export default function Select() {
    return ( 
 <div>
          <h2 className="text-xl font-bold mb-4">Select Bars Example</h2>
      <select className="border border-gray-300 px-4 py-2 rounded">
        <option className="bg-gray-100" value="option1">Option 1</option>
        <option className="bg-gray-100" value="option2">Option 2</option>
        <option className="bg-gray-100" value="option3">Option 3</option>
      </select>
 </div>
     );
}

