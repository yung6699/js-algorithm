export function groupAnagrams (words) {
  const anagrams = {};
  const result = [];

  for (const word of words) {
    const arr = word.split('');
    arr.sort((a, b) => a.localeCompare(b));
    const key = arr.join('');
    if (!anagrams.hasOwnProperty(key)) anagrams[key] = [];
    anagrams[key].push(word);
  }

  for (const value of Object.values(anagrams)) {
    value.sort((a, b) => a.localeCompare(b));
    result.push(value)
  }

  return result;
}
