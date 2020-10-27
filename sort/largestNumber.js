function solution(numbers) {
  const answer = numbers.map(e => e + "")
      .sort((a,b) => (b + a) - (a + b))
      .join('');

  const isZero = answer.split('').every(v => v === '0')

  return (isZero) ? '0' : answer;
}
