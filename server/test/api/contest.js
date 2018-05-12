const app = require('../../app');
const expect = require("chai").expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
const jwt = require('jsonwebtoken');
// const request = require('request');
// const rp = require("request-promise");

describe('/api/contests', function () {
    chai.use(chaiHttp);

    describe('GET /api/contests/', () => {
        const url = '/api/v1/contests'
        it('return status 200', (done) => {
            chai.request(app)
                .get(url)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                })
        });
    });

    describe('GET /api/contests/entryAccepting', () => {
        const url = '/api/v1/contests/entryAccepting'
        it('return status 200', (done) => {
            chai.request(app)
                .get(url)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                })
        });
    });

    describe('GET /api/contests/voteAccepting', () => {
        const url = '/api/v1/contests/voteAccepting'
        it('return status 200', (done) => {
            chai.request(app)
                .get(url)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                })
        });
    });

    describe('GET /api/contests/pastContests', () => {
        const url = '/api/v1/contests/pastContests'
        it('return status 200', (done) => {
            chai.request(app)
                .get(url)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                })
        });
    });

    describe('GET /api/v1/contests/1', () => {
        it('return status 400', (done) => {
            const url = '/api/v1/contests/hoge'
            chai.request(app)
                .get(url)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    done();
                })
        });

        it('return status 200', (done) => {
            const url = '/api/v1/contests/1'
            chai.request(app)
                .get(url)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.all.keys('result', 'message', 'contest');
                    done();
                });
        })

        it('return status 404', (done) => {
            const url = '/api/v1/contests/1000'
            chai.request(app)
                .get(url)
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    expect(res.body).to.have.all.keys('result', 'message')
                    done();
                });
        })
    })

    describe('GET /api/v1/contests/:contestId/novels/:novelId', () => {
        it('return status 400', (done) => {
            let url = '/api/v1/contests/1/novels/hou'
            chai.request(app)
                .get(url)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                });
            url = '/api/v1/contests/hoge/novels/hou'
            chai.request(app)
                .get(url)
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    done();
                });
        });

        it('return status 200', (done) => {
            const url = '/api/v1/contests/1/novels/1'
            chai.request(app)
                .get(url)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.all.keys('result', 'message', 'contest')
                    expect(res.body.contest).to.include.keys('novel')
                    expect(res.body.contest.novel).to.include.keys('title', 'overview', 'chapters')
                    expect(res.body.contest.novel).to.not.include.keys('author');
                    done();
                });
        })

        it('return author', (done) => {
            const url = '/api/v1/contests/3/novels/3'
            chai.request(app)
                .get(url)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.all.keys('result', 'message', 'contest')
                    expect(res.body.contest).to.include.keys('novel')
                    expect(res.body.contest.novel).to.include.keys('title', 'overview', 'chapters', 'author');
                    done();
                });

        })

    })

    describe('POST /api/contests/create', function () {
        describe('unauthorized', function () {

        })

        describe('authorized', function () {
            let token = {}
            before(function () {
                const userId = 45
                token = jwt.sign({
                    userId,
                    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7
                }, process.env.JWT_KEY)
            });

            it('return status 400', function (done) {
                const url = '/api/v1/contests/create'
                const body = {
                    token: token
                }
                chai.request(app).post(url)
                    .send(body)
                    .end(function (err, res) {
                        expect(res).to.have.status(400);
                        done();
                    });
            });

            it('return status 200', function (done) {
                const url = '/api/v1/contests/create'
                const body = {
                    title: "タイトル",
                    overview: 'あらすじ',
                    entryPeriod: '2018-05-12 00:00:00',
                    startContestAt: '2018-05-12 00:00:00',
                    contestPeriod: '2018-05-13 00:00:00',
                    token: token
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
});
