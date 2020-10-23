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
})
