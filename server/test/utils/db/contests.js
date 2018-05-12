const expect = require("chai").expect;
const dbContests = require('../../../utils/db/contests')

describe('utils db/contests', () => {
    // describe('create', () => {
    //     it('error', async () => {
    //         const userId = 45,
    //         const title = 'テスト'
    //         const overview = 'テストアラスジ'
    //         contests.create()
    //     })
    // })

    describe('apply', () => {
        it('return false', async () => {
            const result = await dbContests.apply(1, 1);
            expect(result).to.equal(false)
        })
    })
})
