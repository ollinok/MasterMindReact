const ConstButton = (props) => {
  const styling = {gridRow: 10};
  return (
    <button className='check-button' style={styling}>
      Check
    </button>
  );
}

const CheckButtonSpace = (props) => {
  return (
    <div id='check-space' className='grid-rows'>
      <ConstButton />
    </div>
  );
}

export default CheckButtonSpace;