export function isAnagram(word1, word2) {
  // implementar logica aqui
  const Anagram = str =>
    str
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, '')
    .split('')
    .sort()
    .join('');
    return Anagram(word1) === Anagram(word2);
}