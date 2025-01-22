import NextAuth from "next-auth";
import authOptions from "@/app/auth.config"; // Path to your auth.config.js

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };