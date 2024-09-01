import {Http} from "@/utils/httpUtils";
import {useMutation} from "@tanstack/react-query";
import {useEffect} from "react";

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
        if (!user) return await Http.error();
        return await Http.post(`auth/currentUser`, {username: user.username});
    }

    public static set(user: any) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    public static get() {
        return JSON.parse(localStorage.getItem('user'));
    }

    public static clear() {
        localStorage.removeItem('user');
    }
}
