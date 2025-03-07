<script lang="ts">
  import { Copyright } from "lucide-svelte";

  import CenterContent from "../utils/center-content.svelte";
</script>

<CenterContent class="flex h-6 justify-end px-2">
  <small
    class="flex items-center gap-1 text-xs text-stone-600 dark:text-stone-400"
  >
    <Copyright class="h-3 w-3" />
    <span>Lukas Vendel Mann - {new Date().getFullYear()}</span>
  </small>
</CenterContent>
