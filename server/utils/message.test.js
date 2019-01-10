var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'test';
        var text = 'test message';
        var response = generateMessage(from, text);

        expect(response).toMatchObject({from, text});
        expect(typeof response.createdAt).toBe('number');
    })
});


describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        var from = 'test';
        var latitude = 10;
        var longitude = 11;
        var url = 'https://www.google.com/maps?q=10,11';

        var response = generateLocationMessage(from, latitude, longitude);

        expect(response).toMatchObject({from, url});
        expect(typeof response.createdAt).toBe('number');
    })
});