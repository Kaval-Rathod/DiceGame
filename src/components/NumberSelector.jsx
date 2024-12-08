import React, { useState } from 'react';
import './NumberSelector.css';

const NumberSelector = ({setError,error,selectedNumber, setSelectedNumber}) => {
    const arr = [1, 2, 3, 4, 5, 6];
    const numberSekectorHandler=(value)=>{
        setSelectedNumber(value);
        setError("")
    }
    return (
        <div>
            <p className='error' >{error}</p>
            <div className="hd">
                <h2>Select Number</h2>
            </div>
            <div className="numbers">
                {arr.map((value, i) => (
                    <h2
                        key={i}
                        className={value === selectedNumber ? 'selected' : ''}
                        onClick={()=>numberSekectorHandler(value)}
                    >
                        {value}
                    </h2>
                ))}
            </div>
        </div>
    );
};

export default NumberSelector;
