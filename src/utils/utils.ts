export const shuffle = (array: string[]) => {
    // Fisher-Yates shuffling algorithm
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export const chooseN = (arr: string[], N: number) => {
    const chosen = new Set<string>([]);
    if (N >= arr.length) return arr;
    while (chosen.size < N) chosen.add(arr[Math.floor(Math.random() * arr.length)]);
    return [...chosen];
};
