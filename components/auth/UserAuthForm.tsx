import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface UserAuthInterface extends React.HTMLAttributes<HTMLDivElement>{}

export default function UserAuthForm({ className , ...props } : UserAuthInterface)  {
  return (
    <div className={cn("flex justify-center" , className)}>
      <Button> 
        Google 
      </Button>
    </div>
  )
}