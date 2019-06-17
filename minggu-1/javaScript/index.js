// var bisa dibaca secara global, let&const hanya dapat dibaca didalam hostingnya {}

let orang = [
    {
        nama: "kevin",
        umur: 13,
    },
    {
        nama: "juni",
        umur: 10,
    },
    {
        nama: "jon",
        umur: 40,
    },
    {
        nama: "idem",
        umur: 20,
    },
]

let a = orang.map(value => [value.nama, value.umur].join(" ")) // show all item in Array
console.log(a)

a.push("Juki 20") // push item to array
console.log(a)

a.splice(1,2) // delete item from array
console.log(a)

// orang.push({nama: "Rehan", umur: 42}) 
// console.log(orang)

// orang.splice(1,2) 
// console.log(orang)

orang[0].nama = "Jakuni" // change value on item
console.log(orang)