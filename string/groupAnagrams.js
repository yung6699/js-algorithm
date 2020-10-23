export function groupAnagrams (words) {
  const hash = {};
  const result = [];

  for (const word of words) {
    const letters = word.split('').sort((a, b) => a.localeCompare(b));
    hash[letters] ? hash[letters].push(word) : hash[letters] = [ word ];
  }

  for (const value of Object.values(hash)) {
    value.sort((a, b) => a.localeCompare(b));
    result.push(value)
  }

  return result;
}
