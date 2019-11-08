export class Sfs {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    completeUrl = (src) => {
        return !src
            ? null
            : /^(https?:)?\/\//.test(src)
                ? src
                : (this.baseUrl + src);
    }
}