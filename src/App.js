import './index.css';
import PlayerSpace from './components/Playerspace';
import CPUSpace from './components/CPUSpace';
import ColorSpace from './components/ColorSpace';
import CheckButtonSpace from './components/CheckButtonSpace';
import AnswerTitleSpace from './components/AnswerTitleSpace';
import HelpMenu from './components/HelpMenu';
import { useEffect, useState } from 'react';
import generateAnswer from './utils/generateAnswer';

function App() {
  const [currentColor, setCurrentColor] = useState('red');
  const [currentRow, setCurrentRow] = useState(1);
  const [answer, setAnswer] = useState([]);
  const [guess, setCurrentGuess] = useState([...Array(4)]);
  const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'purple'];
  const [board, setBoard] = useState([])
  const [cpuMarkers, setCpuMarkers] = useState([]);

  useEffect(() => {
    setBoard([...Array(10)].fill([...Array(4)]));
    setCpuMarkers([...Array(10)].fill([...Array(4)]));
    setAnswer(generateAnswer(colors));
  }, []);

  const changeColor = (color) => {
    setCurrentColor(color);
  };

  const enterGuess = (index) => {
    const newGuess = [...guess];
    newGuess[index] = currentColor;
    setCurrentGuess(newGuess);
  };

  const checkGuess = () => {
    console.log('clicked guess');
    console.log(answer);
    console.log(guess);
    if (guess.every((x,i) => x === answer[i])) {
      console.log('voitto');
    } else {
      setCurrentRow(currentRow + 1);
    }
    addCpuMarkers();
    const newBoard = [...board];
    newBoard[board.length-  currentRow] = guess;
    setBoard(newBoard);
    setCurrentGuess([...Array(4)]);
  };

  const addCpuMarkers = () => {
    const markers = [];
    const a = [...answer];
    const g = guess.map((color, i) => {
      if (color === answer[i]) {
        a[i] = undefined;
        markers.push('black');
        return undefined;
      } else {
        return color;
      }
    });

    g.forEach(color => {
      if (color !== undefined) {
        const i = a.findIndex(x => x === color);
        if (i !== -1) {
          markers.push('white');
          a[i] = undefined;
        }
      }
    });

    const newRow = [...Array(4)];
    markers.forEach((marker, i) =>
      newRow.fill(marker, i, i+1)
    );

    const newCpuMarkers = [...cpuMarkers];
    newCpuMarkers[cpuMarkers.length - currentRow] = newRow;
    setCpuMarkers(newCpuMarkers);
  };



  return (
    <>
      <main className='grid-container'>
        <AnswerTitleSpace />
        <HelpMenu />
        <CPUSpace
          cpuMarkers={cpuMarkers}
        />
        <PlayerSpace
          board={board}
          currentRow={currentRow}
          currentColor={currentColor}
          currentGuess={guess}
          enterGuess={(i) => enterGuess(i)}
        />
        <CheckButtonSpace
          currentRow={currentRow}
          currentGuess={guess}
          checkGuess={checkGuess}
        />
        <ColorSpace
          colors={colors}
          currentColor={currentColor}
          changeColor={(c) => changeColor(c)}
        />
        {/* <div id="victory-splash">

        </div> */}
      </main>
      <footer>
        &copy;2022 Olli Nokkonen
      </footer>
    </>
  );
}

export default App;
