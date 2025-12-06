import { useState } from 'react';
import styles from './MemoryCards.module.css';
import Card from './components/Card';
import useFetchChampionData from '../../hooks/useFetchChampionData';
import useFetchChampionURLs from '../../hooks/useFetchChampionURLs';

export default function MemoryCards({
    count = 6,
    score,
    setScore,
    gameOver,
    setGameOver,
}: {
    count: number;
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    gameOver: boolean;
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [urls, setUrls] = useState<string[]>([]);
    const [clickedUrls, setClickedUrls] = useState(new Set());
    const { data: champions } = useFetchChampionData();
    const { onClick: shuffleUrls } = useFetchChampionURLs(
        urls,
        setUrls,
        champions,
        gameOver,
        count,
    );

    const onCardClick = (url: string) => {
        let incorrect = false;
        if (clickedUrls.has(url)) {
            setClickedUrls(new Set());
            setGameOver(true);
            incorrect = true;
        } else {
            setScore(score + 1);
            setClickedUrls((prev) => new Set(prev.add(url)));
        }
        shuffleUrls();
        return incorrect;
    };
    return (
        <div className={`${styles.cardContainer} ${gameOver && styles.gameOver}`}>
            {urls.map((url) => (
                <Card key={url} url={url} onClick={() => onCardClick(url)} disable={gameOver} />
            ))}
        </div>
    );
}
