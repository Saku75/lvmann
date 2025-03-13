<script lang="ts">
  import ExternalLink from "@lucide/svelte/icons/external-link";

  import { page } from "$app/state";

  import { navigationStore } from "$lib/stores/navigation.svelte";
  import cn from "$lib/utils/cn";

  import { linkColor, linkColorActive } from "./utils/link.color";

  interface Props {
    type?: "list" | "bar";
  }

  const { type = "list" }: Props = $props();
</script>

<nav
  class={cn("flex justify-between gap-2", {
    "flex-col": type === "list",
  })}
>
  {#each navigationStore as items, i}
    <ul
      class={cn("flex", {
        "flex-col": type === "list",
      })}
    >
      {#each items as { text, href, target, Icon }}
        <li class="contents">
          <a
            {href}
            {target}
            class={cn(
              linkColor,
              page.url.pathname === href && linkColorActive,
              "px-4 font-heading",
              {
                "justify-center gap-1 py-1 text-xl": type === "list",
                "gap-0.5 text-lg": type === "bar",
              },
            )}
          >
            {#if Icon}
              <Icon
                class={cn({
                  "h-5.5 w-5.5": type === "list",
                  "h-4.5 w-4.5": type === "bar",
                })}
              />
            {/if}
            {text}
            {#if href.startsWith("http://") || href.startsWith("https://")}
              <ExternalLink
                class={cn("h-3.5 w-3.5", {
                  "h-4.5 w-4.5": type === "list",
                  "h-3.5 w-3.5": type === "bar",
                })}
              />
            {/if}
          </a>
        </li>
      {/each}
    </ul>
    {#if type === "list" && i !== navigationStore.length - 1}
      <hr
        class="w-full max-w-16 self-center border-t border-stone-400 dark:border-stone-600"
      />
    {/if}
  {/each}
</nav>
