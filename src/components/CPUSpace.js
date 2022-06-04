const CPUmarker = ({ color }) => {
  const styling = {
    backgroundColor: color
  };
  return (
    <div
      className='cpu-markers'
      style={styling}>
    </div>
  );
}

const CPURow = ({ index, row }) => {
  return (
    <div id={`cpu-row${9-index}`} className='cpu-rows'>
      {row.map((color, i) =>
        <CPUmarker
          key={i}
          color={color}
          i={i}
        />
      )}  
    </div>
  );
}

const CPUSpace = (props) => {
  return (
    <div id='cpu-space' className='grid-rows'>
      {props.cpuMarkers.map((row, i) =>
        <CPURow 
          key={i}
          index={i}
          row={row}
        />
      )}
    </div>
  );
};

export default CPUSpace;