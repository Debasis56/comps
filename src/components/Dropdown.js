import React, { useEffect, useRef, useState } from 'react'
import { GoChevronDown} from 'react-icons/go';
import Panel from './Panel';

function Dropdown({options, value, onChange}) {
    const [open, setOpen] = useState(false);
    const divEl = useRef();




    useEffect(()=>{
      const handler = (event) => {
        console.log(divEl.current);
        if(!divEl.current)
        {
          return;
        }
        if(!divEl.current.contains(event.target))
        {
          setOpen(false);

        }
      };
      document.addEventListener('click', handler, true)

      return () => {
        document.removeEventListener('click', handler);
      }

    }, [])

    const handleOptionClick = (option) =>{
        setOpen(false);
        onChange(option);

    }

   

    const handleClick = () =>{
        setOpen((currentOpen)=>!currentOpen);
    }

    // let content = 'Select ....';
    // if(selection){
    //     content = selection.label;
    // }

    const renderedObjects = options.map((option) => {

        return (<div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={()=>handleOptionClick(option)} key = {option.value}>{option.label}</div>)

    })
  return (
    <div ref={divEl} className='w-48 relative'>
    <Panel className='flex justify-between items-center cursor-pointer' onClick={handleClick}>{value?.label || 'Select....'} 
    < GoChevronDown className = "text-lg"/></Panel>
    {open && <Panel className='absolute top-full'>{renderedObjects}</Panel>}
    </div>

  )
}

export default Dropdown