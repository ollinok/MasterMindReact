const AnswerMarker = ({ color }) => {
  return (
    <div
      className='answer-markers'
      style={{
        backgroundColor: color,
        borderStyle: 'solid',
        borderWidth: '2px'
        }}>
    </div>
  );
};

const VictorySplash = (props) => {
  return (
    <div id="victory-splash" className='flex-column'>
      <span className='big-text'>Victory!</span>
      <div className='player-rows' style={{ gap: `10px`}}>
        {props.answer.map(color =>
            <AnswerMarker
              key={color}
              color={color}
            />
          )
        }
      </div>
      <button
        className='menu-buttons'
        onClick={props.newGame}>
        Play again
      </button>
    </div>
  );
};

export default VictorySplash;