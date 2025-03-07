import type { IconEvents, IconProps } from "lucide-svelte";
import type { SvelteComponent } from "svelte";

type NavigationItem = {
  text: string;
  href: string;
  Icon?: typeof SvelteComponent<IconProps, IconEvents, object>;
};

type NavigationStore =
  | [NavigationItem[]]
  | [NavigationItem[], NavigationItem[]];

const navigationStore = $state<NavigationStore>([
  [
    { text: "Home", href: "/" },
    { text: "Blog", href: "/blog" },
  ],
]);

export { navigationStore };
