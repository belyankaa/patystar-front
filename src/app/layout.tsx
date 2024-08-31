'use client'

import "./globals.scss";
import React, {useEffect, useState} from "react";
import {QueryCache, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {UserService} from "@/services/user.service";
import {usePathname, useRouter} from "next/navigation";
import Navigation from "@/layout/navigation/Navigation";
import LeftSidebar from "@/layout/leftSideBar/LeftSidebar";
import Bottombar from "@/layout/bottomBar/Bottombar";

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isNavHidden, isNavHiddenChange] = useState(false);

    const hiddenNavPaths = ['/auth', '/events/'];

    const router = useRouter();

    const queryClient = new QueryClient({
        queryCache: new QueryCache({
            onError: async (error) => {
                if (location.pathname !== '/auth/login' && location.pathname !== '/auth/sign-up'
                    && error.status === 403) {

                    router.push('/auth/login');
                    if (UserService.get()) UserService.clear();
                }
            },
        }),
    })

    useEffect(() => {
        UserService.currentUser().catch(e => {
            if (UserService.get()) UserService.clear();
            if (location.pathname === '/auth/login' || location.pathname === '/auth/sign-up') return;

            router.push('/auth/login');
        });
    }, []);

    const pathname = usePathname();

    useEffect(() => {
        isNavHiddenChange(hiddenNavPaths.some(item => pathname.includes(item)));
    }, [pathname]);

    return (
        <html lang="en">
            <body id="body">
                <QueryClientProvider client={queryClient}>
                    {!isNavHidden && <LeftSidebar/>}
                    <main className={'main ' + (!isNavHidden ? 'extraSpaceMain' : '')}>{children}</main>
                    {!isNavHidden && <Bottombar/>}
                </QueryClientProvider>
            </body>
        </html>
    );
}
