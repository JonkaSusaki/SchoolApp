const array = [1, 2, 3, 4, 5, 6, 7]

const listNumber = 3
const currentPage = 2

const firstItem = (currentPage - 1) * listNumber
const lastItem = firstItem + listNumber

function listItems (array) {
    const newArray = array.slice(firstItem, lastItem)
    return newArray
}

/* console.log(listItems(array))
 */
const obj = {
    id: 1,
    name: 'joao',
    class: '1ano'
}

console.log(Object.keys(obj))

const teste = undefined

console.log(teste ? 'sim' : 'nao')