import nap from '@tiaanduplessis/nap'
import countItDown from '../'

test('should export function', () => {
  expect(countItDown).toBeDefined()
})

test('should call onUpdate function', async () => {
  const fn = jest.fn()
  const d = new Date('01/26/2019')
  countItDown(d, fn)
  await nap(2000)
  expect(fn).toBeCalled()
})
