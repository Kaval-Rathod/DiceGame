import { useState } from 'react'
import StartGame from './components/StartGame.jsx'
import './App.css'
import GamePlay from './components/GamePlay.jsx';

function App() {

  const [isGameSatarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      {isGameSatarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </>
  )
}

      export default App
