const PlayerButton = (props) => {
  return (
    <button 
      className='player-buttons'>
      
    </button>
  );
};
  
const PlayerRow = (props) => {
  return (
    <div id={`player-row${10-props.i}`} className='player-rows'>
      {[...Array(4)].map((_ele, i) => 
        <PlayerButton 
          key={i}
        />
      )}
    </div>
  );
};

const PlayerSpace = (props) => {


  return (
    <div id='player-space' className='grid-rows'>
      {[...Array(10)].map((_ele, i) => 
        <PlayerRow 
          key={i}
          i={i}
        />
      )}
    </div>
  );
};

export default PlayerSpace;