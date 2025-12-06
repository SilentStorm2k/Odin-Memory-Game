import styles from './Menu.module.css';
export default function Menu({
    score,
    setScore,
    gameOver,
    setGameOver,
}: {
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    gameOver: boolean;
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const onClick = () => {
        setGameOver(false);
        setScore(0);
    };
    return (
        <div className={`${styles.menu} ${gameOver && styles.show}`}>
            <h1>Game Over</h1>
            <p>You scored {score} points!</p>
            <button onClick={onClick}>Retry?</button>
        </div>
    );
}
