import Link from "next/link";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">

        <Link href={"/"} className="flex gap-4 items-center">
          <Icons.nextLogo className="h-4"/>
          <p className="hidden text-zinc-700 text-lg font-medium md:block">
            Create Next JS 
          </p>
        </Link>

        <Link href={"/login"} className={cn(buttonVariants())}>
          Login
        </Link>
      </div>
    </div>
  )
}