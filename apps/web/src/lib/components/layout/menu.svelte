<script lang="ts">
  import type { Snippet } from "svelte";
  import { slide } from "svelte/transition";

  import { beforeNavigate } from "$app/navigation";

  import { LayoutSize } from "$lib/enums/layout.size";
  import { layoutStore } from "$lib/stores/layout.svelte";

  import CenterContent from "../utils/center-content.svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  $effect(() => {
    if (layoutStore.size.width && layoutStore.size.width > LayoutSize.Medium) {
      layoutStore.menu.open = false;
    }
  });

  beforeNavigate(() => {
    layoutStore.menu.open = false;
  });
</script>

{#if layoutStore.menu.open}
  <div
    class="fixed top-12 w-screen border-b border-stone-400 bg-stone-100/50 backdrop-blur dark:border-stone-600 dark:bg-stone-900/50"
  >
    <div transition:slide={{ duration: 500 }}>
      <CenterContent class="max-h-[calc(100vh-3rem)]">
        <div class="py-2">
          {@render children()}
        </div>
      </CenterContent>
    </div>
  </div>
{/if}
