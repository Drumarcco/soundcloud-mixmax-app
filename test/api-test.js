const chai = require('chai'),
    expect = chai.expect,
    chaiHttp = require('chai-http'),
    server = require('../server');

chai.use(chaiHttp);

describe('GET /resolver', () => {
    const VALID_LINK = 'soundcloud.com/youngthegiant/mind-over-matter';
    const VALID_RESPONSE = { 
        body: "<iframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F128278460&show_artwork=true\"></iframe>" 
    };
    var getRequest;

    beforeEach(() => {
        getRequest = chai.request(server).get('/resolver');
    });

    describe('with http(s) prefix on url', () => {
        it('should respond with soundcloud embed code', (done) => {
            getRequest.query({ url: 'http://' + VALID_LINK })
                .end((err, res) => {
                    endCallback(err, res, done);
                });
        });
    });

    describe('with no http(s) prefix', () => {
        it('should respond with soundcloud embed code', (done) => {
            getRequest.query({ url: VALID_LINK })
                .end((err, res) => {
                    endCallback(err, res, done);
                });
        })
    });

    function endCallback(err, res, done) {
        expect(res).to.have.status(200);
        expect(res).to.include.keys('body');
        expect(res.body).to.deep.equal(VALID_RESPONSE);
        done();
    }
});
