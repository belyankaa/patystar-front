import {Http} from "@/utils/httpUtils";

export class UserService {

    public static async getData() {
        return await Http.get('auth');
    }

    public static async login(body: any) {
        return await Http.post('login', body);
    }

    public static async signUp(body: any) {
        return await Http.post('signUp', body);
    }

    public static async logout(id: number) {
        return await Http.get(`logout/${id}`);
    }

    public static async currentUser() {
        return await Http.get(`currentUser`);
    }

    public static async checkUserName(body: any) {
        return await Http.post(`checkUsername`, body);
    }
}
