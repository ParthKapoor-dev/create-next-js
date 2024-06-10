"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { User } from "next-auth"
import UserAvatar from "../ui/UserAvatar"

interface UserNavProps {
  user: Pick<User, 'name' | 'image' | 'email'>
}

export default function UserNav({ user }: UserNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar className="h-10 w-10"
          user={{
            name: user.name || null,
            image: user.image || null
          }} />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">

            {user.name && <p className="font-medium" >
              {user.name}
            </p>}

            {user.email && <p className="w-[200px] truncate text-sm text-zinc-700" >
              {user.email}
            </p>}
          </div>
        </div>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}