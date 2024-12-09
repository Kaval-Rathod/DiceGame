import React, { useState, useEffect } from 'react';
import './GamePlay.css';
import TotleScore from './TotleScore.jsx';
import NumberSelector from './NumberSelector.jsx';
import RollDice from './RollDice.jsx';

function GamePlay({ logout }) {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState('');
  const [showRules, setShowRules] = useState(false);

  // Load game state from localStorage on mount
  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('gameState'));
    if (savedState) {
      setSelectedNumber(savedState.selectedNumber);
      setCurrentDice(savedState.currentDice);
      setScore(savedState.score);
    }
  }, []);

  // Save game state to localStorage whenever it changes
  useEffect(() => {
    const gameState = { selectedNumber, currentDice, score };
    localStorage.setItem('gameState', JSON.stringify(gameState));
  }, [selectedNumber, currentDice, score]);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError('Please select a number');
      return;
    } else {
      setError('');
    }

    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(null);
  };

  const resetScore = () => {
    setScore(0);
    setSelectedNumber(null);
    setCurrentDice(1);
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
        <button className="btn" onClick={() => setShowRules(!showRules)}>
          {showRules ? 'Hide Rules' : 'Show Rules'}
        </button>
        <button className="btn logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
      {showRules && (
        <div className="rules">
          <p>
            <strong>Game Rules:</strong>
            <br />
            1. Select a number from 1 to 6. <br />
            2. Roll the dice. <br />
            3. If the selected number matches the dice, you earn the dice's value as points.
            <br />
            4. If the guess is wrong, 2 points will be deducted. <br />
          </p>
        </div>
      )}
    </main>
  );
}

export default GamePlay;
