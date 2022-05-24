const CPUmarker = (props) => {
  return (
    <div className='cpu-markers'>
    </div>
  );
}

const CPURow = (props) => {
  return (
    <div id={`cpu-row${10-props.i}`} className='cpu-rows'>
      {[...Array(4)].map((_ele, i) =>
        <CPUmarker
          key={i}
          i={i}
        />
      )}  
    </div>
  );
}

const CPUSpace = (props) => {
  return (
    <div id='cpu-space' className='grid-rows'>
      {[...Array(10)].map((_ele, i) =>
        <CPURow 
          key={i}
          i={i}  
        />
      )}
    </div>
  );
};

export default CPUSpace;