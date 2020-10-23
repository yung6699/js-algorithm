export function reorderLogFiles (logs) {
  let letters = [];
  let digits = [];
  const splitedStr = (arr) => arr.slice(1).join(' ');

  for (let idx = 0; idx < logs.length; idx++) {
    const log = logs[idx];
    const arr = log.split(' ');
    if (isNaN(arr[1])) letters.push({ value: splitedStr(arr), variable: arr[0], original: log });
    else digits.push({ original: log, idx });
  }

  letters.sort((a, b) => {
    if (a.value !== b.value) return a.value.localeCompare(b.value);
    return a.variable - b.variable
  });

  digits.sort((a, b) => a.idx - b.idx);

  return [...letters.map(({ original }) => original), ...digits.map(({ original }) => original)];
}
