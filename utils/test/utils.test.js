import { counter } from '../../utils';

describe("reorderLogFiles Function Test", () => {
  it('utils test 1', () => {
    expect(counter(logs)).toEqual(result)
  })

  it('test 2', () => {
    const logs = ['2 A', '1 B', '4 C', '1 A'];
    const result = ['1 A', '2 A', '1 B', '4 C'];
    expect(reorderLogFiles(logs)).toEqual(result)
  })
})
