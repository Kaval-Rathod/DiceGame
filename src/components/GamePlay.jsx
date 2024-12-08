import React, { useState } from 'react';
import './GamePlay.css';
import TotleScore from './TotleScore.jsx';
import NumberSelector from './NumberSelector.jsx';
import RollDice from './RollDice.jsx';

function GamePlay({ logout }) {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState('');
  const [res, setRes] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Generate random number between min and max
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError('Please select a number');
      return;
    } else {
      setError('');
    }

    const randomNumber = generateRandomNumber(1, 6); // Generate a number between 1 and 6
    setCurrentDice(randomNumber); // Update state with the random number

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(null);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <main>
      <div className="GamePlay">
        <TotleScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <div className="other">
        <RollDice currentDice={currentDice} rollDice={rollDice} />
      </div>
      <div className="btns">
        <button className="btn" onClick={resetScore}>
          Reset Score
        </button>
        <button className="btn" onClick={() => setRes(!res)}>
          Show Rules
        </button>
        <button className="btn logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
      <div className={res ? 'rul' : 'non'}>
        <p className="rules">
          Select any number <br />
          Click on the dice image. <br />
          If the selected number matches the dice number, you earn the dice's value as points.
          <br />
          If your guess is wrong, 2 points will be deducted.
        </p>
      </div>
    </main>
  );
}

export default GamePlay;
