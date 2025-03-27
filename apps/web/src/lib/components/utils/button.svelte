<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  import cn from "$lib/utils/cn";

  interface ButtonProps {
    purpose: "button";
    type: HTMLButtonAttributes["type"];
  }
  interface LinkProps {
    purpose: "link";
    href: string;
  }

  type Props = (LinkProps | ButtonProps) & {
    children: Snippet;
    class?: string;
  };

  const props: Props = $props();

  const buttonClasses = cn(
    "flex cursor-pointer items-center justify-center gap-1 rounded border px-2 py-1 transition-colors",
    "border-red-400",
    "text-red-700 hover:text-red-800 focus:text-red-800 active:text-red-950",
    "bg-red-100 hover:bg-red-200 focus:bg-red-200 active:bg-red-300",
    "dark:border-red-600",
    "dark:text-red-300 dark:hover:text-red-200 dark:focus:text-red-200 dark:active:text-red-50",
    "dark:bg-red-900 dark:hover:bg-red-800 dark:focus:bg-red-800 dark:active:bg-red-700",
    props.class,
  );
</script>

{#if props.purpose === "button"}
  <button class={buttonClasses} type={props.type}
    >{@render props.children()}</button
  >
{:else if props.purpose === "link"}
  <a class={buttonClasses} href={props.href}>{@render props.children()}</a>
{/if}
