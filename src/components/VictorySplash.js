const AnswerMarker = ({ color }) => {
  return (
    <div
      className='answer-markers'
      style={{
        backgroundColor: color,
        borderStyle: 'solid',
        borderColor: 'midnightblue',
        borderWidth: '2px'
        }}>
    </div>
  );
};

const VictorySplash = (props) => {
  return (
    <div id="victory-splash" className='splash-div flex-column'>
      <span className='big-text'>Victory!</span>
      <div className='player-rows' style={{ gap: `10px`}}>
        {props.answer.map((color,i) =>
            <AnswerMarker
              key={i}
              color={color}
            />)
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