const Color = ({ color, changeColor, currentColor }) => {
  const activeButton = {
    borderColor: `black`,
    animationName: `activeColor`,
    animationDuration: `3s`,
    animationIterationCount: `infinite`,
    '--color': `${color}`
  }
  const styling = color === currentColor 
    ? { ...activeButton, backgroundColor: `${color}` }
    : { backgroundColor: `${color}` }; 
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