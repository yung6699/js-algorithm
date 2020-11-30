function solution(s) {
  const results = [];

  for (let i = 1; i <= s.length; i++) {

    const splitedStrs = [];
    let pressedStr = '';
    let count = 0;

    for (let j = 0; j < s.length; j += i) {
      const slicedStr = s.substring(j, j + i);

      console.log('slicedStr', slicedStr)
      splitedStrs.push(slicedStr);
    }


    for (let x = 0; x < splitedStrs.length; x++) {
      count += 1;
      if (splitedStrs[x] !== splitedStrs[x + 1]) {
        if (count > 1) pressedStr += count;
        pressedStr += splitedStrs[x];
        count = 0;
      }
    }

    results.push(pressedStr.length);
  }


  return Math.min(...results);
}

console.log(solution('aabbaccc'))
console.log(solution('abcabcabcabcdededededede'))
