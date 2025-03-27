import type { Icon } from "@lucide/svelte";
import House from "@lucide/svelte/icons/house";
import Library from "@lucide/svelte/icons/library";
import Send from "@lucide/svelte/icons/send";
import type { HTMLAttributeAnchorTarget } from "svelte/elements";

import Github from "$lib/components/icons/github.svelte";

type NavigationItem = {
  text: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  Icon?: typeof Icon;
};

type NavigationStore =
  | [NavigationItem[]]
  | [NavigationItem[], NavigationItem[]];

const navigationStore = $state<NavigationStore>([
  [
    { text: "Home", href: "/", Icon: House },
    { text: "Blog", href: "/blog", Icon: Library },
    { text: "Contact", href: "/contact", Icon: Send },
  ],
  [
    {
      text: "Github",
      href: "https://github.com/Saku75",
      target: "_blank",
      Icon: Github,
    },
  ],
]);

export { navigationStore };
