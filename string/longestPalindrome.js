function longestPalindrome (str) {
  const reversedStr = str.split('').reverse().join('');
  let result = '';

  function expand (left, right) {
    while (left >= 0 && right <= str.length && str[left] === str[right - 1]) {
      left -= 1;
      right += 1;
    }
    return str.slice(left + 1, right -1)
  }

  if (str.length < 2 || str === reversedStr) return str;

  for (let idx = 0; idx < str.length; idx++) {
    const arr = [result, expand(idx, idx + 1), expand(idx, idx + 2)];
    result = arr.reduce((previous, current) => {
      return previous.length > current.length ? previous : current;
    });
  }

  return result
}
