import { useState } from 'react';
import styles from './Header.module.css';

export default function Header({ score }: { score: number }) {
    const [maxScore, setMaxScore] = useState(score);
    if (score > maxScore) setMaxScore(score);
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <div>
                    <img src="/favicon.png" alt="logo" />
                </div>
                <div className={styles.title}>
                    <h1>League Memory Game</h1>
                    <p>Select the unselected → increase your score</p>
                </div>
            </div>
            <div className={styles.score}>
                <div className={styles.row}>
                    <h3>High Score: </h3>
                    <h3> {maxScore}</h3>
                </div>
                <div className={styles.row}>
                    <h3>Score: </h3>
                    <h3> {score}</h3>
                </div>
            </div>
        </div>
    );
}
