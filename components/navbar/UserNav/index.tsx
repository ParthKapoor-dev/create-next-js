"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { User } from "next-auth"
import UserAvatar from "../../ui/UserAvatar"
import { User as UserIcon } from "lucide-react";
import userNavData, { UserNavInterface } from "./UserNavData";


interface UserNavProps {
  user: Pick<User, 'name' | 'image' | 'email'>
}

export default function UserNav({ user }: UserNavProps) {

  const UserNavData : UserNavInterface[] = userNavData(user.name || "My Account", user.email || "user@mail.com");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar className="h-10 w-10"
          user={{
            name: user.name || null,
            image: user.image || null
          }} />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">

        {UserNavData.map(item => {

          if (item?.label)
            return <DropdownMenuLabel>{item.title}</DropdownMenuLabel>


          if (item.separator)
            return <DropdownMenuSeparator />

          if (item.triggerTitle)
            return (
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  {item.triggerIcon}
                  <span> {item.triggerTitle} </span>
                </DropdownMenuSubTrigger>

                <DropdownMenuPortal>
                  <DropdownMenuSubContent>

                    {item.subItems?.map(data => (
                      <DropdownMenuItem>
                        {data.icon}
                        <span> {data.title} </span>
                        {data?.shortcut && (
                          <DropdownMenuShortcut> {item.shortcut} </DropdownMenuShortcut>
                        )}
                      </DropdownMenuItem>

                    ))}

                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            )

          return (
            <DropdownMenuItem>
              {item.icon}
              <span> {item.title} </span>
              {item?.shortcut && (
                <DropdownMenuShortcut> {item.shortcut} </DropdownMenuShortcut>
              )}
            </DropdownMenuItem>
          )
        })}

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
