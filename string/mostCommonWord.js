export function mostCommonWord (paragraph, banned) {
  const words = paragraph.replace(/[^\w]/g, ' ').trim()
      .toLowerCase().split(' ').filter(e => e);
  const count = {};
  const arr = [];

  for (let word of words) {
     if (!banned.includes(word)) arr.push(word);
  }

  arr.forEach(val => count[val] = (count[val] || 0) + 1);
  const result = Object.entries(count);
  result.sort((a, b) => b[1] - a[1]);

  return result[0][0];
}
