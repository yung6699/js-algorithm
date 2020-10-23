import { isPalindrome } from '../isPalindrome.js';

describe("isPalindrome Function Test", () => {
  it('test 1', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true)
  })
  it('test 2', () => {
    expect(isPalindrome('race a car')).toEqual(false)
  })
})
