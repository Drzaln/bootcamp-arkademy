const buku = [
    {
        judul: 'Halu',
        status: 'ada',
        pengarang: 'Bai'
    },
    {
        judul: 'Gom',
        status: 'dipinjam',
        pengarang: 'Jak'
    },
    {
        judul: 'Boko',
        status: 'ada',
        pengarang: 'Hon'
    },
    {
        judul: 'Aso',
        status: 'dipinjam',
        pengarang: 'Pudin'
    },
    {
        judul: 'Long',
        status: 'ada',
        pengarang: 'Komer'
    },
]

function bukuStatus(param) {
    hasil = ""
    for (let i = 0; i < buku.length; i++) {
        if (param == buku[i].judul) {
            hasil += buku[i].status
        }
    }
    return hasil
}

function bukuAda() {
    hasil = ""
    for (let i = 0; i < buku.length; i++) {
        if (buku[i].status == 'ada') {
            hasil += `Buku yang dapat dipinjam adalah ${buku[i].judul} \n`
        }
    }
    return hasil
}

console.log(bukuStatus('Long'))
console.log(bukuAda())