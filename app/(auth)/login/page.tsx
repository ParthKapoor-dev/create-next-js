import LoginComponent from "@/components/auth/login";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20 ">

      <LoginComponent/>

      <Link href="/" className={cn(buttonVariants({variant : 'ghost'}))}>
        Back to Home Page
      </Link>

    </div>
  )
}