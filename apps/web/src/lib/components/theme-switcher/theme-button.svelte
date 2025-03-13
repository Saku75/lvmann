<script lang="ts">
  import Moon from "@lucide/svelte/icons/moon";
  import Sun from "@lucide/svelte/icons/sun";
  import SunMoon from "@lucide/svelte/icons/sun-moon";
  import X from "@lucide/svelte/icons/x";
  import { onMount } from "svelte";

  import { LayoutMenuContent } from "$lib/enums/layout.menu-content";
  import { LayoutTheme } from "$lib/enums/layout.theme";
  import { layoutStore } from "$lib/stores/layout.svelte";
  import cn from "$lib/utils/cn";

  import { linkColor } from "../navigation/utils/link.color";

  interface Props {
    class?: string;
  }

  const { class: classes }: Props = $props();

  $effect(() => {
    if (layoutStore.theme != LayoutTheme.System) {
      document.documentElement.dataset.theme = layoutStore.theme;
      document.cookie = `theme-preference=${layoutStore.theme}; SameSite=Strict; Secure; Path=/`;
    } else {
      document.documentElement.dataset.theme = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches
        ? LayoutTheme.Dark
        : LayoutTheme.Light;
      document.cookie =
        "theme-preference=; SameSite=Strict; Secure; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  });

  onMount(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        console.log(layoutStore.theme);
        if (layoutStore.theme === LayoutTheme.System)
          document.documentElement.dataset.theme = event.matches
            ? LayoutTheme.Dark
            : LayoutTheme.Light;
      });
  });
</script>

<button
  class={cn(linkColor, "w-12 cursor-pointer justify-center", classes)}
  aria-label={layoutStore.menu.open ? "Close theme menu" : "Open theme menu"}
  onclick={() => layoutStore.menu.toggle(LayoutMenuContent.Theme)}
>
  {#if layoutStore.menu.open && layoutStore.menu.content === LayoutMenuContent.Theme}
    <X class="h-8 w-8" />
  {:else}
    {#if layoutStore.theme === LayoutTheme.System}
      <SunMoon class="h-7 w-7" />
    {/if}
    {#if layoutStore.theme === LayoutTheme.Light}
      <Sun class="h-7 w-7" />
    {/if}
    {#if layoutStore.theme === LayoutTheme.Dark}
      <Moon class="h-7 w-7" />
    {/if}
  {/if}
</button>
