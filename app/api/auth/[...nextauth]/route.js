import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import RefugioCredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'jsmith@hotmail.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/${credentials.refOrUser}/login`,
          {
            method: 'POST',
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password
            }),
            headers: { 'Content-Type': 'application/json' }
          }
        )
        const user = await res.json()
        if (user.msg) {
          const error = user.msg
          throw new Error(error)
        }
        return { user, credentials }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      return { ...session, ...token }
    }
  },
  pages: {
    signIn: '/login'
  }
})

export { handler as GET, handler as POST }
