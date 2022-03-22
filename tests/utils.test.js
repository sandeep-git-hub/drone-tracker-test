import { expect } from "chai";
import { getPosition, calculatePosition} from '../src/utils'

describe("util unit tests", () => {
  it('unit test for sample input - getPosition', () => {
    const result = getPosition('4521NMMRMLMQ')
    expect(result).eq('3 4 N')
  })

  it('unit test - calculatePosition North', () => {
    const res = calculatePosition('N', 4, 5)
    expect(res.direction).eq('N')
    expect(res.currentX).eq(4)
    expect(res.currentY).eq('6')
  })

  it('unit test - calculatePosition East', () => {
    const res = calculatePosition('E', 4, 5)
    expect(res.direction).eq('E')
    expect(res.currentX).eq('5')
    expect(res.currentY).eq(5)
  })
})