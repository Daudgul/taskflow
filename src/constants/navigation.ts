import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Calendar,
  Settings,
} from "lucide-react";

type NavigationItem = {
  label: string;
  path: string;
  icon: LucideIcon;
};

export const navigationItems: NavigationItem[] = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    path: "/projects",
    icon: FolderKanban,
  },
  {
    label: "My Tasks",
    path: "/tasks",
    icon: CheckSquare,
  },
  {
    label: "Calendar",
    path: "/calendar",
    icon: Calendar,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];
