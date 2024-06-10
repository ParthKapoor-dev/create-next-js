import { CreditCard, LogOut, Mail, MessageSquare, Settings, User, UserPlus, Users } from "lucide-react";

const iconClassName = "mr-2 h-4 w-4";

interface itemInterface {
  title: string
  icon: any
  shortcut?: string
}

export interface UserNavInterface {
  label?: boolean;
  title?: string;
  separator?: boolean;
  icon?: any;
  shortcut?: string;
  triggerTitle?: string;
  triggerIcon?: any;
  subItems?: itemInterface[]
}


export default function userNavData(name: string, email: string) {

  return (
    [
      callLabel(name),
      separator(),
      item("Profile", <User className={iconClassName} />, "⇧⌘P"),
      item("Billing", <CreditCard className={iconClassName} />, "⌘B"),
      item("Settings", <Settings className={iconClassName} />, "⌘S"),

      separator(),
      item("Teams", <Users className={iconClassName} />),
      subMenu("Invite Users", <UserPlus className={iconClassName} />, [
        {
          title: "Email",
          icon: <Mail className={iconClassName} />,
        },
        {
          title: "Message",
          icon: <MessageSquare className={iconClassName} />
        }
      ]),

      separator(),
      item("Log out", <LogOut className={iconClassName} />, "⇧⌘Q"),
    ])
}
function callLabel(title: string) {
  return {
    label: true,
    title
  }
}

function separator() {
  return {
    separator: true
  }
}


function item(title: string, icon: any, shortcut?: string) {
  return {
    title,
    icon,
    shortcut
  }
}

function subMenu(triggerTitle: string, triggerIcon: any, subItem: itemInterface[]) {

  const subItems = subItem.map(data => item(data.title, data.icon, data.shortcut))

  return {
    triggerTitle,
    triggerIcon,
    subItems
  }
}