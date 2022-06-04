import './index.css';
import PlayerSpace from './components/Playerspace';
import CPUSpace from './components/CPUSpace';
import ColorSpace from './components/ColorSpace';
import CheckButtonSpace from './components/CheckButtonSpace';
import AnswerTitleSpace from './components/AnswerTitleSpace';
import HelpMenu from './components/HelpMenu';
import GameEndSplash from './components/GameEndSplash';
import { useEffect, useState } from 'react';

import generateAnswer from './utils/generateAnswer';

function App() {
  const [currentColor, setCurrentColor] = useState('red');
  const [currentRow, setCurrentRow] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [guess, setCurrentGuess] = useState([...Array(4)]);
  const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'purple'];
  const [board, setBoard] = useState([])
  const [cpuMarkers, setCpuMarkers] = useState([]);
  const [gameEnd, setGameEnd] = useState(false);
  const [victory, setVictory] = useState(false);
  const [newGame, setNewGame] = useState(0);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    setGameEnd(false);
    setBoard([...Array(9)].fill([...Array(4)]));
    setCpuMarkers([...Array(9)].fill([...Array(4)]));
    setAnswer(generateAnswer(colors));
    setCurrentRow(1);
  }, [newGame]);

  const changeColor = (color) => {
    setCurrentColor(color);
  };

  const enterGuess = (index) => {
    const newGuess = [...guess];
    newGuess[index] = currentColor;
    setCurrentGuess(newGuess);
  };

  const checkGuess = () => {
    if (guess.every((x,i) => x === answer[i])) {
      setVictory(true);
      setCurrentRow(0);
      setGameEnd(true);
    } else {
      setCurrentRow(currentRow + 1);
    }
    addCpuMarkers();
    const newBoard = [...board];
    newBoard[board.length - currentRow] = guess;
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

  if (currentRow === 11) {
    setCurrentRow(0);
    setGameEnd(true);
  }

  return (
    <>
      <main className='grid-container'>
        <AnswerTitleSpace />
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
        {gameEnd
          ? <GameEndSplash
              answer={answer}
              victory={victory}
              newGame={() => setNewGame(newGame + 1)}
            />
          : null
        }
        <HelpMenu
          status={showHelp}
          show={() => setShowHelp(!showHelp)}
        />
      </main>
      <footer>
        &copy;2022 Olli Nokkonen
      </footer>
    </>
  );
}

export default App;
