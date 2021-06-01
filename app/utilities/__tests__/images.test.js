import {getUrl} from '../images';

test('should verify that gets correct url path', () => {
    const url = "/uCmwgSbJAcHqNwSvQvTv2dB95tx.jpg"
    expect(getUrl(url)).toBe("http://image.tmdb.org/t/p/w500" + url);
});

test('should verify that gets correct url path', () => {
    const url = "/https://secure.gravatar.com/avatar/uCmwgSbJAcHqNwSvQvTv2dB95tx.jpg"
    const newUrl = url.substring(1);
    expect(getUrl(url)).toBe(newUrl);
});

test('should verify that null path returns null', () => {
    const url = null
    expect(getUrl(url)).toBe(null);
});

