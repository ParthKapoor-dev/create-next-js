import { signIn } from "next-auth/react";

export async function GoogleSignIn() {
  try {
    await signIn("google");
  } catch (err) {
    throw new Error(err.message);
  }
}