import { sum, translate, KWEGONIAN } from './index'

describe('sum()', () => {
    it('should sum all values from array', () => {
        const mockInputValues = [...KWEGONIAN]
        const expectedValue = 1666
        const result = sum(mockInputValues)

        expect(result).toBe(expectedValue)
    })
})

describe('translate()', () => {
    it('should translate input values to KWEGONYAN', () => {
        const expectedResult = {
            input: 'polsx polsx jinjin pol kilow kil jin',
           output: 2544
        }
        const result = translate('polsx polsx jinjin pol kilow kil jin')

        expect(result).toBe(expectedResult)
    })
})

