function solution(begin, target, words) {
  const result = [];
  const size = begin.length;

  if (!words.includes(target)) return 0;
  function dfs (_begin, _words, store) {
    if (_begin === target) {
      result.push(store.length);
      return;
    }

    for (let i = 0; i < _words.length; i++) {
      const splitedWord = _words[i].split('');
      const splitedBegin = _begin.split('');

      for (let j = 0; j < size; j++) {
        const replacedWord = [...splitedWord];
        const replacedBegin = [...splitedBegin];
        replacedWord.splice(j, 1);
        replacedBegin.splice(j, 1);

        if (replacedBegin.join('') === replacedWord.join('')) {
          const arr = [..._words];
          arr.splice(i, 1);
          dfs(_words[i], arr,[...store, _words[i]])
        }
      }
    }
  }

  dfs(begin, [...words], [])
  return Math.min(...result);
}
const result = solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']);
console.log('result', result);
