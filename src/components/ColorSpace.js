const Color = ({ color }) => {
  const styling = {backgroundColor:`${color}`};
  return (
    <button className='color-buttons' style={styling}>

    </button>
  )
};

const ColorSpace = (props) => {
  const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white','purple'];

  return (
    <div id='color-space'>
      {colors.map((color, i) =>
        <Color
          key={color}
          color={color}
        />
      )}
    </div>
  );
};

export default ColorSpace;