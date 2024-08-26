import {Http} from "@/utils/httpUtils";

export class UserService {

    public static async login(body: any) {
        return await Http.post('auth/login', body);
    }

    public static async signUp(body: any) {
        return await Http.post('auth/signUp', body);
    }

    public static async logout(id: number) {
        return await Http.get(`auth/logout/${id}`);
    }

    public static async currentUser() {
        const user = this.get();
        if (!user || (user && !user.username)) return await Http.error();
        return await Http.post(`auth/currentUser`, {username: user.username});
    }

    public static async checkUserName(body: any) {
        return await Http.post(`auth/checkUsername`, body);
    }

    public static set(username: string) {
        const data = {username};
        localStorage.setItem('user', JSON.stringify(data));
    }

    public static get() {
        return JSON.parse(localStorage.getItem('user'));
    }

    public static clear() {
        localStorage.removeItem('user');
    }
}
