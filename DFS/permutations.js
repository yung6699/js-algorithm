/*
*  순열 문제
* */
function permutations (list) {
  const result = [];

  function dfs (elements, arr) {
     if (elements.length === 0) {
       result.push([ ...arr ]);
       return;
     };

    // result.push([ ...arr ]);
    // if (!elements.length) return;

    for (let element of elements) {
       const _elements = [ ...elements ];
       _elements.splice(_elements.indexOf(element), 1);
       dfs(_elements, [...arr, element]);
     }
  }

  dfs(list, []);
  return result;
}



const getPermutations= function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)] // 해당하는 fixed를 제외한 나머지 배열 
    const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
    const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

console.log(getPermutations([1,2,3], 3));
