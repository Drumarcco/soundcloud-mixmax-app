var chai = require('chai'),
    expect = chai.expect;
require('../utils/string.prototype');

describe('string prototype function', () => {
    describe('hasHttpPrefix', () => {
        it('should return true for a url with http prefix', () => {
            const url = 'http://soundcloud.com/youngthegiant/mind-over-matter';
            expect(url.hasHttpPrefix()).to.equal(true);
        });

        it('should return true for a url with https prefix', () => {
            const url = 'https://soundcloud.com/youngthegiant/mind-over-matter';
            expect(url.hasHttpPrefix()).to.equal(true);
        });

        it('should return false for a url with no http(s) prefix', () => {
            const url = 'soundcloud.com/youngthegiant/mind-over-matter';
            expect(url.hasHttpPrefix()).to.equal(false);
        });
    });
});
