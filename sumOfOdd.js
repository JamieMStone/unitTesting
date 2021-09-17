function sumOfOdd(arr){
    let result = 0;
    arr.forEach(value => {
        if (value % 2 === 1 || value % 2 === -1){
            result += value;
        }
    });
    return result;
}

module.exports = sumOfOdd;