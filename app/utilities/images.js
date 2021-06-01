export const getUrl = (src) => {
    if (src) {
        if (src.includes("/https://secure.gravatar.com/avatar")) {
            const newSrc = src.substring(1);
            return newSrc;
        }
        else {
            return "http://image.tmdb.org/t/p/w500" + src;
        }
    }
    else {
        return null;
    }
}