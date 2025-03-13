<script lang="ts">
  import type { Snippet } from "svelte";
  import { slide } from "svelte/transition";

  import { beforeNavigate } from "$app/navigation";

  import { LayoutMenuContent } from "$lib/enums/layout.menu-content";
  import { LayoutSize } from "$lib/enums/layout.size";
  import { layoutStore } from "$lib/stores/layout.svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  $effect(() => {
    if (
      layoutStore.size.width &&
      layoutStore.size.width > LayoutSize.Medium &&
      layoutStore.menu.content === LayoutMenuContent.Navigation
    ) {
      layoutStore.menu.open = false;
    }
  });

  beforeNavigate(() => {
    layoutStore.menu.open = false;
  });
</script>

{#if layoutStore.menu.open}
  <div
    class="fixed top-12 z-35 w-full border-b border-stone-400 bg-stone-100/50 backdrop-blur dark:border-stone-600 dark:bg-stone-900/50"
  >
    <div transition:slide={{ duration: 500 }}>
      <div class="max-h-[calc(100vh-3rem)] py-2">
        {@render children()}
      </div>
    </div>
  </div>
{/if}
