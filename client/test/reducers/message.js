import assert from 'assert'
import { test } from '../../src/reducers/message'
import * as Actions from '../../src/actions/message'

const queue = [0, 1, 2, 3, 4, 5]
const destQueue = [1, 2, 3, 4, 5]
let state = {
    open: false,
    queue: [],
    current: {}
}

describe('hello', () => {
    it('removeQueue', () => {
        console.log(test.removeItem(queue, 0));
    });


    it('SET_MESSAGE', () => {
        state = test.message(state, Actions.setMessage('sampleA'));
        state = test.message(state, Actions.setMessage('sampleB'));
        // state = test.message(state, Actions.exitedMessage());
        console.log(state);
    })
});
