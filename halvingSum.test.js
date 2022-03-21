const halvingSum = require ('./halvingSum.js');

describe('halvingSum', () => {
    it('should return 47', () => {
        expect(halvingSum(25)).toBe(47);
    });

    it('127 should return 247', () => {
        expect(halvingSum(127)).toBe(247);
    })

    it('1 should return 1', () => {
        expect(halvingSum(1)).toBe(1);
    })
});