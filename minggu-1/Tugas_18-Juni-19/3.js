let inp = [4,5,2,7,8,4]

function median() {
    inp.sort()
    if (inp.length % 2 == 0) {
        hasil = (inp[inp.length / 2 - 1] + inp[inp.length / 2]) / 2
    } else {
        hasil = inp[(inp.length - 1) / 2]
    }
    return hasil
}

function modus() {
    hasil = 0
    total = 0
    for (var i = 0; i < inp.length; i++) {
        var jumlah = 0
        for (var j = 0; j < inp.length; j++) {
            if (inp[i] == inp[j]) {
                jumlah++
            }
        }

        if (jumlah > total) {
            total = jumlah
            hasil = inp[i]
        }
    }
    return hasil
}

function mean() {
    var hasil, rata = 0;
    if (inp.length)
    {
        hasil = inp.reduce(function(a, b) { return a + b; });
        rata = hasil / inp.length;
    }
    return hasil
}

console.log("Modus " + modus())
console.log("Median " + median())
console.log("Mean " + mean())