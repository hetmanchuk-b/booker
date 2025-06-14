import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/lib/db";

export const {
  handlers,
  signIn,
  signOut,
  auth,
  unstable_update: update,
} = NextAuth({
  providers: [Google],
  adapter: PrismaAdapter(prisma)
})