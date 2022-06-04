const ActivePlayerButton = ({ i, currentGuess, enterGuess }) => {
  let styling = {
    borderStyle: `solid`,
    borderColor: `black`,
  };
  currentGuess
    ? styling = {
        ...styling,
        backgroundColor: currentGuess
      }
    : styling = {
        ...styling,
        animationName: `activeRow`,
        animationDuration: `3s`,
        animationIterationCount: `infinite`
      };

  return (
    <button 
      className='player-buttons'
      style={styling}
      onClick={() => enterGuess(i)}>    
    </button>
  );
}

const PlayerButton = ({ color }) => {
  const styling = {
    backgroundColor: color
  };
  return (
    <button 
      className='player-buttons'
      style={styling}>
      
    </button>
  );
};
  
const PlayerRow = ({ row, index, currentRow, currentGuess, enterGuess }) => {
  return (
    <div id={`player-row${index}`} className='player-rows'>
      { currentRow === index
        ? row.map((_color, i) => 
            <ActivePlayerButton 
              key={i}
              i={i}
              currentGuess={currentGuess[i]}
              enterGuess={enterGuess}
            />
          )
        : row.map((color, i) => 
            <PlayerButton 
              key={i}
              color={color}
            />
          )
      }
    </div>
  );
};

const PlayerSpace = (props) => {
  return (
    <div id='player-space' className='grid-rows'>
      {props.board.map((row, i) => 
        <PlayerRow 
          key={i}
          row={row}
          index={9-i}
          currentRow={props.currentRow}
          currentGuess={props.currentGuess}
          enterGuess={props.enterGuess}
        />
      )}
    </div>
  );
};

export default PlayerSpace;