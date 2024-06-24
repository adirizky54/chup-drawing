import type { IconName } from "~/components/ui/Icon/Icon.props";

export type SidebarMenu = {
  key: string;
  url: string;
  title: string;
  icon: IconName;
  iconActive?: IconName;
};

export const MENU: Array<SidebarMenu> = [
  {
    key: "user.marketing.index",
    url: "/",
    title: "Marketing",
    icon: "i-ph-megaphone-fill",
  },
];
