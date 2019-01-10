var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'test';
        var text = 'test message';
        var response = generateMessage(from, text);

        expect(response).toMatchObject({from, text});
        expect(typeof response.createdAt).toBe('number');
    })
});