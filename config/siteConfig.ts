export const SiteConfig = {
  name: "Canaan Advisors",
  url: "localhost:3000",
  ogImage: null,
  description: "Software development support for your business",
  links: {
    facebook: "",
    linkedin: "",
  },
};
export type SiteConfig = typeof SiteConfig;
import { MainNavItem } from "@/types/nav";

interface NavConfig {
  mainNav: MainNavItem[];
}
export const NavigationLink: NavConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/",
    },
    {
      title: "Services",
      href: "/",
    },
    {
      title: "Contact",
      href: "/",
    },
    {
      title: "Business Incubation",
      href: "/",
    },
  ],
};
