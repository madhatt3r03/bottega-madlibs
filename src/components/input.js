import React from 'react';

const Input = ({title, state, name}, onChange, index) => {
    // add index as parameter
    return (
        <div key={index} className="input">
            <label className="input__number">{index + 1}</label>
            {/* give label a className for styles later */}
            <input name={name} value={state} onChange={onChange}/>
            <label className="input__title">{title}</label>
        </div>
    )
}


export default Input;