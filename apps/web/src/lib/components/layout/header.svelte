<script lang="ts">
  import Menu from "lucide-svelte/icons/menu";
  import X from "lucide-svelte/icons/x";

  import { LayoutSize } from "$lib/enums/layout.size";
  import { layoutStore } from "$lib/stores/layout.svelte";
  import cn from "$lib/utils/cn";

  import Navigation from "../navigation/navigation.svelte";
  import { linkColors } from "../navigation/utils/link.colors";
  import CenterContent from "../utils/center-content.svelte";
  import WidthLimiter from "../utils/width-limiter.svelte";
</script>

<div class="sticky top-0 z-40 row-start-1 self-end">
  <header
    class="border-y border-stone-400 bg-stone-100/50 backdrop-blur dark:border-stone-600 dark:bg-stone-900/50"
  >
    <CenterContent class="grid h-12 grid-cols-layout">
      <a
        class="flex h-full items-center gap-2 px-4 text-2xl font-medium"
        href="/"
      >
        <enhanced:img
          src="$lib/images/logo.svg"
          alt="LVMann logo"
          class="h-7 w-7"
        />
        LVMann
      </a>

      <WidthLimiter to={LayoutSize.Medium}>
        <button
          class={cn(
            linkColors,
            "col-start-3 w-12 cursor-pointer justify-center",
          )}
          aria-label={layoutStore.menu.open ? "Close menu" : "Open menu"}
          on:click={() => (layoutStore.menu.open = !layoutStore.menu.open)}
        >
          {#if layoutStore.menu.open}
            <X class="h-8 w-8" />
          {:else}
            <Menu class="h-7 w-7" />
          {/if}
        </button>
      </WidthLimiter>

      <WidthLimiter from={LayoutSize.Medium}>
        <Navigation type="bar" />
      </WidthLimiter>
    </CenterContent>
  </header>
</div>
