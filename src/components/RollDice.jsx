import React, { useState } from 'react';
import './RollDice.css';
import img1 from '../assets/Dices/1.png';
import img2 from '../assets/Dices/2.png';
import img3 from '../assets/Dices/3.png';
import img4 from '../assets/Dices/4.png';
import img5 from '../assets/Dices/5.png';
import img6 from '../assets/Dices/6.png';

function RollDice({rollDice,currentDice,setCurrentDice}) {
    const arr2 = [img1, img2, img3, img4, img5, img6];

    return (
        <div className="ct">
            <div className="Dice" onClick={rollDice}>
                <img src={arr2[currentDice - 1]} alt={`Dice ${currentDice}`} />
            </div>
            <p>Click on the dice to roll!</p>
        </div>
    );
}

export default RollDice;
