import cn from "$lib/utils/cn";

const linkColor = cn(
  "flex items-center gap-1 transition-colors",
  "text-stone-600 hover:text-stone-800 focus:text-stone-800 active:text-stone-950",
  "hover:bg-stone-200/50 focus:bg-stone-200/50 active:bg-stone-300/50",
  "dark:text-stone-400 dark:hover:text-stone-200 dark:focus:text-stone-200 dark:active:text-stone-50",
  "dark:hover:bg-stone-800/50 dark:focus:bg-stone-800/50 dark:active:bg-stone-700/50",
);

const linkColorActive = cn(
  linkColor,
  "text-red-600 hover:text-red-800 focus:text-red-800 active:text-red-950",
  "hover:bg-red-200/50 focus:bg-red-200/50 active:bg-red-300/50",
  "dark:text-red-400 dark:hover:text-red-200 dark:focus:text-red-200 dark:active:text-red-50",
  "dark:hover:bg-red-800/50 dark:focus:bg-red-800/50 dark:active:bg-red-700/50",
);

export { linkColor, linkColorActive };
