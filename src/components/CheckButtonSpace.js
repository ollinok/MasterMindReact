const CheckButton = ({ currentRow, currentGuess, checkGuess }) => {
  const styling = {gridRow: 11 - currentRow};
  return (
    <button
      className='check-button'
      style={styling}
      onClick={() => checkGuess()}
      disabled={currentGuess.includes(undefined)}>
      &#10004;
    </button>
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