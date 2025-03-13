<script lang="ts">
  import { LayoutSize } from "$lib/enums/layout.size";

  import MenuButton from "../navigation/navigation-button.svelte";
  import Navigation from "../navigation/navigation.svelte";
  import ThemeButton from "../theme-switcher/theme-button.svelte";
  import CenterContent from "../utils/center-content.svelte";
  import WidthLimiter from "../utils/width-limiter.svelte";
</script>

<header
  class="sticky top-0 z-40 row-start-1 border-y border-stone-400 bg-stone-100/50 backdrop-blur dark:border-stone-600 dark:bg-stone-900/50"
>
  <CenterContent class="grid h-12 grid-cols-layout">
    <a
      class="flex h-full items-center gap-2 px-4 font-heading text-2xl font-medium"
      href="/"
    >
      <enhanced:img
        src="$lib/images/logo.min.svg"
        alt="LVMann logo"
        fetchpriority="high"
        class="h-7 w-7 drop-shadow-lg"
      />
      LVMann
    </a>

    <WidthLimiter to={LayoutSize.Medium}>
      <MenuButton class="justify-self-end" />
    </WidthLimiter>

    <WidthLimiter from={LayoutSize.Medium}>
      <Navigation type="bar" />
    </WidthLimiter>

    <ThemeButton />
  </CenterContent>
</header>
