import './StartGame.css';

const StartGame = ({ toggle, logout }) => {
  return (
    <div className="StartGame">
      <h1>Dice Game</h1>
      <div className="bt">
        <button
          aria-label="Start playing the Dice Game"
          className="play-now-button"
          onClick={toggle}
        >
          Play Now
        </button>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default StartGame;
