import { useState } from 'react';
import './App.css';
import MemoryCards from './components/MemoryCards';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [mode] = useState('medium');
    const difficulty = new Map([
        ['easy', 4],
        ['medium', 6],
        ['hard', 8],
        ['brutal', 12],
    ]);

    return (
        <>
            <Header score={score} />
            <MemoryCards
                score={score}
                setScore={setScore}
                gameOver={gameOver}
                setGameOver={setGameOver}
                count={difficulty.get(mode) ?? 6}
            />
            <Menu score={score} setScore={setScore} gameOver={gameOver} setGameOver={setGameOver} />
            <Footer />
        </>
    );
}

export default App;
