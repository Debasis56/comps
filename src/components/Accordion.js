import React, { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
function Accordion({items}) {

   
    const [expanded, setExpanded] = useState(-1);


    const handleClick = (nextindex)=>{
      setExpanded(currentexpanded => {
        if (currentexpanded===nextindex)
            return -1;
            else
            return nextindex 
      })}
      
    
     
    const renderedItmes = items.map((item, index) => {
        const isexpanded = index === expanded
        const icon = <span className='text-xl'>{isexpanded? <GoChevronLeft/> : <GoChevronDown/>}</span>
        // if(index === expanded){
        //     console.log('expanded');
        // }
        return (
            <div key={item.id}>
            <div className='flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between' onClick={() => {handleClick(index)}}> {item.label}{icon}</div>
            {isexpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        );
    });
  return (
    <div className='border-x border-t rounded'>{renderedItmes}</div>
  )
}

export default Accordion;