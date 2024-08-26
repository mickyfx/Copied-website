import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Head from "next/head";
import "./globals.css";
import React from "react";
import Script from "next/script";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Copied – Smart keyboard – Copied – Smart keyboard",
    description: "Copied",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
                rel="stylesheet"
            />
            <noscript>
                <img height="1" width="1" style={{display: "none"}}
                src="https://www.facebook.com/tr?id=7722995224406373&ev=PageView&noscript=1"
                /></noscript>
        </Head>
        <body className={inter.className}>
        {children}
        </body>
        <Script id='fb-pixel' strategy='afterInteractive' dangerouslySetInnerHTML={{__html:` 
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '7722995224406373');
        fbq('track', 'PageView');`}}/>
        </html>
    );
}
