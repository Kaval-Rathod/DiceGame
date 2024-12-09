import { useState, useEffect } from 'react';
import StartGame from './components/StartGame.jsx';
import GamePlay from './components/GamePlay.jsx';
import LoginSignup from './components/LoginSignup.jsx';
import './App.css';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state for token validation

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      fetch(`${apiUrl}/validate-token`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ token }),
      })
        .then((res) => {
          if (!res.ok) throw new Error('Token validation failed');
          return res.json();
        })
        .then((data) => {
          if (data.valid) {
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem('authToken');
          }
        })
        .catch(() => localStorage.removeItem('authToken'))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
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
    setIsGameStarted(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
