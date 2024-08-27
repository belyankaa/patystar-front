'use client'

import "./globals.scss";
import React, {useEffect} from "react";
import {QueryCache, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {UserService} from "@/services/user.service";
import {useRouter} from "next/navigation";

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();

    const queryClient = new QueryClient({
        queryCache: new QueryCache({
            onError: async (error) => {
                if (error.status === 403) router.push('/auth/login');
            },
        }),
    })

    useEffect(() => {
        UserService.currentUser().catch(e => {
            if (location.pathname === '/auth/sign-up') return;
            router.push('/auth/login')
        });
    }, []);

    return (
        <html lang="en">
        <body>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </body>
        </html>
    );
}
