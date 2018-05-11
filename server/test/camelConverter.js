const expect = require("chai").expect;
const camel = require('../utils/camelConverter');


describe('camelConverter', function () {
    describe('snakeToLowerCamel', function () {
        it('camel', () => {
            expect(camel.snakeToLowerCamel('sample_test')).to.equal('sampleTest');
        })

        it('json', () => {
            const json = {
                user_id: 1,
                user_name: "hoge",
                display_name: 'ほげほげ',
                date_at: '2018-05-15T00:00:00.000Z',
            }

            const result = {
                userId: 1,
                userName: "hoge",
                displayName: 'ほげほげ',
                dateAt: '2018-05-15T00:00:00.000Z',
            }

            expect(camel.jsonKeyToLowerCamel(json)).to.deep.equal(result);
        });


        it('json in json', () => {
            const json = {
                user_id: 1,
                user_name: "hoge",
                display_name: 'ほげほげ',
                date_at: '2018-05-15T00:00:00.000Z',
                json: {
                    user_id: 1,
                    user_name: "hoge",
                    display_name: 'ほげほげ',
                    date_at: '2018-05-15T00:00:00.000Z',
                }
            }
            const result = {
                userId: 1,
                userName: "hoge",
                displayName: 'ほげほげ',
                dateAt: '2018-05-15T00:00:00.000Z',
                json: {
                    userId: 1,
                    userName: "hoge",
                    displayName: 'ほげほげ',
                    dateAt: '2018-05-15T00:00:00.000Z',
                }
            }

            expect(camel.jsonKeyToLowerCamel(json)).to.deep.equal(result);
        });


        it('array json', () => {
            const json = {
                user_id: 1,
                user_name: "hoge",
                display_name: 'ほげほげ',
                date_at: '2018-05-15T00:00:00.000Z',
            }
            const result_json = {
                userId: 1,
                userName: "hoge",
                displayName: 'ほげほげ',
                dateAt: '2018-05-15T00:00:00.000Z',
            }
            const array = [json, json]
            const result = [result_json, result_json];

            expect(camel.jsonKeyToLowerCamel(array)).to.deep.equal(result);
        })
    })
})
