let arr = [
    [1, 2, 3],
    [4, 5, 6]
]

let arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

transposeMat = (a) => {
    let t = []
    for (let i = 0; i < a[0].length; i++) {
        t[i] = []
        for (let j = 0; j < a.length; j++) {
            t[i][j] = a[j][i]
        }
    }
    return t
}

console.log(transposeMat(arr2))