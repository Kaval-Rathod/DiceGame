import { useState, useEffect } from 'react';
import StartGame from './components/StartGame.jsx';
import GamePlay from './components/GamePlay.jsx';
import LoginSignup from './components/LoginSignup.jsx';
import './App.css';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      fetch('http://localhost:5000/validate-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.valid) {
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem('authToken');
            setIsAuthenticated(false);
          }
        })
        .catch((error) => {
          console.error('Error validating token:', error);
          localStorage.removeItem('authToken');
          setIsAuthenticated(false);
        });
    }
  }, []);

  const toggleGamePlay = () => setIsGameStarted((prev) => !prev);

  const handleLoginSuccess = (token) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <>
      {!isAuthenticated ? (
        <LoginSignup onLogin={handleLoginSuccess} />
      ) : isGameStarted ? (
        <GamePlay logout={handleLogout} />
      ) : (
        <StartGame toggle={toggleGamePlay} logout={handleLogout} />
      )}
    </>
  );
}

export default App;
