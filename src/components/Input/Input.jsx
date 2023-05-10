import React,{useContext} from 'react'

import "./Input.css"

const Input = ({inputtype,placeholder,title,handleClick}) => {
  return (
    <div className='input'>
        <p>{title}</p>
        {inputtype === 'text' ? (
            <div className='input-box'>
                <input type='text' className='input-box-form' placeholder={placeholder} onChange={handleClick} />

            </div>
        ) : (
            <div></div>
        )}

    </div>
  )
}

export default Input