'use client'

import "./globals.scss";
import React, {useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    const [queryClient] = useState(() => new QueryClient());

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
