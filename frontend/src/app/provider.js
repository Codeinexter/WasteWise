"use client"

import { SessionProvider } from "next-auth/react"
import Header from "../components/Header"

export function Providers({children}){
    return<SessionProvider>
        <Header/>
        {children}
    </SessionProvider>
}