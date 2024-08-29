export class Http {

    public static staticPath: string = 'http://localhost:8080/';
    public static mainUrl: string = this.staticPath + 'api/';
    public static eventPreview: string = this.staticPath + 'eventPrev';

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

    private static async http(url: string, methode: 'POST' | 'GET' | 'DELETE' | 'PUT', body?: any) {
        const data = new FormData();

        let result: any = null;

        if (body) {
            for (let key in body) {
                data.append(key, body[key]);
            }

            result = await fetch(Http.mainUrl + url, {
                method: methode,
                body: data,
                credentials: 'include'
            } as any);
        } else {
            result = await fetch(Http.mainUrl + url, {
                method: methode,
                credentials: 'include'
            } as any);
        }

        if (result.status !== 403 ) return result.json();

        return new Promise((resolve, reject) => {
            reject(result);
        })
    }

    public static async error() {
        return new Promise((resolve, reject) => {
            reject('error');
        })
    }
}