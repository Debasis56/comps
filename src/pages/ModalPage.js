import React, { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true)
    }
    const handleClose =() => {
        setShowModal(false);
    }


    const actionBar =<div> <Button primary onClick={handleClose}> I Accept </Button></div>;

    const modal = <Modal onClose={handleClose} actionBar = {actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>

  return (
    <div className='relative'>

<Button primary onClick = {handleClick}> Open Modal </Button>

{showModal && modal}

        
        
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices fermentum enim. Mauris consectetur ex id dui venenatis convallis. Pellentesque velit enim, tristique ut magna vitae, vehicula pretium enim. Nam sit amet enim in nisl luctus rhoncus sed vitae ligula. Ut non felis id arcu ultrices gravida. Nunc ac ante vel ex volutpat viverra. Sed odio nulla, fermentum et vulputate ac, tincidunt non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas cursus, velit et consequat cursus, eros ex vehicula sem, et tempus elit libero feugiat eros.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices fermentum enim. Mauris consectetur ex id dui venenatis convallis. Pellentesque velit enim, tristique ut magna vitae, vehicula pretium enim. Nam sit amet enim in nisl luctus rhoncus sed vitae ligula. Ut non felis id arcu ultrices gravida. Nunc ac ante vel ex volutpat viverra. Sed odio nulla, fermentum et vulputate ac, tincidunt non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas cursus, velit et consequat cursus, eros ex vehicula sem, et tempus elit libero feugiat eros.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices fermentum enim. Mauris consectetur ex id dui venenatis convallis. Pellentesque velit enim, tristique ut magna vitae, vehicula pretium enim. Nam sit amet enim in nisl luctus rhoncus sed vitae ligula. Ut non felis id arcu ultrices gravida. Nunc ac ante vel ex volutpat viverra. Sed odio nulla, fermentum et vulputate ac, tincidunt non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas cursus, velit et consequat cursus, eros ex vehicula sem, et tempus elit libero feugiat eros.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices fermentum enim. Mauris consectetur ex id dui venenatis convallis. Pellentesque velit enim, tristique ut magna vitae, vehicula pretium enim. Nam sit amet enim in nisl luctus rhoncus sed vitae ligula. Ut non felis id arcu ultrices gravida. Nunc ac ante vel ex volutpat viverra. Sed odio nulla, fermentum et vulputate ac, tincidunt non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas cursus, velit et consequat cursus, eros ex vehicula sem, et tempus elit libero feugiat eros.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices fermentum enim. Mauris consectetur ex id dui venenatis convallis. Pellentesque velit enim, tristique ut magna vitae, vehicula pretium enim. Nam sit amet enim in nisl luctus rhoncus sed vitae ligula. Ut non felis id arcu ultrices gravida. Nunc ac ante vel ex volutpat viverra. Sed odio nulla, fermentum et vulputate ac, tincidunt non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas cursus, velit et consequat cursus, eros ex vehicula sem, et tempus elit libero feugiat eros.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices fermentum enim. Mauris consectetur ex id dui venenatis convallis. Pellentesque velit enim, tristique ut magna vitae, vehicula pretium enim. Nam sit amet enim in nisl luctus rhoncus sed vitae ligula. Ut non felis id arcu ultrices gravida. Nunc ac ante vel ex volutpat viverra. Sed odio nulla, fermentum et vulputate ac, tincidunt non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas cursus, velit et consequat cursus, eros ex vehicula sem, et tempus elit libero feugiat eros.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices fermentum enim. Mauris consectetur ex id dui venenatis convallis. Pellentesque velit enim, tristique ut magna vitae, vehicula pretium enim. Nam sit amet enim in nisl luctus rhoncus sed vitae ligula. Ut non felis id arcu ultrices gravida. Nunc ac ante vel ex volutpat viverra. Sed odio nulla, fermentum et vulputate ac, tincidunt non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas cursus, velit et consequat cursus, eros ex vehicula sem, et tempus elit libero feugiat eros.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices fermentum enim. Mauris consectetur ex id dui venenatis convallis. Pellentesque velit enim, tristique ut magna vitae, vehicula pretium enim. Nam sit amet enim in nisl luctus rhoncus sed vitae ligula. Ut non felis id arcu ultrices gravida. Nunc ac ante vel ex volutpat viverra. Sed odio nulla, fermentum et vulputate ac, tincidunt non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas cursus, velit et consequat cursus, eros ex vehicula sem, et tempus elit libero feugiat eros.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices fermentum enim. Mauris consectetur ex id dui venenatis convallis. Pellentesque velit enim, tristique ut magna vitae, vehicula pretium enim. Nam sit amet enim in nisl luctus rhoncus sed vitae ligula. Ut non felis id arcu ultrices gravida. Nunc ac ante vel ex volutpat viverra. Sed odio nulla, fermentum et vulputate ac, tincidunt non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas cursus, velit et consequat cursus, eros ex vehicula sem, et tempus elit libero feugiat eros.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices fermentum enim. Mauris consectetur ex id dui venenatis convallis. Pellentesque velit enim, tristique ut magna vitae, vehicula pretium enim. Nam sit amet enim in nisl luctus rhoncus sed vitae ligula. Ut non felis id arcu ultrices gravida. Nunc ac ante vel ex volutpat viverra. Sed odio nulla, fermentum et vulputate ac, tincidunt non ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas cursus, velit et consequat cursus, eros ex vehicula sem, et tempus elit libero feugiat eros.
        </p>


        


    </div>
  )
}

export default ModalPage