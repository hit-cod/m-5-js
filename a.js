const fooz = [[1, [2, [2,3]]], [2], 5, 10];

const fo = (arr) => {
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            // acc = [...acc, ...fo(item)];
            acc = fo(item);
            return acc;
        }
        acc.push(item);
        return acc
    }, [])
}

console.log(fo(fooz));