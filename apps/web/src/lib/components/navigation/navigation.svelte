<script lang="ts">
  import { navigationStore } from "$lib/stores/navigation.svelte";
  import cn from "$lib/utils/cn";

  import { linkColors } from "./utils/link.colors";

  interface Props {
    type?: "list" | "bar";
  }

  const { type = "list" }: Props = $props();
</script>

<nav
  class={cn({
    "flex flex-col gap-2": type === "list",
    contents: type === "bar",
  })}
>
  {#each navigationStore as items, i}
    <ul
      class={cn("flex", {
        "flex-col": type === "list",
      })}
    >
      {#each items as { text, href, Icon }}
        <li class="contents">
          <a
            {href}
            class={cn(linkColors, "px-4", {
              "justify-center gap-1.5 py-1 text-xl": type === "list",
            })}
          >
            {#if Icon}
              <Icon
                class={cn({
                  "h-6 w-6": type === "list",
                  "h-5 w-5": type === "bar",
                })}
              />
            {/if}
            {text}
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
