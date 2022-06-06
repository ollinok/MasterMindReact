import checkButton from '../img/checkbutton.png';

const CheckButton = ({ currentRow, currentGuess, checkGuess }) => {
  let styling = {
    gridRow: 10 - (currentRow === 0 ? 1 : currentRow),
  };
  if (!currentGuess.includes(undefined)) {
    styling = {
      ...styling,
      animationName: `clickableButton`,
      animationDuration: `2s`,
      animationIterationCount: `infinite`
    }
  } else {
    styling = {
      ...styling,
      opacity: 0.2
    }
  }

  return (
    <input
      type='image'
      src={checkButton}
      alt='Check button'
      className='check-button'
      style={styling}
      onClick={() => checkGuess()}
      disabled={currentGuess.includes(undefined)}>
    </input>
  );
}

const CheckButtonSpace = (props) => {
  return (
    <div id='check-space' className='grid-rows'>
      <CheckButton
        currentRow={props.currentRow}
        currentGuess={props.currentGuess}
        checkGuess={props.checkGuess}
      />
    </div>
  );
}

export default CheckButtonSpace;