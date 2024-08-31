import NextAuth from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import type { Session } from 'next-auth'

export interface SessionType extends Session {
  accessToken: string
  socialId?: string
}

type HandlerType = (...args: any) => any

const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }

      return token
    },
    session({ session, token }) {
      const newSession: SessionType = {
        ...session,
        accessToken: token.accessToken as string,
        socialId: token.sub,
      }

      return newSession
    },
  },
  session: {
    maxAge: 24 * 60 * 30, // 12 hours
  },
  secret: process.env.AUTH_SECRET,
}) as HandlerType

export { handler as GET, handler as POST }
