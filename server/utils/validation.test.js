const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => { 
    it('should pass correct value', () => {
        var testString = 'goodString';
        expect(isRealString(testString)).toBeTruthy();
        var testString = '  good String  ';
        expect(isRealString(testString)).toBeTruthy();
        var testString = 'good string         ';
        expect(isRealString(testString)).toBeTruthy();
    });

    it('should not pass incorrect value', () => {
        var testString = '';
        expect(isRealString(testString)).toBeFalsy();
        var testString = '        ';
        expect(isRealString(testString)).toBeFalsy();
        expect(isRealString(123)).toBeFalsy();
    });
});