const AnswerMarker = (props) => {
  return (
    <div className='answer-markers'>
      
    </div>
  );
};

const Title = () => {
  const styling = {gridColumn: '1 / 5'}
  return (
    <h1 style={styling}>MastermindReact</h1>
  )
}

const AnswerTitleSpace = (props) => {
  const showAnswer = false;
  return (
    <div id='answer-space'>

      {showAnswer ? 
        [...Array(4)].map((_ele, i) => 
          <AnswerMarker 
            key={i}
            i={i}
          />
        )
        :
        <Title />
      }
    </div>
  );
};

export default AnswerTitleSpace;