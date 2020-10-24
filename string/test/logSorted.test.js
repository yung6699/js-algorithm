import { reorderLogFiles } from '../logSorted.js';

describe("reorderLogFiles Function Test", () => {
  it('test 1', () => {
    const logs = ['dig1 8 1 5 1', 'let1 art can', 'dig2 3 6', 'let2 own kit dog', 'let3 art zero'];
    const result = ['let1 art can', 'let3 art zero', 'let2 own kit dog', 'dig1 8 1 5 1', 'dig2 3 6'];
    expect(reorderLogFiles(logs)).toEqual(result)
  })

  it('test 2', () => {
    const logs = ['2 A', '1 B', '4 C', '1 A'];
    const result = ['1 A', '2 A', '1 B', '4 C'];
    expect(reorderLogFiles(logs)).toEqual(result)
  })

  it('test 3', () => {
    const logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo","a2 act car"];
    const result = ["a2 act car","g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"];
    expect(reorderLogFiles(logs)).toEqual(result)
  })
})
