import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      accessToken: string;
      name: string;
      phone: string;
      username: string;
      password: string;
      role: "Admin" | "User" | "PendingUser";
      invoices: Invoice[];
      createdAt: Date;
    };
  }
}
