import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    // Email and Password Login (Strapi)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: { label: "Username or Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.identifier || !credentials?.password) {
          return null;
        }

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                identifier: credentials.identifier,
                password: credentials.password,
              }),
            }
          );

          if (!res.ok) {
            return null; // Authentication failed
          }

          const user = await res.json();

          if (!user?.user?.confirmed) {
            throw new Error("Please confirm your email before logging in.");
          }

          return {
            email: user.user.email,
            id: user.user.id,
            username: user.user.username,
          }; // Successful authentication
        } catch (error) {
          console.error("Error during Strapi login:", error);
          throw new Error(error?.message || "Invalid credentials."); // Throw an error to display on the login page
        }
      },
    }),

    // Google Authentication
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        if (account.provider === "google") {
          try {
            // Connect with Strapi
            const strapiRes = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/${account.provider}/callback?access_token=${account?.access_token}`, {
              method: "GET",
            });
            const strapiData = await strapiRes.json();

            token.jwt = strapiData.jwt;
            token.id = strapiData.user.id;
          } catch (error) {
            console.error("Error in Google authentication:", error);
          }
        }
      }
      return token;
    },

    async session({ session, token }) {
      session.jwt = token.jwt;
      session.id = token.id;
      return session;
    },

    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        return true; // Allow Google sign in
      }
      return true;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/auth/signin", // Path to your login page
    // You can add a custom registration page if needed:
    signUp: "/auth/register",
  },
};

export default authOptions;
