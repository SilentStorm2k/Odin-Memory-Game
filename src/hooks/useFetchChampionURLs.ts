import { useEffect } from 'react';
import { chooseN, shuffle } from '../utils/utils';

export default function useFetchChampionURLs(
    urls: string[],
    setUrls: React.Dispatch<React.SetStateAction<string[]>>,
    champions: string[],
    gameOver: boolean,
    championCount: number = 6,
) {
    // const [urls, setUrls] = useState<string[]>([]);
    useEffect(() => {
        const fetchChampionUrls = (count: number) => {
            const chosenChamps = chooseN(champions, count);
            const champUrls = chosenChamps.map(
                (champion) =>
                    `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`,
            );
            setUrls(champUrls);
        };
        if (!gameOver) fetchChampionUrls(championCount);
    }, [champions, championCount, setUrls, gameOver]);

    const onClick = () => {
        const shuffledUrls = shuffle(urls);
        setUrls(shuffledUrls);
    };

    return { onClick };
}
