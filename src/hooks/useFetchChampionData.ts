import { useEffect, useState } from 'react';

export default function useFetchChampionData() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [champions, setChampions] = useState<string[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const leagueChampUrl =
                'https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json';
            try {
                const response = await fetch(leagueChampUrl);
                const data = await response.json();
                const champData = data.data;
                const championNames = Object.keys(champData).map((key) => champData[key].id);
                setChampions(championNames);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { data: champions, loading, error };
}
