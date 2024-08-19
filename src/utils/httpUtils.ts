export class Http {

    public static mainUrl: string = 'http://localhost:8080/api/';

    public static async post(url: string, body: any) {
        return await this.http(url, 'POST', body);
    }

    public static async get(url: string) {
        return await this.http(url, 'GET');
    }

    public static async delete(url: string) {
        return await this.http(url, 'DELETE');
    }

    public static async put(url: string, body: any) {
        return await this.http(url, 'PUT', body);
    }

    private static async http(url: string, methode: 'POST' |'GET' | 'DELETE' | 'PUT', body?: any) {
        return await fetch(Http.mainUrl + url, {
            method: methode,
            body: body,
            credentials: 'include'
        }).then(res => res.json());
    }
}