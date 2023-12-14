import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials"; "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
    providers: [
        Credentials({
            credentials: {
                email: { label: 'email', type: 'email', required: true },
                password: { label: 'password', type: 'password', required: true }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null
                if (credentials.email === 'user@email.com' && credentials.password === 'admin') {
                    return {
                        email: credentials.email
                    } as User
                }
                return null
            }
        })
    ],
    pages: {
        signIn: '/login'
    }
}