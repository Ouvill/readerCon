const app = require('../app');
const expect = require("chai").expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
// const request = require('request');
// const rp = require("request-promise");

describe('contest', function () {
    chai.use(chaiHttp);

    describe('POST /api/contests/create', function () {
        it('return status 400', function (done) {
            const url = '/api/contests/create'
            chai.request(app).post(url)
                .send(JSON.stringify({

                })).end(function (err, res) {
                    expect(res).to.have.status(400);
                    done();
                });
        });

        it('return status 200', function (done) {
            const url = '/api/contests/create'
            const body = {
                title: "タイトル",
                overview: 'あらすじ',
                entryPeriod: '2018-05-12 00:00:00',
                startContestAt: '2018-05-12 00:00:00',
                contestPeriod: '2018-05-13 00:00:00'
            };
            chai.request(app)
                .post(url)
                .send(body)
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });
});
