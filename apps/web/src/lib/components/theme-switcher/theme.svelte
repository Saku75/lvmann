<script lang="ts">
  import Moon from "@lucide/svelte/icons/moon";
  import Sun from "@lucide/svelte/icons/sun";
  import SunMoon from "@lucide/svelte/icons/sun-moon";

  import { LayoutTheme } from "$lib/enums/layout.theme";
  import { layoutStore } from "$lib/stores/layout.svelte";
  import cn from "$lib/utils/cn";

  import { linkColor, linkColorActive } from "../navigation/utils/link.color";
</script>

<ul class="flex flex-col">
  <li class="contents">
    <button
      class={cn(
        linkColor,
        layoutStore.theme === LayoutTheme.System && linkColorActive,
        "cursor-pointer justify-center gap-1 px-4 py-1 font-heading text-xl capitalize",
      )}
      onclick={() => (
        (layoutStore.theme = LayoutTheme.System),
        (layoutStore.menu.open = false)
      )}
    >
      <SunMoon class="h-5.5 w-5.5" />
      {LayoutTheme.System}
    </button>
  </li>
  <li class="contents">
    <button
      class={cn(
        linkColor,
        layoutStore.theme === LayoutTheme.Light && linkColorActive,
        "cursor-pointer justify-center gap-1 px-4 py-1 font-heading text-xl capitalize",
      )}
      onclick={() => (
        (layoutStore.theme = LayoutTheme.Light), (layoutStore.menu.open = false)
      )}
    >
      <Sun class="h-5.5 w-5.5" />
      {LayoutTheme.Light}
    </button>
  </li>
  <li class="contents">
    <button
      class={cn(
        linkColor,
        layoutStore.theme === LayoutTheme.Dark && linkColorActive,
        "cursor-pointer justify-center gap-1 px-4 py-1 font-heading text-xl capitalize",
      )}
      onclick={() => (
        (layoutStore.theme = LayoutTheme.Dark), (layoutStore.menu.open = false)
      )}
    >
      <Moon class="h-5.5 w-5.5" />
      {LayoutTheme.Dark}
    </button>
  </li>
</ul>
