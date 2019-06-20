let arr = [
    [1, 2, 3],
    [4, 5, 6]
]

transposeMat = (a) => {
    let w = a.length ? a.length : 0
    let h = a[0] instanceof Array ? a[0].length : 0

    if (h === 0 || w === 0) {
        return []
    }

    let i, j, t = []

    for (let i = 0; i < h; i++) {
        t[i] = []

        for (let j = 0; j < w; j++) {
            t[i][j] = a[j][i]
        }
    }
    return t
}

console.log(transposeMat(arr))