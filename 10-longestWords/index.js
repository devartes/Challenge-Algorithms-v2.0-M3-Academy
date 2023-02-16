export function longestWords(words) {
    // implementar logica aqui
    let maxWord = Math.max(...words.map( elem => elem.length))
    return words.filter(elem => elem.length === maxWord)
}