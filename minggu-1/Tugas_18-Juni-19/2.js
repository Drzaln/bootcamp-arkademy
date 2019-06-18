const huruf = "abcdefghijklmn"
const hurSpl = huruf.split("")
const perintah =[true, false, true, true, false, false, true, true, true, false, true, false, false, true]

function cetak() {
    hasil = ""
    for (let i = 0; i < hurSpl.length; i++) {
        if (perintah[i] == true) {
            hasil += hurSpl[i]
        }
    }
    return hasil
}

console.log(cetak())