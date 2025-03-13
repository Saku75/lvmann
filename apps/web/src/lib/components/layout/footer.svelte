<script lang="ts">
  import { Copyright } from "@lucide/svelte";

  import { versionStore } from "$lib/stores/version.svelte";

  import CenterContent from "../utils/center-content.svelte";
</script>

<footer>
  <CenterContent
    class="flex flex-col items-center justify-between p-2 sm:flex-row"
  >
    <small
      class="flex items-center gap-1 text-xs text-stone-600 dark:text-stone-400"
    >
      <Copyright class="h-3 w-3" />
      <span>Lukas Vendel Mann - {new Date().getFullYear()}</span>
    </small>
    <small
      class="flex items-center gap-1 text-xs text-stone-600 dark:text-stone-400"
    >
      Version: {versionStore.version}
    </small>
  </CenterContent>
</footer>
