import React, { useState } from 'react'
import Dropdown from '../components/Dropdown'


function DropDownPage() {
    // const handleClick = () => {
    //     console.log('Clicked!');
    // }


    const [selection, setSelection] = useState(null);


    const handleSelect = (options) => {
        setSelection(options)

    }

    const options = [
        
           { label:'Red', value: 'red'},
           {label:'Green', value: 'green'},
           {label:'Blue', value:'blue'},

        
    ];

   
  return (
    <div className='flex'>
    <Dropdown options = {options} value = {selection} onChange = {handleSelect}/></div>
   
  )
}

export default DropDownPage