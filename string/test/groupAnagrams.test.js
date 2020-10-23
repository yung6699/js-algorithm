import { groupAnagrams } from '../groupAnagrams.js';

describe("groupAnagram Function Test", () => {
  it('groupAnagram test 1', () => {
    const arr = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const result = [
        ['ate', 'eat', 'tea'],
        ['nat', 'tan'],
        ['bat']
    ];
    expect(groupAnagrams(arr)).toEqual(result)
  })
})
