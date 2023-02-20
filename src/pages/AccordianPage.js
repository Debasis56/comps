import React from 'react'

import Accordion from '../components/Accordion'


function AccordionPage() {
    // const handleClick = () => {
    //     console.log('Clicked!');
    // }

    const items = [
        {
            id: 'dasdasd',
            label: 'Can, I use react on projects',
            content: 'You can use react in any project you like'
        },
        {
            id: 'dewfd',
            label: 'Can I use Javascript in my project',
            content: 'Yes u can do whatever u want'
        },
        {
            id: 'dsmnmn',
            label: 'Can I use CSS on project',
            content: 'dasjhdhasdladlasdlkjskjdjkasldnaskjdkjsadkjaskjld'
        }
    ]
  return (
    <Accordion items = {items}/>
   
  )
}

export default AccordionPage