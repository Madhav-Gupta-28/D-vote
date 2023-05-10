import React from 'react'

const Button = ({btnName,handleClick,classStyle}) =>(
    <div className='button'>

        <button type='button' onClick={handleClick} >
            {btnName}
        </button>

    </div>
) 

export default Button