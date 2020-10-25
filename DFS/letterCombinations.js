function letterCombinations (digits) {
  const results = [];
  const dic = {
    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
  };

  function dfs (idx, path) {
    if (path.length === digits.length) {
      results.push(path);
      return;
    }

    for (let i = idx; i < digits.length; i++) {
      for (let char of dic[digits[i]].split('')) {
        dfs(i + 1, path + char);
      }
    }
  }


  dfs(0, '');
  return results;
}

console.log(letterCombinations('23'));
