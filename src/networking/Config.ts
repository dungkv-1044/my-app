export class API {
    url: string;
    method: string;
    constructor(url: string, method: 'post' | 'get' | 'put' | 'delete') {
        this.url = url;
        this.method = method;
    }
}
/**
 * Declare apis usage in project
 * */
export default {
    BASE: "https://5f487c7257a10f001600daad.mockapi.io/api/",
    API: {
        Products: new API('data', 'get'),
        Login: new API('login', "post")
    },
};
