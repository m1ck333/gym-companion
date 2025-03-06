import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectToDatabase();

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        // Find user by email
        const user = await User.findOne({ email: credentials.email });
        if (!user) throw new Error("No user found");

        // Compare passwords
        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isMatch) throw new Error("Incorrect password");

        return { id: user._id.toString(), name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        (session.user as { id: string }).id = token.sub as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
