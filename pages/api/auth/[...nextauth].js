// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

// Path to users.json
const usersFilePath = path.join(process.cwd(), "users.json");

// Helper to read users from file
function getUsers() {
  if (!fs.existsSync(usersFilePath)) {
    // Create empty array if file doesn't exist
    fs.writeFileSync(usersFilePath, JSON.stringify([]));
    return [];
  }
  const data = fs.readFileSync(usersFilePath, "utf8");
  return JSON.parse(data);
}

// Helper to write users array to file
function setUsers(users) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Credentials provider for email/password
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const users = getUsers();

        // Find user by email
        const user = users.find(u => u.email === email);
        if (!user) {
          // No user found
          throw new Error("No account found with this email");
        }

        // Check password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
          throw new Error("Invalid password");
        }

        // Return user object (without password)
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          // You can add other fields like role, image, etc.
        };
      }
    })
  ],
  // Optional: database for persisting sessions
  // database: process.env.DATABASE_URL,
  secret: process.env.NEXTAUTH_SECRET,
  // Optional: customize session
  session: {
    strategy: "jwt",
  },
  // Optional: pages for custom sign-in/sign-up
  pages: {
    signIn: "/login", // Use custom login page
    // signUp: "/register", // If you want a custom sign-up page
  },
  // Optional: callbacks
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
      }
      return session;
    }
  }
};

export default NextAuth(authOptions);
