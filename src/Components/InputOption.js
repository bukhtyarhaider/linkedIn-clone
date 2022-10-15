import React from 'react';
import './InputOption.css';

function InputOption({onClick , Icon ,title , color}) {
    return (
        <div className='inputOption' onClick = {onClick}>
            {Icon && <Icon  style ={{color:color}}  />} 
            <h4>{title}</h4>
        </div>
    )
}

export default InputOption
