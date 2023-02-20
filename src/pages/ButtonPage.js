import React from 'react'
import Button from '../components/Button'
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

function ButtonPage() {
    const handleClick = () => {
        // console.log('Clicked!');
    }
  return (
    <div><div>
    <Button className = 'mb-10' primary rounded onClick = {handleClick}>
        <GoDatabase />
        
        Hi There!
    </Button>
    </div>
    <div>
    <Button danger outline>
        <GoCloudDownload/>
        Buy Now
    </Button>
    </div>
    <div>
    <Button success>
        See Deal
    </Button>
    </div>
    <div>
    <Button rounded secondary>
    <GoBell/>
        Hide Ads
    </Button>
    </div></div>
  )
}

export default ButtonPage;