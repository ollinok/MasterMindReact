const Title = () => {
  const styling = {gridColumn: '1 / 5'}
  return (
    <h1 style={styling}>MastermindReact</h1>
  )
}

const AnswerTitleSpace = (props) => {
  return (
    <div id='answer-space'>
        <Title />
    </div>
  );
};

export default AnswerTitleSpace;