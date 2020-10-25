function solution (str) {
  let size = 0;

  for (let i = 0; i < str.length; i++) {
    let temp = '';
    for (let j = i; j < str.length; j++) {
      if (temp.includes(str[j])) break;
      temp += str[j];
      size = (temp.length > size) ? temp.length : size;
    }
  }

  return size
}

function solution2 (str) {
  let left = 0, right = 0, longest = 0;
  let set = new Set();

  while (left < str.length && right < str.length) {

    if (!set.has(str[right])) {
      set.add(str[right]);
      right += 1;
      longest = Math.max(longest, right - left)
    } else {
      set.delete(str[left]);
      left++;
    }
  }

  console.log('longest', longest)
  return longest;
}


solution2('abcabcbb')
solution2('bbbb')
solution2('pwwkew')
