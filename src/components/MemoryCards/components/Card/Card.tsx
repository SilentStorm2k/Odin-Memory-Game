import styles from './Card.module.css';
import placeHolder from '../../../../assets/insightful-investigator.webp';
import { useState } from 'react';

export default function Card({
    url,
    onClick,
    disable = false,
}: {
    url: string;
    onClick: () => void;
    disable: boolean;
}) {
    const [imageSrc, setImageSrc] = useState(url);
    const championPattern = /loading\/(.*)_0/;
    const matchResult = url.match(championPattern);
    const championName = matchResult ? matchResult[1] : 'Loading';
    return (
        <>
            <button
                className={styles.card}
                onClick={onClick}
                disabled={disable}
                tabIndex={disable ? -1 : 0}
            >
                <img src={imageSrc} onError={() => setImageSrc(placeHolder)} alt={championName} />
                <h2>{championName}</h2>
            </button>
        </>
    );
}
