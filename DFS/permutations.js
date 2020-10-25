/*
*  순열 문제
* */
function permutations (list) {
  const result = [];
  const temp = [];

  function dfs (elements) {
     if (elements.length === 0) {
       result.push([ ...temp ]);
       return;
     };

     for (let element of elements) {
       const _elements = [ ...elements ];
       _elements.splice(_elements.indexOf(element), 1);
       temp.push(element);
       dfs(_elements);
       temp.pop();
     }
  }

  dfs(list);
  return result;
}

console.log(permutations([1,2,3]))
