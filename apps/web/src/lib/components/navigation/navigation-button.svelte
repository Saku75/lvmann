<script lang="ts">
  import Menu from "@lucide/svelte/icons/menu";
  import X from "@lucide/svelte/icons/x";

  import { LayoutMenuContent } from "$lib/enums/layout.menu-content";
  import { layoutStore } from "$lib/stores/layout.svelte";
  import cn from "$lib/utils/cn";

  import { linkColor } from "./utils/link.color";

  interface Props {
    class?: string;
  }

  const { class: classes }: Props = $props();
</script>

<button
  class={cn(linkColor, "w-12 cursor-pointer justify-center", classes)}
  aria-label={layoutStore.menu.open
    ? "Close navigation menu"
    : "Open navigation menu"}
  onclick={() => layoutStore.menu.toggle(LayoutMenuContent.Navigation)}
>
  {#if layoutStore.menu.open && layoutStore.menu.content === LayoutMenuContent.Navigation}
    <X class="h-8 w-8" />
  {:else}
    <Menu class="h-7 w-7" />
  {/if}
</button>
