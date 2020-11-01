function solution(words) {

  const list = [];
  const result = [];

  function dfs(elements, arr) {
    if (arr.length === 2) {
      list.push([...arr]);
      return;
    };

    for (let element of elements) {
      const _elements = [...elements];
      _elements.splice(_elements.indexOf(element), 1);
      dfs(_elements, [...arr, element]);
    }
  }

  dfs(words, []);

  list.forEach(([prev, next]) => {
    const word = prev + next;
    const reversedWord = word.split('').reverse().join('');
    if (word === reversedWord) {
      result.push([words.indexOf(prev), words.indexOf(next)])
    }
  })


  return result

};

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {

  let result = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      //check
      if (helper(words[i] + words[j])) {
        result.push([i, j])
      }
      if (helper(words[j] + words[i])) {
        result.push([j, i])
      }
    }
  }
  return result;

};

function helper(s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
}

// let words = ["abcd","dcba","lls","s","sssll"];
let words = ["bat", "tab", "cat"];
console.log(solution(words))
