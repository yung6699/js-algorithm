import { mostCommonWord } from '../mostCommonWord.js';

describe("reorderLogFiles Function Test", () => {
  it('mostCommonWord test 1', () => {
    const str = "Bob hit a ball, the hit BALL flew far after it was hit.";
    const banned = ["hit"];
    expect(mostCommonWord(str, banned)).toBe('ball')
  })
})
