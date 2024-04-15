const idGenerator = (arr) => {
    const maxId = arr.reduce((maxId, match) => Math.max(maxId, match.id), -1);
    return maxId + 1;
}

export default idGenerator;