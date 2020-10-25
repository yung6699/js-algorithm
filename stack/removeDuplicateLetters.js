function removeDuplicatedLetters (str) {
  const count = {};
  const stack = [];
  str.split('').forEach(val => count[val] = (count[val] || 0) + 1);

  for (let idx = 0; idx < str.length; idx++) {
    const char = str[idx];
    count[char] -= 1;
    if (stack.includes(char)) continue;
    const lastChar = stack[stack.length - 1];
    while(stack.length && char < lastChar && count[lastChar] > 0){
      stack.pop();
    }

    stack.push(char);
  }

  return stack.join('')
}

console.log(removeDuplicatedLetters('cbacdcbc'));
console.log(removeDuplicatedLetters('bcabc'));
