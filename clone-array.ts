// Deep cloning of array can be try especially when cloning an array of object
const items = [
    {
        id: 2,
        name: 'apples',
        category: {
            name: 'fruits'
        }
    },
    {
        id: 4,
        name: 'kiwis',
        category: {
            name: 'fruits'
        }
    }
]


const copy = items.map((item) => {
    return JSON.parse(JSON.stringify(item))
}) as typeof items // checkout the quick way of passing a reference type to a variable when the return type of the function if not automatically infered

copy[0].category.name = "grocery"

console.log(copy[0].category) // { name: 'grocery' }
console.log(items[0].category) // { name: 'fruits' }