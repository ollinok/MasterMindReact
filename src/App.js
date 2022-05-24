import './index.css';
import PlayerSpace from './components/Playerspace';
import CPUSpace from './components/CPUSpace';
import ColorSpace from './components/ColorSpace';
import CheckButtonSpace from './components/CheckButtonSpace';
import AnswerTitleSpace from './components/AnswerTitleSpace';
import HelpMenu from './components/HelpMenu';
import { useState } from 'react';


function App() {
  const [currentColor, setCurrentColor] = useState('red');
  const [currentRow, setCurrentRow] = useState(10);
  const [answer, setAnswer] = useState([]);
  const [guess, setGuess] = useState([]);
  const [cpuMarkers, setCpuMarkers] = useState([]);

  return (
    <>
      <main className='grid-container'>
        <AnswerTitleSpace />
        <HelpMenu />
        <CPUSpace />
        <PlayerSpace />
        <CheckButtonSpace />
        <ColorSpace />
      </main>
      <footer>
        &copy;2022 Olli Nokkonen
      </footer>
    </>
  );
}

export default App;
