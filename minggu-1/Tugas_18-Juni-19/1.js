const data = [{
    name: 'Tatas',
    company: 'Arkademy',
    job: 'Trainer',
    status: 'single',
    city: 'Jogja'
},
{
    name: 'Pratama',
    company: 'Emago',
    job: 'Trainer',
    status: 'single',
    city: 'Jakarta'
}]

const newData = [...data.splice(0,0),Object.assign({}, data[0],{
    status: 'married',
    city: 'Jakarta'
}),...data.splice(1,0),Object.assign({}, data[1],{
    company: 'Arkademy',
    city: 'Jogja'
})]

console.log(newData)