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
  let left = 0;
  let right = 0;
  let longest = 0;
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

  return longest;
}


solution2('abcaacbb')
solution2('bbbb')
solution2('pwwkew')
