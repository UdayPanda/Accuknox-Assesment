// NavButtons.js  
import React from 'react';  

function NavButtons({ setAddWidget }) { // Accept the prop  
  return (  
    <div className='flex gap-4 text-xs justify-end'>  
      <button onClick={() => setAddWidget(prev => !prev)} className='bg-white text-gray-600 px-2 py-1 rounded-md hover:bg-gray-100'>Add Widget </button>  
      
      <button onClick={() => window.location.reload()} className='bg-white text-gray-600 px-2 py-1 rounded-md hover:bg-gray-100'>Refresh</button>  
      
      <select className='bg-white text-gray-600 px-2 py-1 rounded-md hover:bg-gray-100'>  
        <option>Last 30 days</option>  
        <option>Last 7 days</option>  
        <option>Last 24 hours</option>  
      </select>  
    </div>  
  )  
}  

export default NavButtons;