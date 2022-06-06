const Color = ({ color, changeColor, currentColor }) => {
  const activeButton = {
    borderColor: color === 'black' ? 'rgb(32, 32, 32)' : 'black',
    borderWidth: '3px'
  }
  const styling = color === currentColor 
    ? { ...activeButton, backgroundColor: `${color}` }
    : { backgroundColor: `${color}`, opacity: '0.2' }; 
  return (
    <button
      className='color-buttons'
      style={styling}
      onClick={() => changeColor(color)}>
    </button>
  )
};

const ColorSpace = (props) => {
  return (
    <div id='color-space'>
      {props.colors.map(color =>
        <Color
          key={color}
          color={color}
          currentColor={props.currentColor}
          changeColor={props.changeColor}
        />
      )}
    </div>
  );
};

export default ColorSpace;