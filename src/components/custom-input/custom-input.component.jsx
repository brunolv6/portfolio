import React from 'react';

import './custom-input.style.scss';

export const CustomInput = ({ handleChange, value, name, type }) => (
    <div className='custom-input'>
        <input className='input-item' 
            onChange={handleChange}
            value={value}
            name={name} 
            type={type} 
        />
        <label className={`{
            ${value? 'preenchido': null} 
            label-item
        }`}>{name}</label>
    </div>
)