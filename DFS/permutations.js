/*
*  순열 문제
* */
function permutations (list) {
  const result = [];

  function dfs (elements, arr) {
     // if (elements.length === 0) {
     //   result.push([ ...arr ]);
     //   return;
     // };

    result.push([ ...arr ]);
    if (!elements.length) return;

    for (let element of elements) {
       const _elements = [ ...elements ];
       _elements.splice(_elements.indexOf(element), 1);
       dfs(_elements, [...arr, element]);
     }
  }

  dfs(list, []);
  return result;
}

console.log(permutations([1,2,3]));
