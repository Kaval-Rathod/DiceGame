import './HomeStyle.css';

const StartGame = ({ toggle }) => {
  return (
    <div className="StartGame">
      <h1>Dice Game</h1>
      <button
        style={{
          fontFamily: 'Courier New, Courier, monospace',
          padding: '10px 50px',
          fontSize: '1.5rem',
          backgroundColor: '#fd5944',
          borderRadius: '5px',
          color: 'aliceblue',
          cursor: 'pointer',
          border: '2px solid rgb(71, 0, 0)',
          fontWeight: 'bold',
        }}
        onClick={toggle}
      >
        Play Now
      </button>
    </div>
  );
};

export default StartGame;
