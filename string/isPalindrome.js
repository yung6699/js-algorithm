export function isPalindrome (str) {
  const regex = /[^a-z0-9]/g;
  const _str = str.toLowerCase().replace(regex, '').split('');
  return _str.join('') === _str.reverse().join('');
}
