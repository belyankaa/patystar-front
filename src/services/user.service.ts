import {Http} from "@/utils/httpUtils";
import {useMutation, useQuery} from "@tanstack/react-query";

export class UserService {

    public static useLoginMutation() {
        return useMutation({
            mutationFn: (body: any) => Http.post('auth/login', body)
        })

    }

    public static useSignUpMutation() {
        return useMutation({
            mutationFn: (body: any) => Http.post('auth/signUp', body)
        })
    }

    public static useLogoutMutation() {
        return useMutation({
            mutationFn: (id: number) => Http.get(`auth/logout/${id}`)
        })
    }

    public static useCheckUserNameMutation() {
        return useMutation({
            mutationFn: (username: string) => Http.post(`auth/checkUsername`, {username})
        })
    }

    public static async currentUser() {
        const user = this.get();
        if (!user || (user && !user.username)) return await Http.error();
        return await Http.post(`auth/currentUser`, {username: user.username});
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
