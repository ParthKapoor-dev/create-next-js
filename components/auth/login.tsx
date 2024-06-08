import Link from "next/link";
import { Icons } from "../Icons";
import UserAuthForm from "./UserAuthForm";

export default function LoginComponent() {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      
      <div className="flex flex-col space-y-2 text-center">
        <Icons.nextLogo className="h-4" />
        <h1 className="text-2xl font-semibold tracking-light">Welcome Back</h1>

        <UserAuthForm />

        <p className="px-8 text-center text-sm text-zinc-700">
          Haven't Joined the party yet ?{" "}
          <Link href={"/signup"} className="hover:text-zinc-800 text-sm underline underline-offset-4">
            Sign Up
          </Link>
        </p>
      </div>
    
    </div>
  )
}