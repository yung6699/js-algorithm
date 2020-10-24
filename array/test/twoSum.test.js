import { twoSum } from '../twoSum.js'

test("two Sum function", () => {
  const list = [2, 11, 15, 7];
  const target = 9;
  expect(twoSum(list, target)).toEqual([0, 3])
})
