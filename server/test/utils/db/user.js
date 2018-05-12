const expect = require("chai").expect;
const user = require('../../../utils/db/users')

describe('utils db/user', () => {
    describe('userInfo', () => {
        it('userInfo', async () => {
            const userInfo = await user.publicInfo(45);
            expect(userInfo).to.have.keys('userName', 'displayName')
            expect(userInfo.displayName).to.equal('Ouvill')
        })
    })
})
