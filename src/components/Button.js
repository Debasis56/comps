import React from 'react'
// import PropTypes from 'prop-types'; // ES6
import className from 'classnames';



function Button({children, primary, secondary, success, warning, danger, outline, rounded, ...rest}) {

    console.log(rest);
    const classes = className(rest.className, 'flex items-center px-1.5 py-1.5 border m-2',{
        'border-blue-600 bg-blue-400': primary,
        'border-yellow-600 bg-yellow-400': warning,
        'border-red-600 bg-red-400': danger,
        'border-green-600 bg-green-400': success,
        'border-gray-600 bg-gray-400': secondary,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-500': outline && secondary,
        'text-green-500': outline && success,
        'text-red-500': outline && danger,
        'text-yellow-500': outline && warning,


    });




  return (
    <div>
        <button {...rest} className={classes}>{children}</button>
    </div>
  )
}

// Button.propTypes = {
//     checkVariationValue: ({primary, secondary, warning, success, danger}) => {
//         const count = Number(!!primary)
//         +Number(!!secondary)
//         +Number(!!warning)
//         +Number(!!success)
//         +Number(!!danger)

//         if(count>1)
//         {
//             return new Error('Only one is primary, secondary, success, warning, danger can be true ')
//         }
        
//     },

// }

export default Button