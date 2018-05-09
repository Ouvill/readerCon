import assert from 'assert'

const hello = 'hello'
describe('hello', () => {
    it('has spy', () => {
        assert.equal(hello, 'hello');
    });
});
